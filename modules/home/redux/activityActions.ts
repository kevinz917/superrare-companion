import actionCreator from "../../../redux/actionCreator";

export const ACTIVITY_ACTIONS = {
  SET_LOADING_TRUE: "SET_LOADING_TRUE",
  SET_LOADING_FALSE: "SET_LOADING_FALSE",

  FETCH_ACTIVITY_START: "FETCH_ACTIVITY_START",
  FETCH_ACTIVITY_SUCCESS: "FETCH_ACTIVITY_SUCCESS",

  // activity type filter
  SET_FILER_SELECTION: "SET_FILTER_SELECTION",

  // Like posts
  ADD_LIKE_ARTWORK: "ADD_LIKE_ARTWORK",
  REMOVE_LIKE_ARTWORK: "REMOVE_LIKE_ARTWORK",
};

export default {
  setLoadingTrue(): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_LOADING_TRUE);
  },
  setLoadingFalse(): any {
    return actionCreator(ACTIVITY_ACTIONS.SET_LOADING_FALSE);
  },

  fetchActivity(): any {
    return actionCreator(ACTIVITY_ACTIONS.FETCH_ACTIVITY_START);
  },
  fetchActivitySuccess(item: any): any {
    return actionCreator(ACTIVITY_ACTIONS.FETCH_ACTIVITY_SUCCESS, { item });
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
};
