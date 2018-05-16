import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { ListItem } from 'react-native-elements'

class MenuExpand extends Component {

  
  handleRedirect = (navigation)=>{
    this.props.navigation.navigate(navigation,{});
  }
  render() {

    const list = [
      {
        title: 'Tìm Kiếm',
        icon: 'av-timer',
        navigation: 'Search'
      },
      {
        title: 'Đăng nhập',
        icon: 'flight-takeoff',
        navigation: 'Login'
      }
    ]
    
    return (
      <View>
      {
      list.map((item, i) => (
        <TouchableOpacity key={Math.random()} onPress={this.handleRedirect.bind(this,item.navigation)}>
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
        />
        </TouchableOpacity>
      ))
    }
  </View>
    );
  }
}

export default MenuExpand;




