import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
  YellowBox,
  TouchableOpacity
} from 'react-native';

import { Button,Header,SocialIcon  } from 'react-native-elements'

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import * as actions from '../actions/getArticle';
import {NiceTime} from './../functions/common';


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
    this.props.getArticleNew(1);
  }

  showDetail = (object)=>{
    this.props.navigation.navigate('Detail', {...object});
  }

  render() {
    const { navigate } = this.props.navigation;
    let list_article = this.props.article.article;
    return (
      <View>
      <ScrollView>
        { list_article.map((object)=>{
                                return (
                                  <TouchableOpacity key={Math.random()} onPress={this.showDetail.bind(this, object)}>
                                  <View style={{ flex: 1 }} >
                                <Text style={styles.title} >{object.title}</Text>
                                <Text style={{ marginBottom:10 }} >Đăng bởi: {object.getUser.name}, {NiceTime(object.published_at)}, {object.total_like}' Thích' ,{object.total_comment}' Bình luận' </Text>
                                <Image style={{flex: 1, height: 250}}  source={{uri: object.image}} />
                              </View>
                              </TouchableOpacity>
                              )
                            })
                            }

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    paddingTop: 20,
    paddingBottom: 10
  }
});

const mapStateToProps = state => ({
  article: state.article,
  page: state.page
});

export default connect(mapStateToProps, actions)(Home);