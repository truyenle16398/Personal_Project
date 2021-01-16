import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from './../core/main-styles'
import Header from './../components/header'
import { FlatList } from 'react-native-gesture-handler';

const imgData = [
  { image: require('./../../assets/gallery1.jpg') },
  { image: require('./../../assets/gallery2.jpg') },
  { image: require('./../../assets/gallery3.jpg') },
  { image: require('./../../assets/gallery4.jpg') },
  { image: require('./../../assets/gallery5.jpg') },
  { image: require('./../../assets/gallery6.jpg') },
  { image: require('./../../assets/gallery7.jpg') },
]

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  _renderImage = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={styles.imageTouchable}
          source={item.image}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <>
        <Header title='Album ảnh' buttonRight='plus' />
        <View style={mainStyles.container}>
          <FlatList
            data={imgData}
            numColumns={3}
            renderItem={this._renderImage}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageTouchable: {
    height: 115,
    width: 115,
    marginBottom: 12,
    marginRight: 12,
    borderRadius: 10,
  }
})