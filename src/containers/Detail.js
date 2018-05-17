import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
  WebView,
  Platform,
  Dimensions ,
  ActivityIndicator
} from 'react-native';


import {Header} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import {NiceTime} from './../functions/common';

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

  ActivityIndicatorLoadingView() {
    
    return (

      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  render() {
    const { id, image, type, title, getUser, linkVideo,published_at, total_like, total_comment } = this.props.navigation.state.params;
    return (
      <View>
        <Header
      leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: this.handleBack }}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
        <ScrollView>
          { linkVideo === '' ?  <View style={styles.container}>
                <Image style={styles_image.image} resizeMode={'contain'}  source={{uri: image}} />
            
              </View> :
              <View>
          <WebView 
         style={styles.WebViewStyle} 
         source={{uri: 'https://www.youtube.com/embed/PGUMRVowdv8'}} 
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}  
         />
            </View> 
          }
          <View>
         <Text >Đăng bởi: {getUser.name}, {NiceTime(published_at)}, {total_like} Thích, {total_comment} Bình luận</Text>
         </View> 
        </ScrollView>
        </View>
    );
  }
}

const win = Dimensions.get('window');
const styles_image = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: win.width,
        height: win.height,
    }
});

const styles = StyleSheet.create(
  {
   
  WebViewStyle:
  {
     justifyContent: 'center',
     alignItems: 'center',
     flex:1,
     marginTop: (Platform.OS) === 'ios' ? 20 : 0
  },
   
  ActivityIndicatorStyle:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
  });

export default Detail;