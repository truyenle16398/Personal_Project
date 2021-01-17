import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import mainStyles from '../core/main-styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

interface Props {
  title: string,
  buttonRight: string,
  onPress: any,
  onBack: any
}

export default class Header extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, buttonRight, onPress, onBack} = this.props
    let name: string = ''
    switch (buttonRight) {
      case 'plus':
        name = 'add-outline'
        break;
      case 'print':
        name = 'print-outline'
        break;
      case 'search':
        name = 'search-outline'
        break;
      default:
        break;
    }
    return (
      <View style={mainStyles.containerHeader}>
        <TouchableOpacity onPress={() => onBack()} style={{ paddingVertical: 12 }}>
          <Ionicons name='chevron-back' color='rgba(0,0,0,0.5)' size={32} />
        </TouchableOpacity>
        <Text style={mainStyles.titleHeader}>{title}</Text>
        {buttonRight !== '' ? (
          <TouchableOpacity onPress={() => onPress()} style={{ paddingVertical: 12 }}>
            <Ionicons name={name} color='rgba(0,0,0,0.5)' size={32} />
          </TouchableOpacity>
        ) : (<Ionicons name='add-outline' color='#fff' size={32} />)}
      </View>
    )
  }
}
