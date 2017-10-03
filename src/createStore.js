import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Put all reducers here
import homeReducer from './screens/home/reducer';

const middleware = applyMiddleware(thunk);
export default (data: Object = {}) => {
  const rootReducer = combineReducers({
    homeState: homeReducer,
  });
  return createStore(rootReducer, data, middleware);
};
