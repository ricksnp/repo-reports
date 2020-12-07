import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";
import {repositoryReducer} from "./_reducers/repositoryReducer";

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * @constant store
 * The Redux store.
 */
export const store = createStore(repositoryReducer, composeEnhancers(applyMiddleware(thunk)));