import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNetworkConnectivity } from 'react-native-offline';
import LighterIcon from '../../svgs/lighter';
import styles from './styles';
import { changeFireColor } from './actions';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  lightLighter() {
    const { homeState: { fireColor }, dispatch } = this.props;
    if (fireColor === '#000') {
      dispatch(changeFireColor('red'));
    } else {
      dispatch(changeFireColor('#000'));
    }
  }
  render() {
    const { homeState: { fireColor }, isConnected } = this.props;
    return (
      <View style={styles.home}>
        <View style={styles.homeIcon}>
          <LighterIcon width={80} fireColor={fireColor} />
        </View>
        <Text style={styles.homeText}>
          Here is your home. Now let me light this lighter to show you the basic way to use redux and redux-persist. Read the code!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.lightLighter()}>
          <Text style={styles.buttonText}>Toggle light the lighter</Text>
        </TouchableOpacity>
        {isConnected ? (
          <Text>Connected</Text>
        ) : (
          <Text>Not connected</Text>
        )}
      </View>
    );
  }
}

const NetworkCheckHome = withNetworkConnectivity()(Home);
export default connect(state => ({
  homeState: state.homeState,
}))(NetworkCheckHome);
