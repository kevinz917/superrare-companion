import { combineReducers } from "redux";
import { produce } from "immer";

const initialTestState = {
  loading: false,
  testItem: null,
};

// test reducer for demo purposes
export const testReducer = produce((state, action) => {
  switch (action.type) {
    // case TEST_ACTIONS.SET_LOADING_TRUE:
    //   state.loading = true;
    //   break;
    // case TEST_ACTIONS.SET_LOADING_FALSE:
    //   state.loading = false;
    //   break;
    // case TEST_ACTIONS.FETCH_MOCK_ITEM_SUCCESS:
    //   state.testItem = action.payload;
    //   break;
    default:
      break;
  }
}, initialTestState);

const MasterReducer = combineReducers({
  test: testReducer,
});

export default MasterReducer;
