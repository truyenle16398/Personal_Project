/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { SafeAreaView, View, ScrollView, Image, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerActions, DrawerItems } from 'react-navigation-drawer';
//SCREEN
import Login from './src/screen/login'
import Home from './src/screen/home'
import BottomNavigation from './src/screen/bottom-navigation'
import Register from './src/screen/register'
import RegisterDetail from './src/screen/register-detail'

//ICON
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from './src/core/color.enum';


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

const RegisterStack = createStackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: { headerShown: null }
    },
    RegisterDetail: {
      screen: RegisterDetail,
      navigationOptions: { headerShown: null }
    }
  }, { initialRouteName: 'Register' }
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

}, {
  contentComponent: (props) => (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 3, alignItems: 'center', }}>
        <Image
          style={{ height: 139, width: 139, marginTop: 34 }}
          source={require('./assets/parents.png')}
        />
        <Text style={{ color: Colors.BLUE, fontSize: 18, fontWeight: '700', marginTop: 5 }}>Ngô Thị Huyền Trâm</Text>
        <Text style={{ color: Colors.BLUE, fontSize: 18, fontWeight: '400' }}>0898 24 24 61</Text>
      </View>
      <View style={{ flex: 7 }}>
        <ScrollView showsHorizontalScrollIndicator>
          <DrawerItems iconContainerStyle={{ marginRight: 10 }} {...props} />
        </ScrollView>
      </View>
    </SafeAreaView>
  ), initialRouteName: 'Home'
});

const SwitchNavigator = createSwitchNavigator({
  Drawer: DrawerNavigator,
  Login: RootStack,
  BottomNavigation: BottomNavigationStack,
  Register: RegisterStack
}, {
  initialRouteName: 'Login'
});

const AppContainer = createAppContainer(SwitchNavigator);
