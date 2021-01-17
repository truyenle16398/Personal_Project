import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import mainStyles from '../core/main-styles';
import styles from './../styles/home-styles'

interface Props {
  navigation: any
}

const optionList = [
  {
    id: 1,
    name: 'Xin phép',
    image: require('./../../assets/register.png'),
    color: '#039be5',
    route: 'Register'
  },
  {
    id: 2,
    name: 'Học phí',
    image: require('./../../assets/fee.png'),
    color: '#FF8F0C',
    route: 'Fee'
  },
  {
    id: 3,
    name: 'Thực đơn',
    image: require('./../../assets/nutrition.png'),
    color: '#FF8F0C',
    route: ''
  },
  {
    id: 4,
    name: 'Kế hoạch học tập',
    image: require('./../../assets/plan.png'),
    color: '#039be5',
    route: ''
  },
  {
    id: 5,
    name: 'Dặn thuốc',
    image: require('./../../assets/medicine.png'),
    color: '#039be5',
    route: ''
  },
  {
    id: 6,
    name: '',
    image: '',
    color: '#FF8F0C',
    route: ''
  }
]

export default class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, index }) => {
    const { navigation } = this.props
    if (item.name == '') {
      return <View style={styles.transparent} />
    }
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.route)}
        activeOpacity={0.5}
        style={[styles.touchable, mainStyles.myShadow]}
      >
        <Image
          style={styles.imageTouchable}
          source={item.image}
        />
        <Text style={[{ color: item.color }, styles.titleTouchable]}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={[styles.container, mainStyles.container]}>
        <FlatList
          data={optionList}
          style={styles.flatListStyles}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={this._renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}