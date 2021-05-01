import actionCreator from "../../../redux/actionCreator";

export const ACTIVITY_ACTIONS = {
  SET_LOADING_TRUE: "SET_LOADING_TRUE",
  SET_LOADING_FALSE: "SET_LOADING_FALSE",

  FETCH_ACTIVITY_START: "FETCH_ACTIVITY_START",
  FETCH_ACTIVITY_SUCCESS: "FETCH_ACTIVITY_SUCCESS",
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
};
