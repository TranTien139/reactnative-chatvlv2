import React from 'react';
import { TabNavigator,StackNavigator} from 'react-navigation';
import { StyleSheet, View, Text, Image } from "react-native";
import { Icon  } from 'react-native-elements'

import Home from './Home';
import Hot from './Hot';
import Images from './Image';
import Video from './Video';
import MenuExpand from './MenuExpand';
import Detail from './Detail';
import Search from './Search';
import Login from './Login';

const styles = StyleSheet.create({
	tab: {
		padding: 10
	},
	indicator: {
		width: 0,
		height: 0
	},
	label: {
		fontSize: 10
	},
	icon: {
		width: 20,
		height: 20
	},
	tabBar: {
		backgroundColor: "#0643a5",
	}
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Trang chủ',
      tabBarIcon:() => <Icon name='home'  color='#fff' />
    }
  },
  Hot: {
    screen: Hot,
    navigationOptions: {
      tabBarLabel: 'Bài hot',
      tabBarIcon:() => <Icon name='launch'  color='#fff' />
    }
  },
  Images: {
    screen: Images,
    navigationOptions: {
      tabBarLabel: 'Bài ảnh',
      tabBarIcon:() => <Icon name='image'  color='#fff' />
    }
  },
  Video: {
    screen: Video,
    navigationOptions: {
      tabBarLabel: 'Bài video',
      tabBarIcon:() => <Icon name='tab'  color='#fff' />
    }
  },
  MenuExpand: {
    screen: MenuExpand,
    navigationOptions: {
      tabBarLabel: 'Mở rộng',
      tabBarIcon:() => <Icon name='menu'  color='#fff' />
    }
  }
},{
  initialRouteName: "Home",
  tabBarPosition: "bottom",
  swipeEnabled: false,
  animationEnabled: true,
  lazy: true,
  order: ["Home","Hot","Images","Video","MenuExpand"],
  backBehavior: "initialRoute",
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    upperCaseLabel: false,
    scrollEnabled: false,
    tabStyle: styles.tab,
    indicatorStyle: styles.indicator,
    labelStyle: styles.label,
    iconStyle: styles.icon,
    style: styles.tabBar
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Detail: {
    screen: Detail
  },
  Search: {
    screen: Search
  },
  Login: {
    screen: Login
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

