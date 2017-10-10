import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createNetworkMiddleware } from 'react-native-offline';
import rootReducer from './rootReducers';

const config = {
  key: 'passeportNansen',
  storage,
};

const reducer = persistReducer(config, rootReducer);
const networkMiddleware = createNetworkMiddleware();
const middleware = applyMiddleware(networkMiddleware, thunk);

export default (data) => {
  const store = createStore(reducer, data, middleware);
  const persistor = persistStore(store);
  return { persistor, store };
};
