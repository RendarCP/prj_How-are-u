import React, { Component } from 'react';
import { TextInput, ScrollView, FlatList } from 'react-native-gesture-handler';

export default class VideoList extends Component{
  static defaultProps = {
    videos:[
      {id: 1, title:'건국대학교 커뮤니케이션디자인학과 김소령 학생', description:'건국대학교 커뮤니케이션 디자인 학과 김소령 학생', image:'../image/video1.png', date: '2019.11.27', views: 2000},
      {id: 2, title:'경희대학교 산업디자인학과 윤태종 학생', description:'경희대학교 산업디자인학과 윤태종 학생', image:'../image/video1.png', date: '2019.11.27', views: 2000},
      {id: 3, title:'블라블라 대학교 디자인학과 홍길동 학생', description:'블라블라 대학교 디자인학과 홍길동 학생', image:'../image/video1.png', date: '2019.11.27', views: 2000},
      {id: 4, title:'테스트 대학교 디자인학과 홍길순 학생', description:'테스트 대학교 디자인학과 홍길순 학생', image:'../image/video1.png', date: '2019.11.27', views: 2000},
    ],
  }
  state = {
    search: ''
  }
  render(){
    return(
      <SafeAreaView>
        <View
          style={{ padding: 10, 
            backgroundColor: 'white', }}>
          <View
            style={{ borderWidth: 1, 
              borderColor: 'gray', 
              borderRadius: 5,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between' }}>
            <TextInput 
              onChangeText={(text) => this.setState({search: text})}
              value={this.state.search}/>
            <Image
              style={{ width: 20, height: 20}}
              source={require('../image/search.png')}/>
          </View>
        </View>
        <ScrollView>
          {/* {
            this.props.videos.map((video)=>{
              return (
                  <>
                    <VideoColView video={video}/>
                  </>
                )
              })
          } */}
            <FlatList 
              data={this.props.videos}
              renderItem={(video) => <VideoColView video={video}/>}
              keyExtractor={(item, index) => item.id}
              />
          <View style={{ marginBottom: 100}} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class VideoColView extends Component{
  render(){
    console.log(this.props.video)
    return(
      <>
        <View>
          <Image 
            style={{ width: '100%', height: 250  }}
            source={require('../image/video2.png')}/>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 5 }}>
            <Image
              style={{ width: 50, height: 50}}
              source={require('../image/univ2.png')}/>
            <View>
              <Text
                style={{
                  color: primary,
                  fontSize: 15
                }}>{this.props.video.item.title}</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray',
                  marginTop: 3
                }}>{this.props.video.item.description}</Text>
              <View style={{ flexDirection: 'row', marginTop: 3 }}>
              <Text style={{ color: 'gray', fontSize: 10}}>{this.props.video.item.date}</Text>
                <Text style={{ color: 'gray', fontSize: 10, marginLeft: 5}}>조회수 {this.props.video.itemviews}회</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    )
  }
}