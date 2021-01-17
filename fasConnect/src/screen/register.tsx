import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import mainStyles from './../core/main-styles'
import styles from './../styles/register-styles'
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
interface Props {
  navigation: any
}

export default class Register extends React.Component<Props, State> {
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
    const { navigation } = this.props
    return (
      <>
        <Header
          title='Điểm danh'
          buttonRight='plus'
          onPress={() => navigation.navigate('RegisterDetail')}
          onBack={() => navigation.navigate('Drawer')}
          {...this.props}
        />
        <View style={mainStyles.container}>
          <ScrollView>
            {/* CALENDAR */}
            <CalendarPicker
              onDateChange={this.onDateChange}
              weekdays={defaultDayMonth.day}
              months={defaultDayMonth.month}
              maxDate={new Date()}
              minDate={new Date().setMonth(new Date().getMonth() - 6)}
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
          {/* <View>
            <Button
              title="Đăng ký nghỉ phép"
              useForeground={true}
              onPress={() => navigation.navigate('RegisterDetail')}
              titleStyle={styles.titleButton}
              buttonStyle={[styles.button, {backgroundColor: Colors.ORANGE}]}
            />
          </View> */}
        </View>
      </>
    );
  }
}