import { baseUrl } from "./../../../common/api/constants";
import axios from "axios";
import { call, put, select, takeLatest, all } from "redux-saga/effects";
import activityActions, { ACTIVITY_ACTIONS } from "./activityActions";

const createSingleArtworkPromise = (assetId: number) => {
  return call(
    axios.get,
    `${baseUrl}/sr-json/v0/nfts/assets?asset_ids=${assetId}`
  );
};

// Mock generator function
function* fetchActivityItems(action: any): Generator {
  try {
    const fetchType = action.payload.type;

    // get last indexedItem
    const state: any = yield select();
    let lastFetchedArtworkIndex = state.activity.lastFetchedArtworkIndex;

    yield put(
      activityActions.setLastFetchedArtworkId(lastFetchedArtworkIndex + 10)
    );

    if (fetchType && fetchType === "initial") {
      yield put(activityActions.setInitialLoading(true));
    }

    if (fetchType === "refresh") {
      lastFetchedArtworkIndex = 0;
    }

    yield put(activityActions.setLoadingTrue());
    // mock fetch api item
    const fetchedRawPosts: any = yield call(
      axios.get,
      `${baseUrl}/sr-json/v0/nfts/events?limit=10&offset=${lastFetchedArtworkIndex}&categories=artwork&event_types=creation`
    );

    // return array
    let postList = [];
    const fetchedPostList = fetchedRawPosts.data;

    // Resolve promise list in parallel
    let artworkPromiseList = [];
    for (const post of fetchedPostList) {
      artworkPromiseList.push(createSingleArtworkPromise(post.assetId));
    }

    const res = yield all(artworkPromiseList);

    for (let i = 0; i < fetchedPostList.length; i++) {
      const returnObj: any = {};
      returnObj.event = fetchedPostList[i];
      returnObj.artwork = res[i].data[0];
      if (returnObj.artwork) {
        postList.push(returnObj);
      }
    }

    if (fetchType === "refresh") {
      yield put(activityActions.clearAllPosts());
    }

    yield put(activityActions.fetchActivitySuccess(postList));
    yield put(activityActions.setLoadingFalse());

    if (fetchType && fetchType === "initial") {
      yield put(activityActions.setInitialLoading(false));
    }
  } catch (e) {}
}

function* activitySaga(): Generator {
  yield takeLatest(ACTIVITY_ACTIONS.FETCH_ACTIVITY_START, fetchActivityItems); // get all items
}

export default activitySaga;
