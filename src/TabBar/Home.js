import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'home',
    tabBarLabel: 'home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/notification-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Hello everybody</Text>
          <Text style={styles.instructions}>I'm Tien</Text>
          <Text style={styles.instructions}>I'm Full stack developer</Text>
      </View>
    );
  }
}

export default Home;