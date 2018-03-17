import React from 'react';
import { TabNavigator,StackNavigator} from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { StyleSheet, View, Text } from "react-native";

import Home from './Home';
import Hot from './Hot';
import Images from './Image';
import Video from './Video';
import MenuExpand from './MenuExpand';
import Detail from './Detail';

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
		height: 20,
    backgroundColor: "transparent"
	},
	tabBar: {
		backgroundColor: "#999999",
	}
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  Hot: {
    screen: Hot
  },
  Images: {
    screen: Images
  },
  Video: {
    screen: Video
  },
  MenuExpand: {
    screen: MenuExpand
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
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
