import { combineReducers } from "redux";
import { produce } from "immer";
import { ACTIVITY_ACTIONS } from "../../modules/home/redux/activityActions";

const initialTestState = {
  loading: false,
  posts: [],
};

// test reducer for demo purposes
export const activityReducer = produce((state, action) => {
  switch (action.type) {
    case ACTIVITY_ACTIONS.SET_LOADING_TRUE:
      state.loading = true;
      break;
    case ACTIVITY_ACTIONS.SET_LOADING_FALSE:
      state.loading = false;
      break;
    case ACTIVITY_ACTIONS.FETCH_ACTIVITY_SUCCESS:
      state.posts = action.payload.item;
      break;
    default:
      break;
  }
}, initialTestState);

const rootReducer = combineReducers({
  activity: activityReducer,
});

export default rootReducer;
