import {combineReducers} from "redux" ; 
import { productReducer, selectedReducer } from "./product-reducer";

const reducers = combineReducers({
    productReducer : productReducer,
    selectedReducer : selectedReducer
});

export default reducers;