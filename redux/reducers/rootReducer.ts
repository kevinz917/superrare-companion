import { combineReducers } from "redux";
import { activityReducer } from "../../modules/home/redux/activityReducer";

const rootReducer = combineReducers({
  activity: activityReducer,
});

export default rootReducer;
