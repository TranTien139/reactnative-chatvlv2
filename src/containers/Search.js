import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import { ListItem, SearchBar, Header } from 'react-native-elements';
import {NavigationActions} from 'react-navigation';

class Search extends Component {
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
      <View>
          <Header
      leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: this.handleBack }}
      centerComponent={{ text: 'Trang Tìm kiếm', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
         <SearchBar
        showLoading
        lightTheme
        round
         searchIcon={{ size: 24 }}
         onChangeText={this.handleChangeText.bind(this)}
         onClear={this.handleChangeText.bind(this)}
         placeholder='Type Here...' />
     </View>
    );
  }
}

export default Search;




