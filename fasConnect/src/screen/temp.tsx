import React from 'react';
import { View, Text } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather'

export default class TempScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <IconFeather name='info' size={100} color='silver' />
        <Text style={{ color: 'silver', fontSize: 18, margin: 12, textAlign: 'center' }}>
          Tính năng chưa được cập nhật ...
        </Text>
      </View>
    );
  }
}
