import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import mainStyles from './../core/main-styles'
import Header from './../components/header'
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../core/color.enum';
import data from './../data/fee-data.json'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  navigation: any
}

class MyItem extends React.Component<{ title: string, value: string, data: any }, { isShow: boolean }>{
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }

  render() {
    const { title, value, data } = this.props
    const { isShow } = this.state
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ isShow: !isShow })}
          disabled={data == null}
          style={[styles.myTouchable, styles.borderBottom, { padding: 12 }]}>
          <View style={styles.myRow}>
            <Text style={styles.item}>{title}</Text>
            {data != null && (
              <Ionicons
                style={{ marginHorizontal: 5 }}
                name={isShow ? 'ios-chevron-up-circle-outline' : 'ios-chevron-down-circle-outline'}
                size={25}
                color='rgba(0,0,0,0.5)'
              />
            )}
          </View>
          <Text style={styles.price}>{value}</Text>
        </TouchableOpacity>
        {isShow && data != null && (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.myTouchable, { padding: 6, marginLeft: 12 }]}>
                <View style={styles.myRow}>
                  <Octicons name='primitive-dot' size={12} style={{marginHorizontal: 5}} color='rgba(0,0,0,0.5)' />
                  <Text style={styles.item}>{item.name}</Text>
                </View>
                <Text style={styles.item}>{item.val}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

export default class Fee extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  _renderItems = ({ item, index }) => {
    return (
      <MyItem title={item.title} value={item.value} data={item.data} />
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <>
        <Header
          title='Học phí'
          buttonRight='print'
          onPress={() => console.log('Học phí')}
          onBack={() => navigation.navigate('Drawer')}
        />
        <View style={mainStyles.container}>
          <View style={styles.dateBox}>
            <TouchableOpacity>
              <IconEntypo name='chevron-left' size={30} color='rgba(0, 0, 0, 0.5)' />
            </TouchableOpacity>
            <Text style={styles.text}>Tháng 12 2020</Text>
            <TouchableOpacity>
              <IconEntypo name='chevron-right' size={30} color='rgba(0, 0, 0, 0.5)' />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={styles.listBox}>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderItems}
            />
            </View>
          </View>
          {/* <Text style={{color: Colors.BLUE, fontSize: 18, textAlign: 'center'}}>Đã thanh toán</Text> */}
          <View style={styles.totalBox}>
            <Text style={styles.totalText}>Tổng</Text>
            <Text style={styles.totalText}>3,095,000₫</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  dateBox: {
    padding: 12,
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  },
  totalText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 22
  },
  content: {
    flex: 1,
    marginVertical: 12
  },
  listBox: {
    backgroundColor: 'rgba(3, 155, 229, 0.1)',
    borderRadius: 20,
    padding: 12,
  },
  totalBox: {
    backgroundColor: Colors.ORANGE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 59,
    paddingHorizontal: 12
  },
  item: {
    fontSize: 18,
  },
  price: {
    fontSize: 20,
    fontWeight: '700'
  },
  myTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver'
  },
  myRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})