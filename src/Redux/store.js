import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {stateReducer} from "./logReducer";
import {noteReducer} from "./noteReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    Logs: stateReducer,
    Notes: noteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;