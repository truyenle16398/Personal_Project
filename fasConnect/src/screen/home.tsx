import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation-drawer';

interface Props {
  navigation: any
}

export default class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>HOME SCREEN</Text>
        <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <Text>CLICH ME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
