// Put all reducers here
import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import homeReducer from './screens/home/reducer';

const rootReducer = combineReducers({
  homeState: homeReducer,
  network, // Reducer for react-native-offline
});

export default rootReducer;
