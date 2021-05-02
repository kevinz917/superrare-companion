import { ACTIVITY_FILTER_OPTIONS } from "./../constants/activityFilterOptions";
import { ACTIVITY_ACTIONS } from "./activityActions";
import { combineReducers } from "redux";
import { produce } from "immer";

const initialTestState = {
  loading: false,
  posts: [],
  filter: ACTIVITY_FILTER_OPTIONS.ALL_AUCTIONS,
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
    case ACTIVITY_ACTIONS.SET_FILER_SELECTION:
      state.filter = action.payload.value;
      break;
    default:
      break;
  }
}, initialTestState);
