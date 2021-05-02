import axios from "axios";
import { call, put, select, takeLatest, all } from "redux-saga/effects";
import activityActions, { ACTIVITY_ACTIONS } from "./activityActions";

const createSingleArtworkPromise = (assetId: number) => {
  return call(
    axios.get,
    `https://superrare.co/sr-json/v0/nfts/assets?asset_ids=${assetId}`
  );
};

// Mock generator function
function* fetchMockItems(): Generator {
  try {
    // get last indexedItem
    const state: any = yield select();
    const lastFetchedArtworkIndex = state.activity.lastFetchedArtworkIndex;
    console.log(lastFetchedArtworkIndex);

    if (lastFetchedArtworkIndex !== 0) {
      yield put(
        activityActions.setLastFetchedArtworkId(lastFetchedArtworkIndex + 10)
      );
    }

    // yield put(activityActions.setLoadingTrue());
    // mock fetch api item
    const fetchedRawPosts: any = yield call(
      axios.get,
      `https://superrare.co/sr-json/v0/nfts/events?limit=10&offset=${lastFetchedArtworkIndex}&categories=artwork&event_types=creation`
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

    yield put(activityActions.fetchActivitySuccess(postList));
    // yield put(activityActions.setLoadingFalse());
  } catch (e) {}
}

function* activitySaga(): Generator {
  yield takeLatest(ACTIVITY_ACTIONS.FETCH_ACTIVITY_START, fetchMockItems); // get all items
}

export default activitySaga;
