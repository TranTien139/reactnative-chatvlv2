import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
} from 'react-native';

import styles from './styles';
import {Header} from 'react-native-elements';

class Detail extends Component {

  handleBack = ()=> {
    this.props.navigation.navigate('Home');
    // if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
    //   this.navigator.pop();
    //   return true; //avoid closing the app
    // }
    // return false; //close the app
  }

  render() {
    const { id,image,type ,title, getUser,linkVideo } = this.props.navigation.state.params;
    return (
      <View>
        <Header
      leftComponent={{ icon: 'chevron-left', color: '#fff'}}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
        <ScrollView>
            <Text style={{flex:1, height:50}} onPress={this.handleBack.bind(this)}  >quay lại</Text>
            <View style={styles.container}>
                <Text style={styles.welcome}>{title}</Text>
                <Image style={{flex: 1, height: 250}}  source={{uri: image}} />
                
            </View>
        </ScrollView>
        </View>
    );
  }
}

export default Detail;