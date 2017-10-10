import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './createStore';
// Persist Loading compoonent
import PersistLoading from './components/persist-loading';
// Screens
import HomeScreen from './screens/home';

const { persistor, store } = createStore();

const onBeforeLift = () => {};

const AppStart = StackNavigator({
  Home: { screen: HomeScreen },
}, {
  cardStyle: {
    backgroundColor: '#fff',
  },
});
// Root component
function Root() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<PersistLoading />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <AppStart />
      </PersistGate>
    </Provider>
  );
}
// Calculate stylesheet
EStyleSheet.build();

export default Root;
