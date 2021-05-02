import actionCreator from "../../../redux/actionCreator";

export const ACTIVITY_ACTIONS = {
  SET_INITIAL_LOADING: "SET_INITIAL_LOADING",

  SET_LOADING_TRUE: "SET_LOADING_TRUE",
  SET_LOADING_FALSE: "SET_LOADING_FALSE",

  FETCH_ACTIVITY_START: "FETCH_ACTIVITY_START",
  FETCH_ACTIVITY_SUCCESS: "FETCH_ACTIVITY_SUCCESS",
  CLEAR_ALL_FETCHED_ARTWORKS: "CLEAR_ALL_FETCHED_ARTWORKS",

  // activity type filter
  SET_FILER_SELECTION: "SET_FILTER_SELECTION",

  // Like posts
  ADD_LIKE_ARTWORK: "ADD_LIKE_ARTWORK",
  REMOVE_LIKE_ARTWORK: "REMOVE_LIKE_ARTWORK",

  SELECT_ARTWORK_ID: "SELECT_ARTWORK_ID",

  SET_LAST_FETCHED_ARTWORK_INDEX: "SET_LAST_FETCHED_ARTWORK_INDEX",
};

export default {
  setInitialLoading(status: boolean): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_INITIAL_LOADING, { status });
  },

  setLoadingTrue(): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_LOADING_TRUE);
  },
  setLoadingFalse(): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_LOADING_FALSE);
  },

  fetchActivity(type: string): any {
    return actionCreator(ACTIVITY_ACTIONS.FETCH_ACTIVITY_START, {
      type,
    });
  },
  fetchActivitySuccess(item: any): any {
    return actionCreator(ACTIVITY_ACTIONS.FETCH_ACTIVITY_SUCCESS, {
      item,
    });
  },
  clearAllPosts(): any {
    return actionCreator(ACTIVITY_ACTIONS.CLEAR_ALL_FETCHED_ARTWORKS);
  },

  setFilterSelection(filter: any): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_FILER_SELECTION, {
      value: filter,
    });
  },

  // LIKE ARTWORK
  likeArtwork(artworkId: any): any {
    return actionCreator(ACTIVITY_ACTIONS.ADD_LIKE_ARTWORK, { artworkId });
  },
  dislikeArtwork(artworkId: any): any {
    return actionCreator(ACTIVITY_ACTIONS.REMOVE_LIKE_ARTWORK, { artworkId });
  },

  selectArtworkId(artworkId: any): any {
    return actionCreator(ACTIVITY_ACTIONS.SELECT_ARTWORK_ID, { artworkId });
  },

  setLastFetchedArtworkId(index: number): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_LAST_FETCHED_ARTWORK_INDEX, {
      index,
    });
  },
};
