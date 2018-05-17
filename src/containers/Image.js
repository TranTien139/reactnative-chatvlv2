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
import {domain} from '../config/config_domain.js';
import axios from 'axios';

import styles from './styles';

class Images extends Component {
  constructor(props){
    super(props);
    this.fetchMore = this._fetchMore.bind(this);
    this.fetchData = this._fetchData.bind(this);
    this.state = {
      dataSource: null,
      isLoading: true,
      isLoadingMore: false,
      _data: null,
      page: 1,
    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
    ]);
    this.showDetail = this.showDetail.bind(this)
}

  _fetchData(callback) {
      axios.post(domain+'/articles/getArticleNew',{user_id: "0", type:1, size:10, page: this.state.page}).then(response=>{
        response = response.data;
        response = response.data.results;
        callback(response);
      }).catch(err=>{
        callback([]);
     });
  }

  _fetchMore() {
    this.fetchData(responseJson => {
      const data = this.state._data.concat(responseJson);
      let page =  this.state.page + 1;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoadingMore: false,
        _data: data,
        page: page
      });
    });
  }

  componentDidMount() {
    this.fetchData(responseJson => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      });
      const data = responseJson;
      let page =  this.state.page + 1;
      this.setState({
        dataSource: ds.cloneWithRows(data),
        isLoading: false,
        _data: data,
        page: page,
      });
    });
  }

  showDetail = (object)=>{
    this.props.navigation.navigate('Detail', {...object});
  }

  render() {
    const { navigate } = this.props.navigation;
  if (this.state.isLoading) {
    return (
      <View style={stlesload.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => {
                         return (
                                  <TouchableOpacity key={Math.random()} onPress={this.showDetail.bind(this, rowData)}>
                                    <View style={{ flex: 1 }} >
                                      <View style={styles.boxListHome}>
                                        <Text style={styles.titleHome}>{rowData.title}</Text>
                                        <Text style={ [styles.marginBotom] } >Đăng bởi: {rowData.getUser.name}, {NiceTime(rowData.published_at)}, {rowData.total_like}' Thích', {rowData.total_comment}' Bình luận' </Text>
                                      </View>
                                      <Image style={styles.imageHome}  source={{uri: rowData.image}} />
                                    </View>
                                  </TouchableOpacity>
                         )
        }}
        onEndReached={() =>
          this.setState({ isLoadingMore: true }, () => this.fetchMore())}
          onEndReachedThreshold={10}
        renderFooter={() => {
          return (
            this.state.isLoadingMore &&
            <View style={{ flex: 1, padding: 10 }}>
              <ActivityIndicator size="small" />
            </View>
          );
        }}
      />
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
    backgroundColor: '#ecf0f1',
  }
});

export default connect(mapStateToProps, actions)(Images);