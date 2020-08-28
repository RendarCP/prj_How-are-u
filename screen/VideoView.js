import React, { Component } from 'react';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

export default class VideoView extends Component{
  state = {
    currentTime: 0,
    duration: 0,
    isFullScreen: false,
    isLoading: true,
    paused: false,
    playerState: PLAYER_STATES.PLAYING,
    screenType: 'content',
  }

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ isFullScreen: true, paused: true, playerState: PLAYER_STATES.PAUSED  });
    else this.setState({ isFullScreen: false, paused: false, playerState: PLAYER_STATES.PLAYING });
  };
  onSeeking = currentTime => this.setState({ currentTime });

  render(){
    console.log(this.state);
    return(
      <SafeAreaView style={{ flex: 1, padding: 30 }}>
        <View style={{ flex: 1 }}>
          <Video
              onEnd={this.onEnd}
              onLoad={this.onLoad}
              onLoadStart={this.onLoadStart}
              onProgress={this.onProgress}
              paused={this.state.paused}
              ref={videoPlayer => (this.videoPlayer = videoPlayer)}
              resizeMode={this.state.screenType}
              onFullScreen={this.state.isFullScreen}
              fullscreen={this.state.isFullScreen}
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              style={{ position: 'absolute', top:0, left: 0, bottom: 0, right: 0, backgroundColor: 'black'}}
              volume={10}
            />
            <MediaControls
              duration={this.state.duration}
              isLoading={this.state.isLoading}
              mainColor="#333"
              onFullScreen={this.onFullScreen}
              onPaused={this.onPaused}
              onReplay={this.onReplay}
              onSeek={this.onSeek}
              onSeeking={this.onSeeking}
              playerState={this.state.playerState}
              progress={this.state.currentTime}
            >
              <View>
                <Text style={{ color: primary }}>건국대학교에서 디자인을 공부하며 3년동안 느낀점은??</Text>
              </View>
            </MediaControls>
        </View>

        <View style={{ marginTop: 20 }}/>

        <View style={{ flex: 1 }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: '100%',
              paddingHorizontal: 20,
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderColor: '#e6e6e6'
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ width: 50, height: 50}}
                source={require('../image/univ2.png')}/>
              <View>
                <Text
                  style={{
                    color: primary,
                    fontSize: 15
                  }}>건국대학교에서 디자인을 공부하며 3년동안 느낀점은??</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'gray',
                    marginTop: 3
                  }}>건국대학교 커뮤니케이션디자인학과 김소령학생</Text>
                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Text style={{ color: 'gray', fontSize: 10}}>2019.11.27</Text>
                  <Text style={{ color: 'gray', fontSize: 10, marginLeft: 5}}>조회수 2000회</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}