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

import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

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
              </View> :
              <View style={styles.container}>
              {/* <YouTube
              ref={component => {
                this._youTubeRef = component;
              }}
              apiKey="AIzaSyDHC6wv9f0_qFnoKnM6Bf8ElpuhXVRi674"
              videoId="ncw4ISEU5ik"
              play={this.state.isPlaying}
              loop={this.state.isLooping}
              fullscreen={this.state.fullscreen}
              controls={1}
              style={{ alignSelf: 'stretch', height: 300 }}
              onError={e => this.setState({ error: e.error })}
              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
              onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
            ></YouTube> */}
            </View> 
          }
        </ScrollView>
        </View>
    );
  }
}

export default Detail;