import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import mainStyles from '../core/main-styles';
import styles from './../styles/notification-styles';
import Header from './../components/header'
import dataNotification from './../data/notification-data.json'

interface Props {
  navigation: any
}

export default class NotificationScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  _renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.notiItem}>
        <Text style={styles.title}>{item.title.lenght >= 52 ? `${item.title.substr(0, 48)} ...` : item.title}</Text>
        <Text style={styles.shortDescription}>{item.shortDescription}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <>
        <Header
          title='Thông báo'
          buttonRight='search'
          onPress={() => console.log('Thông báo')}
          onBack={() => console.log('Thông báo')}
          {...this.props}
        />
        <View style={mainStyles.container}>
          <FlatList
            data={dataNotification}
            renderItem={this._renderItems}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>

    )
  }
}
