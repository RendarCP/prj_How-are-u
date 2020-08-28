import React, { Component } from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../prj_how-are-u/screen/Home.js'
import Login from '../prj_how-are-u/screen/Login.js'
import SignUp from '../prj_how-are-u/screen/SignUp.js'
import CalendarView from './screen/CalendarView.js'
import VideoList from './screen/VideoList.js'
import VideoView from './screen/VideoView.js'
import Mentors from './screen/Mentors.js'
import Posts from './screen/Posts.js'

const inActiveHome = require('../prj_how-are-u/image/home.png');
const activeHome = require('../prj_how-are-u/image/activeHome.png')
const inActiveCalender = require('../prj_how-are-u/image/calendar.png');
const activeCalendar = require('../prj_how-are-u/image/activeCalendar.png');
const inActiveSelf = require('../prj_how-are-u/image/self.png');
const activeSelf = require('../prj_how-are-u/image/activeSelf.png');
const inActiveMentor = require('../prj_how-are-u/image/mentor.png');
const activeMentor = require('../prj_how-are-u/image/activeMentor.png');

const LoginStack = createStackNavigator({

  Login: Login,
  SignUp: SignUp,
},{
  headerMode: 'none',
  navigationOptions:{
    tabBarVisible: false
  }
})

const HomeStack = createStackNavigator({
  Home: Home,
  VideoList: VideoList,
  VideoView: VideoView,
  Posts: Posts
},{
  headerMode: 'none',
  defaultNavigationOptions: {
    cardStyle: { backgroundColor: 'white'}
  },
})

const CalendarStack = createStackNavigator({
  Calendar: CalendarView
},{
  headerMode: 'none',
  defaultNavigationOptions: {
    cardStyle: { backgroundColor: 'white'}
  },
})

const MentorStack = createStackNavigator({
  Mentors: Mentors
},{
  headerMode: 'none',
  defaultNavigationOptions:{
    cardStyle: { backgroundColor: 'white'}
  },
})

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const BottomTab = createBottomTabNavigator(
  {
    "홈": {
      screen: HomeStack,
      navigationOptions:{
        tabBarIcon:({focused}) => 
          <Image style={{width:25, height:25}} source={ focused ? activeHome : inActiveHome}/>,
      }
    },
    "대학일정": {
      screen: CalendarStack,
      navigationOptions:{
        tabBarIcon:({focused}) => 
          <Image style={{width:25, height:25}} source={focused ? activeCalendar : inActiveCalender}/>,
      }
    },
    "멘토링": {
      screen: MentorStack,
      navigationOptions:{
        tabBarIcon:({focused}) => 
          <Image style={{width:25, height:25}} source={focused ? activeMentor : inActiveMentor}/>,
      }
    },
  },
  {
    initialRouteName: '홈',
    tabBarOptions:{
      activeTintColor: '#5dc1c3'
    },
  }
)

//export default createAppContainer(BottomTab);
export default createAppContainer(createSwitchNavigator(
  {
    Login: LoginStack,
    BottomTab: BottomTab,
  },
  {
    initialRouteName: 'BottomTab',
  }
))
