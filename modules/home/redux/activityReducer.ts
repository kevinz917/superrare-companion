import { ACTIVITY_FILTER_OPTIONS } from "./../constants/activityFilterOptions";
import { ACTIVITY_ACTIONS } from "./activityActions";
import { produce } from "immer";

interface activityState {
  initialLoading: boolean;
  loading: boolean;
  transitionLoading: boolean;
  posts: any;
  filter: any;
  likedArtworks: string[];
  selectedArtworkId: number;
  lastFetchedArtworkIndex: number;
}

const activityState: activityState = {
  initialLoading: true,
  loading: false,
  transitionLoading: false,
  posts: [],
  filter: ACTIVITY_FILTER_OPTIONS.BIDS,
  likedArtworks: [],
  selectedArtworkId: -1,
  lastFetchedArtworkIndex: 0,
};

// test reducer for demo purposes
export const activityReducer = produce((state, action) => {
  switch (action.type) {
    case ACTIVITY_ACTIONS.SET_INITIAL_LOADING:
      state.initialLoading = action.payload.status;
      break;
    case ACTIVITY_ACTIONS.SET_TRANSITION_LOADING:
      state.transitionLoading = action.payload.status;
      break;

    case ACTIVITY_ACTIONS.SET_LOADING_TRUE:
      state.loading = true;
      break;
    case ACTIVITY_ACTIONS.SET_LOADING_FALSE:
      state.loading = false;
      break;

    // Main fetch event
    case ACTIVITY_ACTIONS.FETCH_ACTIVITY_SUCCESS:
      state.posts = state.posts.concat(action.payload.item);
      break;
    case ACTIVITY_ACTIONS.CLEAR_ALL_FETCHED_ARTWORKS:
      state.posts = [];
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

    case ACTIVITY_ACTIONS.SET_LAST_FETCHED_ARTWORK_INDEX:
      state.lastFetchedArtworkIndex = action.payload.index;
      break;

    default:
      break;
  }
}, activityState);
