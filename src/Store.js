import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { repositoryReducer } from "./_reducers/repositoryReducer";
import { gitNameReducer } from "./_reducers/gitNameReducer";
import { contentReducer } from './_reducers/fileContentReducer';
import { combineReducers } from 'redux';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * @constant store
 * The Redux store.
 */
let rootReducer = combineReducers({ repos: repositoryReducer, gitName: gitNameReducer, fileContent: contentReducer })
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));