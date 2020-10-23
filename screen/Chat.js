import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default class Chat extends Component{
  render(){
    return(
      <SafeAreaView style={{ flex: 1, height: '100%'}}>
        <View style={{ padding:30,flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20}}
              source={require('../image/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: primary }}>멘토 정종희</Text>
          <View/>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Message />
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom:10,
          height:50,
          width: '100%',
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
              height: 3,
              width: 3
          },
          elevation: 3
        }}>
          <View style={{ backgroundColor: '#f2f2f2', 
            padding: 10, 
            width: '100%', 
            height:' 100%',
            borderRadius: 50,
            justifyContent: 'center'}}>
            <TextInput style={{ paddingHorizontal: 10, height: '100%'}} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}


class Message extends Component{
  render(){
    return(
      <>
        <View style={{ flexDirection:'row', alignItems:'baseline'}}>
          <Text style={{ color: primary, fontWeight: 'bold'}}>정종희</Text>
          <View style={{  
            borderRadius: 5, 
            padding: 7, 
            backgroundColor:'#d4d4d4',
            marginLeft: 10, }}>
            <Text style={{ fontSize: 13, fontWeight: '300'}}>안녕하세요. 멘토 정종희 입니다.</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems:'baseline' , marginTop: 20, justifyContent:'flex-end' }}>
          <View style={{ borderRadius: 5, padding: 7, backgroundColor: '#d4d4d4', marginRight: 10 }}>
            <Text style={{ fontSize: 13, fontWeight: '300'}}>안녕하세요 멘토님 질문 있습니다!</Text>
          </View>
          <Text>최지원</Text>
        </View>
      </>
    )
  }
}