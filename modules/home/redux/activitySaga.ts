import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import activityActions, { ACTIVITY_ACTIONS } from "./activityActions";

// Mock generator function
function* fetchMockItems(): Generator {
  try {
    yield put(activityActions.setLoadingTrue());
    // mock fetch api item
    const fetchedRawPosts: any = yield call(
      axios.get,
      `https://superrare.co/sr-json/v0/nfts/events?limit=5&offset=0&categories=artwork&event_types=creation`
    );

    let postList = [];
    const fetchData = fetchedRawPosts.data;

    for (const post of fetchData) {
      const returnObj: any = {};
      returnObj.event = post;
      const fetchedArtwork: any = yield call(
        axios.get,
        `https://superrare.co/sr-json/v0/nfts/assets?asset_ids=${post.assetId}`
      );
      returnObj.artwork = fetchedArtwork.data[0];
      postList.push(returnObj);
    }

    console.log(postList);
    yield put(activityActions.fetchActivitySuccess(postList));
    yield put(activityActions.setLoadingFalse());
  } catch (e) {}
}

function* activitySaga(): Generator {
  yield takeLatest(ACTIVITY_ACTIONS.FETCH_ACTIVITY_START, fetchMockItems); // get all items
}

export default activitySaga;
