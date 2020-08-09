import React, { Component } from 'react';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import firebase from '../firebase.js'
import { Keyboard } from 'react-native';

const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export default class Login extends Component {
  state = {
    userId: '',
    password: '',
    emailValid: '',
    loginError: '',
    loginValid: false,
    
  }
  onPressLogin = () => {
    Keyboard.dismiss();
    firebase.auth().signInWithEmailAndPassword(this.state.userId, this.state.password)
      .then(result => {
        this.props.navigation.navigate('BottomTab');
        console.log(result);
      }).catch(error => {
        if(error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email'){
          this.setState({
            loginError: '이메일/비밀번호가 잘못되었습니다!'
          })
        }
        console.log(error.code);
      })
  }
  onEmailValidation = () => {
    if(!emailRegex.test(this.state.userId || this.state.password !== '')){
      this.setState({
        emailValid: '이메일 형식이 잘못되었습니다',
        loginValid: false
      })
    }
    else{
      this.setState({
        emailValid: '',
      })
    }
  }
  onPasswordChange = () => {
    if(this.state.password !== ''){
      this.setState({
        loginValid: true
      })
    }
    else{
      this.setState({
        loginValid: false
      })
    }
  }
  render(){
    if(!this.state.loginValid){
      bgColor = 'white',
      fontColor = '#5dc1c3'
    }
    else{
      bgColor ='#5dc1c3',
      fontColor = 'white'
    }
    return (
      <>
      <View style={{ flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30}}
        keyboardShouldPersistTaps='always'>

        <Image
          source={require('../image/logo.png')}/>
        
        <View style={{ width:'100%'}}>
          <TextInput
            style={{ 
              height: 40, 
              borderWidth: 1, 
              width:'100%', 
              padding: 10,
              borderColor:'gray'
            }}
            placeholder="이메일주소"
            onChange={this.onEmailValidation}
            onChangeText={(text) => this.setState({userId: text})}
            value={this.state.userId}/>
          <Text style={{ color: 'red'}}>{this.state.emailValid}</Text>
        </View>
        <View
          style={{ marginTop: 20}}/>
        
        <View style={{ width: '100%'}}>
          <TextInput
            style={{ 
              height: 40, 
              borderWidth: 1, 
              width:'100%', 
              padding: 10,
              borderColor:'gray'
              }}
            placeholder="패스워드"
            secureTextEntry={true}
            onChange={this.onPasswordChange}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}/>
        </View>
        
        <Text style={{ color: 'red', textAlign: 'center'}}>{this.state.loginError}</Text>
        <View
          style={{ marginTop: 50}}/> 
        <View style={{ width: '100%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: bgColor,
              borderWidth:1, 
              borderColor: '#5dc1c3', 
              borderRadius: 30, 
              alignItems: 'center',
              padding: 15 }}
            onPress={this.onPressLogin}>
            <Text style={{ color: fontColor }}>로그인</Text>
          </TouchableOpacity>
          <View
            style={{ marginTop: 20}}/>  
          <TouchableOpacity
            style={{ 
              borderWidth:1, 
              borderColor: '#5dc1c3', 
              borderRadius: 30, 
              alignItems: 'center',
              padding: 15 }}
            onPress={()=>this.props.navigation.navigate('SignUp')}>
            <Text style={{ color: '#5dc1c3' }}>SNS 로그인</Text>
          </TouchableOpacity>
        </View>
        
        <View
            style={{ marginTop: 20}}/>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text>아이디 찾기</Text>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10, borderWidth:0.5, borderColor: 'gray' }}/>
          <TouchableOpacity>
            <Text>비밀번호 찾기</Text>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10, borderWidth:0.5, borderColor: 'gray' }}/>
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('SignUp')}>
            <Text>회원가입</Text>
          </TouchableOpacity>
        </View> 
      </View>
      {/* <BottomTab /> */}
      </>
    );
  }
}
