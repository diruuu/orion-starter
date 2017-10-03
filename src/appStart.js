import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import createStore from './createStore';
// Screens
import HomeScreen from './screens/home';

const store = createStore();
const AppStart = StackNavigator({
  Home: { screen: HomeScreen },
});
// Root component
function Root() {
  return (
    <Provider store={store}>
      <AppStart />
    </Provider>
  );
}
// Calculate stylesheet
EStyleSheet.build();

export default Root;
