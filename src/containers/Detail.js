import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
  WebView,
  Platform
} from 'react-native';


import styles from './styles';
import {Header} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';

// import YouTube from 'react-native-youtube'

class Detail extends Component {

  handleBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { id, image, type, title, getUser, linkVideo } = this.props.navigation.state.params;
    return (
      <View>
        <Header
      leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: this.handleBack }}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
        <ScrollView>
          { linkVideo === '' ?  <View style={styles.container}>
                <Image style={{flex: 1, height: 250}}  source={{uri: image}} />
              </View> :<View style={styles.container}>
              </View>
          }
        </ScrollView>
        </View>
    );
  }
}

const styles_detail = StyleSheet.create({
  
 WebViewContainer: {
  
     marginTop: (Platform.OS == 'ios') ? 20 : 0,
  
   }
   
 });

//  <YouTube
//  videoId="KVZ-P-ZI6W4"   // The YouTube video ID
//  play={true}             // control playback of video with true/false
//  fullscreen={true}       // control whether the video should play in fullscreen or inline
//  loop={true}             // control whether the video should loop when ended

//  onReady={e => this.setState({ isReady: true })}
//  onChangeState={e => this.setState({ status: e.state })}
//  onChangeQuality={e => this.setState({ quality: e.quality })}
//  onError={e => this.setState({ error: e.error })}

//  style={{ alignSelf: 'stretch', height: 300 }}
// />

export default Detail;