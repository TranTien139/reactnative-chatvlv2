import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
  YellowBox,
  TouchableOpacity,
  ListView,
  ActivityIndicator
} from 'react-native';

import { Button,Header,SocialIcon  } from 'react-native-elements'

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import * as actions from '../actions/getArticle';
import {NiceTime} from './../functions/common';

import styles from './styles';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        article: [],
        page: 1
    };
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
    ]);
    this.showDetail = this.showDetail.bind(this)
}

  componentDidMount(){
    if(!this.props.page.pageHome) {
      this.props.getArticleNew(2);
    }
  }

  showDetail = (object)=>{
    this.props.navigation.navigate('Detail', {...object});
  }

  render() {
    const { navigate } = this.props.navigation;
    let list_article = this.props.article.article;
    let is_loading  = this.props.article.isloading
    if(is_loading === true){
    return (
        <View style={stlesload.loading}>
          <ActivityIndicator size="large" />
        </View>
    );
    } else {
      return(
        <ScrollView>
          { list_article.map((object)=>{
                                return (
                                  <TouchableOpacity key={Math.random()} onPress={this.showDetail.bind(this, object)}>
                                    <View style={{ flex: 1 }} >
                                      <View style={styles.boxListHome}>
                                        <Text style={styles.titleHome}>{object.title}</Text>
                                        <Text style={ [styles.marginBotom] } >Đăng bởi: {object.getUser.name}, {NiceTime(object.published_at)}, {object.total_like}' Thích', {object.total_comment}' Bình luận' </Text>
                                      </View>
                                      <Image style={styles.imageHome}  source={{uri: object.image}} />
                                    </View>
                                  </TouchableOpacity>
                              )
            })
          }
      </ScrollView>
    );
  }
  }
}

const mapStateToProps = state => ({
  article: state.article,
  page: state.page
});

const stlesload = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
    backgroundColor: '#ecf0f1',
  }
});

export default connect(mapStateToProps, actions)(Home);