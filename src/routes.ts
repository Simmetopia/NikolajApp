import { NavigationContainer, TabNavigator } from 'react-navigation';

import LinksScreen from './LinksScreen';
import RandomScreen from './RandomScreen';

const RootRouter: NavigationContainer = TabNavigator({
  Links: {
    screen: LinksScreen,
  },
  Random: {
    screen: RandomScreen,
  },
});

export default RootRouter;
