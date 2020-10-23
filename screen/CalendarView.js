import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

// LocaleConfig.locales['kr'] = {
//   monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
//   dayNames: ['월','화','수','목','금','토','일'],
//   weekDaysNames: ['test','test','test'],
// }
// LocaleConfig.defaultLocale = 'kr';
LocaleConfig.locales['kr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: 'Aujourd\'hui' // 공식 문서에는 today 프로퍼티가 있지만, 타입스크립트를 이용하는 분들에게는 에러가 발생합니다.
};
LocaleConfig.defaultLocale = 'kr';

export default class CalendarView extends Component{
  state = {
    selectedDate: '',
    markedDates: {},
  }

  getSelectedDay = date => {
    const markedDates = {};
    markedDates[date] = {selected: true }
    const serviceDate = moment(date).format("YYYY-MM-DD");
    this.setState({
      selectedDate: serviceDate,
      markedDates: markedDates
    })
  }
  render(){
    if(isIos){
      topBar = <View style={{ marginTop: 30 }}/>
      bottom = null
    }
    else{
      topBar = null
      bottom = <View style={{ marginBottom: 50 }}/>
    }
    return(
      <ScrollView style={{
        flex: 1,
        paddingHorizontal: 30, 
        backgroundColor: 'white',}}>
        {topBar}
        <View style={{ marginTop: 30 }}/>
        <View>
          <Text 
            style={{ 
            fontWeight: 'bold', 
            color: primary, 
            textAlign: 'center',
            fontSize: 20 }}>대학일정</Text>
        </View>
        
        <View style={{ marginTop: 20 }}/>

        <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 17,
          }}>전형선택</Text>

        <View style={{ marginTop: 50 }}/>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            borderColor: 'gray',
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
                height: 3,
                width: 3
            },
            elevation: 3
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text style={{
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 20,
              padding: 20,
            }}>수시</Text>
            <View style={{ marginHorizontal: 20, borderWidth:0.5, borderColor: 'gray' }}/>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 20,
                padding: 20,
              }}>정시</Text>
            <View style={{ marginHorizontal: 20, borderWidth:0.5, borderColor: 'gray' }}/>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 20,
                padding: 20,
              }}>기타</Text>
          </View>
        </View>

        <View style={{ marginTop: 50 }}/>

        <Text style={{ fontWeight: 'bold', fontSize: 17,}}>대학전형일정을 확인하세요</Text>
        
        <View style={{ marginTop: 50 }}/>
        <View>
          <Calendar 
            markedDates={this.state.markedDates}
            onDayPress={(day)=> {
              this.getSelectedDay(day.dateString)
              console.log('test', day)}}/>
        </View>
        {bottom}
      </ScrollView>
    )
  }
}