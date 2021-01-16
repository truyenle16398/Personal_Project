import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import mainStyles from './../core/main-styles'
import Header from './../components/header'
import CalendarPicker from 'react-native-calendar-picker';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../core/color.enum';
import moment from 'moment';

const defaultDayMonth = {
  day: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  month: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
}

interface State {
  date: string
}

export default class Register extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      date: moment.utc(new Date).format('DD/MM/YYYY')
    }
  }

  onDateChange = (date, type) => {
    this.setState({ date: moment.utc(date).format('DD/MM/YYYY') })
  }

  render() {
    const { date } = this.state
    return (
      <>
        <Header title='Điểm danh' buttonRight='plus' />
        <View style={mainStyles.container}>
          <ScrollView>
            {/* CALENDAR */}
            <CalendarPicker
              onDateChange={this.onDateChange}
              weekdays={defaultDayMonth.day}
              months={defaultDayMonth.month}
              maxDate={new Date()}
              minDate={new Date('01/01/2020')}
              showDayStragglers={true}
              selectedDayTextColor='#fff'
              selectedDayColor={Colors.BLUE}
              previousComponent={(<IconEntypo name='chevron-left' size={30} color='silver' />)}
              nextComponent={(<IconEntypo name='chevron-right' size={30} color='silver' />)}
              todayTextStyle={{ color: Colors.BLUE }}
              todayBackgroundColor='transparent'
              selectMonthTitle='Chọn tháng '
              selectYearTitle='Chọn năm'
              restrictMonthNavigation={true}
              textStyle={styles.textStyle}
              headingLevel={0}
              dayLabelsWrapper={styles.dayLabelsWrapper}
              customDayHeaderStyles={() => { return { textStyle: styles.customDayHeaderStyles } }}
              customDatesStyles={() => { return { textStyle: styles.customDatesStyles } }}
              headerWrapperStyle={styles.headerWrapperStyle}
            />
            <View style={styles.myBox}>
              <Text style={styles.text}>{date}</Text>
              <View style={styles.splitColumn}>
                <View style={styles.column}>
                  <Text style={[styles.text, { color: Colors.BLUE }]}>Giờ vào: 07:12</Text>
                  <Text style={[styles.text, { color: Colors.BLUE }]}>Người đưa: Mẹ</Text>
                  <Text style={[styles.text, { color: Colors.BLUE }]}>Cô nhận: Trần Thị A</Text>
                </View>
                <View style={styles.column}>
                  <Text style={[styles.text, { color: Colors.RED }]}>Giờ vào: 07:12</Text>
                  <Text style={[styles.text, { color: Colors.RED }]}>Người đón: Bà ngoại</Text>
                  <Text style={[styles.text, { color: Colors.RED }]}>Cô trả: Trần Thị A</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View>
            <Button
              title="Đăng ký nghỉ phép"
              useForeground={true}
              titleStyle={styles.titleButton}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '700',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.6)',
    marginVertical: 12
  },
  headerWrapperStyle: {
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: Dimensions.get('window').width - 24
  },
  customDatesStyles: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  customDayHeaderStyles: {
    color: 'silver'
  },
  dayLabelsWrapper: {
    borderTopColor: '#fff'
  },
  myBox: {
    backgroundColor: 'rgba(3, 155, 229, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 12,
    width: '100%',
    marginTop: 50,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12
  },
  splitColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    alignItems: 'flex-start',
    color: Colors.RED
  },
  button: {
    backgroundColor: Colors.ORANGE,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 10,
    height: 59,
    width: Dimensions.get('window').width - 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  titleButton: {
    fontWeight: 'bold',
    fontSize: 22
  }
})