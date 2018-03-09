import React from 'react';
import { TabNavigator,StackNavigator} from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { StyleSheet, View, Text } from "react-native";

import Home from './Home';
import Hot from './Hot';
import Images from './Image';
import Video from './Video';
import MenuExpand from './MenuExpand';

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
		backgroundColor: "#333333",
	}
});

const App = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      icon: ({ tintColor }) => <FontAwesome>{Icons.newspaper}</FontAwesome>
    })
  },
  Hot: {
    screen: Hot,
    navigationOptions: ({ navigation }) => ({
      title: "Hot",
      icon: ({ tintColor }) => <FontAwesome>{Icons.burn}</FontAwesome>
    })
  },
  Images: {
    screen: Images,
    navigationOptions: ({ navigation }) => ({
      title: "Images",
      icon: ({ tintColor }) => <FontAwesome>{Icons.image}</FontAwesome>
    })
  },
  Video: {
    screen: Video,
    navigationOptions: ({ navigation }) => ({
        title: "Video",
				icon: ({ tintColor }) => <FontAwesome>{Icons.youtube}</FontAwesome>
    })
  },
  MenuExpand: {
    screen: MenuExpand,
    navigationOptions: ({ navigation }) => ({
      title: "MenuExpand",
      icon: ({ tintColor }) => <FontAwesome>{Icons.alignJustify}</FontAwesome>
    })
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

export default App;