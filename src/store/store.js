import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getDataReducer } from './reducers/main';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};

const reducers = combineReducers({
  getDataReducer,
});
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
