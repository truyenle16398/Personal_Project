/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerActions, DrawerItems } from 'react-navigation-drawer';
//SCREEN
import Login from './src/screen/login'
import Home from './src/screen/home'
import BottomNavigation from './src/screen/bottom-navigation'

//ICON
import IconAntDesign from 'react-native-vector-icons/AntDesign';


export default class App extends React.Component<{}> {
  render() {
    return (
      <AppContainer />
    );
  }
};

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { headerShown: null }
    }
  }, { initialRouteName: 'Login' }
);

const BottomNavigationStack = createStackNavigator(
  {
    BottomNavigation: {
      screen: BottomNavigation,
      navigationOptions: { headerShown: null }
    }
  }, { initialRouteName: 'BottomNavigation' }
)

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { headerShown: null }
    }
  }, { initialRouteName: 'Home' }
)

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BottomNavigationStack,
    navigationOptions: {
      title: 'Trang chủ',
      drawerIcon: <IconAntDesign name='home' size={23} color='#000' />
    }
  },
  // Home2: {
  //   screen: HomeStack,
  //   navigationOptions: {
  //     title: 'Trang chủ 2 ',
  //     drawerIcon: <IconAntDesign name='home' size={23} color='#000' />
  //   }
  // },

}, { initialRouteName: 'Home' });

const SwitchNavigator = createSwitchNavigator({
  Drawer: DrawerNavigator,
  Login: RootStack,
  BottomNavigation: BottomNavigationStack
}, {
  initialRouteName: 'Login'
});

const AppContainer = createAppContainer(SwitchNavigator);
