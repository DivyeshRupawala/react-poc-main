import counterReducer from "./counter";
import gridDataListReducer from "./gridDataList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    dataList: gridDataListReducer
});

export default allReducers;