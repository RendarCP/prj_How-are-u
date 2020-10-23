import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../prj_how-are-u/firebase.js'
//import { StyleSheet, Text, View } from 'react-native';


const db = firebase.firestore();
export default class SignUp extends Component {
  state ={
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    age: '',
    phone: '',
    school: '',
    nickName: '',
    newDate: new Date(),
    type: 'student', // 기본 값 student 신청후 확인후 mentor
    typeCheck: '', //학생증등 멘토의 실제 확인용
    rating: 0, // 종료시 평균값으면 반영
    mentoring: 0 // 멘토링 인원 확인용(레이팅 평균확인용)
  }
  onPressSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        const userData = {
          userId: result.user.uid,
          name: this.state.name, 
          age: this.state.age,
          school: this.state.school,
          phone: this.state.phone,
          nickName: this.state.nickName,
          newDate: this.state.newDate,
          type: this.state.type,
          typeCheck: this.state.typeCheck,
          rating: this.state.rating,
          mentoring: this.state.mentoring
        };
        this.props.navigation.navigate('Login');
        db.collection('users').add(userData)
          .then((result) => {
            console.log(result);
          }).catch(error => {
            console.log(error)
          })
        console.log('result:',result);
        console.log(result.user.uid);
      }).catch((error) => {
        console.log('error',error);
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
    return (
      <SafeAreaView style={{ height: '100%', backgroundColor: 'white'}}>
        <View style={{  
            height: 50, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingHorizontal: 20
           }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20}}
              source={require('../image/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={{ color: primary, fontWeight: 'bold', fontSize: 18}}>회원가입</Text>
          <View/>
        </View>
        <ScrollView style={{ flex: 1,
          backgroundColor: '#fff',
          padding:30,}}>

          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>이메일</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              placeholder='이메일 입력해주세요'
              onChangeText={(text)=> this.setState({email:text})}
              value={this.state.email}/>
          </View>
          
          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>비밀번호</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              secureTextEntry={true}
              placeholder='비밀번호'
              onChangeText={(text)=> this.setState({password:text})}
              value={this.state.password}/>
          </View>

          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>비밀번호 확인</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              secureTextEntry={true}
              placeholder='비밀번호 확인'
              onChangeText={(text)=> this.setState({passwordConfirm:text})}
              value={this.state.passwordConfirm}/>
          </View>

          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>이름</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              placeholder='이름'
              onChangeText={(text)=> this.setState({name:text})}
              value={this.state.name}/>
          </View>

          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>나이</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              placeholder='나이'
              onChangeText={(text)=> this.setState({age:text})}
              value={this.state.age}/>
          </View>

          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>핸드폰 번호</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              placeholder='핸드폰 번호'
              onChangeText={(text)=> this.setState({phone:text})}
              value={this.state.phone}/>
          </View>

          <View style={{ marginTop: 20 }}/>
          
          <View style={{ width: '100%'}}>
            <Text style={{ color: 'gray'}}>닉네임</Text>
            <View style={{ marginTop: 10 }}/>
            <TextInput
              style={{
                height: 40, 
                borderWidth: 1, 
                width:'100%', 
                padding: 10,
                borderColor:'gray'
              }}
              placeholder='닉네임'
              onChangeText={(text)=> this.setState({nickName:text})}
              value={this.state.nickName}/>
          </View>

          <View style={{ marginTop: 40 }}/>

          <TouchableOpacity
              style={{ 
                borderWidth:1, 
                borderColor:'#5dc1c3', 
                borderRadius: 30, 
                alignItems: 'center',
                padding: 15 }}
              onPress={this.onPressSignUp}>
              <Text style={{ color: '#5dc1c3'}}>회원가입</Text>
            </TouchableOpacity>
          {bottom}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
