import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class Images extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/image.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Image</Text>
      </View>
    );
  }
}

export default Images;