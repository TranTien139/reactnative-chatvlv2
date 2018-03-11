import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class Hot extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/hot.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>hot</Text>
      </View>
    );
  }
}

export default Hot;