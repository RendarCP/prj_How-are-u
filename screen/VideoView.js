import React, { Component } from 'react';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class VideoView extends Component{
  state = {
    onPause: false,
    test: '재생'
  }
  onChangeState = () => {
    console.log('나눌림 ㅅㄱ')
    this.setState({
      onPause: !this.state.onPause
    })
  }
  render(){
    console.log(this.state);
    return(
      <SafeAreaView style={{ padding: 30 }}>
        <View style={{ borderWidth: 1, borderColor: 'red', height: '50%'}}>
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            style={{ flex: 1 }}
            paused={this.state.onPause}
          />
        </View>
        <TouchableOpacity
          style={{ borderWidth:1 , borderColor: 'blue', height: 500}}
          onPress={this.onChangeState}>
          <View
            style={{ position: 'absolute', top:120, right: 200}}>
            <Text>{this.state.test}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}