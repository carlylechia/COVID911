import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import countriesReducer from './countries/countries';
import regionsReducer from './regions/regions';

const rootReducer = combineReducers({ countriesReducer, regionsReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
