import {combineReducers} from "@reduxjs/toolkit"
import SliceReducer from "./slices"

const rootReducer = combineReducers({
  auth:SliceReducer
})
export default rootReducer