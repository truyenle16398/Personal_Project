import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import mainStyles from '../core/main-styles';
import styles from './../styles/register-styles'
import Header from './../components/header'
import IconEntypo from 'react-native-vector-icons/Entypo';
import CalendarPicker from 'react-native-calendar-picker';
import { Colors } from '../core/color.enum';
import moment from 'moment';

interface Props {
  navigation: any
}

interface State {
  fromDate: string,
  toDate: string,
  reason: string
}

const defaultDayMonth = {
  day: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  month: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
}

const theCurrentDate = moment().format('YYYY-MM-DD');


export default class RegisterDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: theCurrentDate,
      toDate: theCurrentDate,
      reason: ''
    }
  }

  onDateChange = (date, type) => {
    // console.log(moment(date).format('YYYY-MM-DD').toString());
    type === 'END_DATE'
      ? this.setState({ toDate: date ? moment(date).format('YYYY-MM-DD').toString() : '' })
      : this.setState({
        fromDate: date ? moment(date).format('YYYY-MM-DD').toString() : '',
        toDate: ''
      })
  }

  save = () => {
    const { fromDate, toDate, reason } = this.state
    fromDate === toDate || toDate == ''
      ? alert(`Xin nghỉ 01 ngày ${this.formatDate(fromDate)} với lý do: ${reason}`)
      : alert(`Xin nghỉ ${Number(toDate.substr(8, 2)) - Number(fromDate.substr(8, 2)) + 1} ngày. Từ ${this.formatDate(fromDate)} đến ${this.formatDate(toDate)} với lý do: ${reason}`)
  }

  formatDate = (str) => {
    let arr = str.split('-');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  render() {
    const { navigation } = this.props
    const { fromDate, toDate, reason } = this.state
    return (
      <>
        <Header
          title='Đăng ký nghỉ phép'
          buttonRight=''
          onPress={null}
          onBack={() => navigation.goBack()}
          {...this.props}
        />
        <View style={mainStyles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* CALENDAR */}
            <CalendarPicker
              onDateChange={this.onDateChange}
              weekdays={defaultDayMonth.day}
              months={defaultDayMonth.month}
              minDate={new Date()}
              maxDate={new Date().setMonth(new Date().getMonth() + 1)}
              maxRangeDuration={2}
              selectedStartDate={fromDate}
              selectedEndDate={toDate}
              showDayStragglers={true}
              allowRangeSelection={true}
              allowBackwardRangeSelect={true}
              selectedRangeStyle={{ backgroundColor: 'lightblue' }}
              selectedDayTextColor='#fff'
              selectedRangeStartStyle={{ backgroundColor: '#039be5' }}
              selectedRangeEndStyle={{ backgroundColor: '#039be5' }}
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
            <View style={styles.splitColumn}>
              <View style={styles.flexContent}>
                <Text style={styles.text}>Từ ngày</Text>
                <View style={styles.dayBox}>
                  <Text style={styles.textStyle}>{fromDate != '' ? this.formatDate(fromDate) : moment().format('DD-MM-YYYY')}</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'silver', height: 3, width: 10, alignSelf:  'center', marginTop: 24 }} />
              <View style={styles.flexContent}>
                <Text style={styles.text}>Đến ngày</Text>
                <View style={styles.dayBox}>
                  <Text style={styles.textStyle}>{toDate != '' ? this.formatDate(toDate) : fromDate != '' ? this.formatDate(fromDate) : moment().format('DD-MM-YYYY')}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.textStyle}>Lý do xin nghỉ phép</Text>
            <TextInput
              onChangeText={val => this.setState({ reason: val })}
              maxLength={500}
              value={reason}
              multiline={true}
              style={styles.textInput}
            />
          </ScrollView>
          <View>
            <Button
              title="Đăng ký"
              disabled={reason.trim() === ''}
              onPress={this.save}
              useForeground={true}
              titleStyle={styles.titleButton}
              buttonStyle={[styles.button, { backgroundColor: Colors.BLUE }]}
            />
          </View>
        </View>
      </>
    );
  }
} 