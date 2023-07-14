import { createStore } from "redux";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import todos from "./Reducers/todos"
import logger from "redux-logger";
import thunk from "redux-thunk";


const rootreducer = combineReducers({user:todos});
  export const store = configureStore({reducer:rootreducer,middleware:[thunk,logger]})


// export const store = createStore(rootReducer)
 