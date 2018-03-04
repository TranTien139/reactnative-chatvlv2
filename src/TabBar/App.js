import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Hot from './Hot';
import Images from './Image';
import Video from './Video';
import MenuExpand from './MenuExpand';

const App = TabNavigator({
    Home: { screen: Home },
    Hot: { screen: Hot },
    Images: { screen: Images },
    Video: { screen: Video },
    MenuExpand: { screen: MenuExpand }
}, {
  tabBarOptions: { 
    activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

export default App;