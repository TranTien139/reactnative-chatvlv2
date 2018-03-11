import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Button,
  ScrollView,
  YellowBox
} from 'react-native';

import styles from './styles';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import * as actions from '../actions/getArticle';

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
}

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  componentDidMount(){
    this.props.getArticleNew(1);
  }

  render() {
    const { navigate } = this.props.navigation;
    let list_article = this.props.article.article;
    return (
      <ScrollView>
  
        { list_article.map((object)=>{
                                return <Text key={Math.random()} >{object.title}</Text>
                            })
                            }

      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article,
  page: state.page
});

export default connect(mapStateToProps, actions)(Home);