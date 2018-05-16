import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input , Header, SocialIcon  } from 'react-native-elements';

import {NavigationActions} from 'react-navigation';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
  
      handleChangeText = () =>{
          console.log('xin chao');
      }

      handleBack = () => {
        this.props.navigation.dispatch(NavigationActions.back())
      }

  render() {
    return (
      <View >
           <Header
      leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: this.handleBack }}
      centerComponent={{ text: 'Trang Đăng nhập', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
    
      <SocialIcon
  title='Đăng nhập với facebook'
  button
  type='facebook'
/>

     </View>
    );
  }
}

const stlesload = StyleSheet.create({
    loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    }
  });

export default Login;




