import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './home'
import TempScreen from './temp'
import NotificationScreen from './notification'

interface Props {
  navigation: any
}

interface State {
  index: number,
  routes: any
}


export default class BottomNavigation extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
      routes: [
        {key: 'openDrawer', icon: 'reorder-three-outline'},
        {key: 'contact', icon: 'people-outline'},
        {key: 'home', icon: 'home-outline'},
        {key: 'notifications', icon: 'notifications-outline'},
        {key: 'gallery', icon: 'images-outline'}
      ]
    }
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'contact':
        return <TempScreen />
      case 'home':
        return <Home {...this.props} />
      case 'notifications':
        return <NotificationScreen />
      case 'gallery':
        return <TempScreen />
      default:
        return null;
    }
  }

  onChangeTab = (index) => {
    index !== 0
      ? this.setState({ index })
      : this.props.navigation.dispatch(DrawerActions.openDrawer())
  };

  render() {
    const { index, routes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <TabView
          lazy
          tabBarPosition={'bottom'}
          navigationState={{ index, routes }}
          renderScene={this.renderScene}
          onIndexChange={this.onChangeTab}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({ route, focused, color }) => (
                <Ionicons name={route.icon} color='rgba(0,0,0,0.5)' size={28} style={{ marginVertical: 4 }} />
              )}
              activeColor='#039be5'
              inactiveColor='silver'
              indicatorContainerStyle={{ backgroundColor: '#fff' }}
              indicatorStyle={{ backgroundColor: '#039be5', height: 5 }}
            />
          )}
        />
      </View>
    );
  }
}
