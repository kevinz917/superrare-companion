import { ACTIVITY_FILTER_OPTIONS } from "./../constants/activityFilterOptions";
import { ACTIVITY_ACTIONS } from "./activityActions";
import { combineReducers } from "redux";
import { produce } from "immer";

interface activityState {
  loading: boolean;
  posts: any;
  filter: any;
  likedArtworks: string[];
  selectedArtworkId: number;
}

const activityState: activityState = {
  loading: false,
  posts: [],
  filter: ACTIVITY_FILTER_OPTIONS.ALL_AUCTIONS,
  likedArtworks: [],
  selectedArtworkId: -1,
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
    case ACTIVITY_ACTIONS.ADD_LIKE_ARTWORK:
      const id = action.payload.artworkId;
      if (!state.likedArtworks.includes(id)) {
        state.likedArtworks.push(id);
      }
      break;

    case ACTIVITY_ACTIONS.REMOVE_LIKE_ARTWORK:
      const artworkId = action.payload.artworkId;
      const likedArtworksCopy = [...state.likedArtworks];

      if (state.likedArtworks.includes(artworkId)) {
        let idx = state.likedArtworks.indexOf(artworkId);
        if (idx > -1) {
          likedArtworksCopy.splice(idx, 1);
        }
      }
      state.likedArtworks = likedArtworksCopy;

      break;
    case ACTIVITY_ACTIONS.SELECT_ARTWORK_ID:
      state.selectedArtworkId = action.payload.artworkId;
      break;

    default:
      break;
  }
}, activityState);
