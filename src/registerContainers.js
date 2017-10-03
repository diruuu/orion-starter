import Navigation from 'react-native-navigation';
import Home from './screens/home';

export default function registerContainers() {
  Navigation.registerContainer('oktopus.HomeScreen', () => Home);
}
