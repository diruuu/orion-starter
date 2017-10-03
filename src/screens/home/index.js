import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import FacebookLogo from '../../svgs/facebook-logo';
import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text>
          This is your home. Now you are not a homeless anymore. Congratulation.
        </Text>
        <FacebookLogo />
      </View>
    );
  }
}

export default connect(state => ({
  homeState: state.homeState,
}))(Home);
