import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class MenuExpand extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/expand.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>MenuExpand</Text>
      </View>
    );
  }
}

export default MenuExpand;