import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';

const styles = StyleSheet.create({
  logo: {
    position: 'relative',
    transform: [{
      translateY: 20,
    }],
  },
});

export default class FacebookLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: new Animated.Value(0),
    };
  }
  componentDidMount() {
  }
  animatedLogo() {

  }
  render() {
    const { fill, size = 1 } = this.props;
    return (
      <View style={styles.logo}>
        <Svg width={24 * size} height={49 * size} viewBox="0 0 24 49" version="1.1">
          <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <G id="1495134900_06-facebook" fillRule="nonzero" fill={fill}>
              <Path d="M23.43,15.739 L15.785,15.739 L15.785,10.725 C15.785,8.842 17.033,8.403 17.912,8.403 L23.307,8.403 L23.307,0.125 L15.877,0.096 C7.629,0.096 5.752,6.27 5.752,10.221 L5.752,15.739 L0.982,15.739 L0.982,24.269 L5.752,24.269 L5.752,48.406 L15.785,48.406 L15.785,24.269 L22.555,24.269 L23.43,15.739 Z" />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
