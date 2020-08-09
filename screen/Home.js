import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import firebase from '../../prj_how-are-u/firebase.js'
//import { StyleSheet, Text, View, Button } from 'react-native';

const db = firebase.firestore();
export default class Home extends Component {
  state = {
    posts: []
  }
  static defaultProps = {
    videos:[
      {id: 1, title:'건국대학교 커뮤니케이션디자인학과 김소령 학생', image:'../image/video1.png', date: '2019.11.27'},
      {id: 2, title:'경희대학교 디자인학부 김소령 학생', image:'../image/video1.png', date: '2019.11.30'}
    ],
    univcoms:[
      {id: 1, title:'홍익대학교 시각디자인과', image:'../image/univ1.png'},
      {id: 2, title:'연세대학교 생활디자인과', image:'../image/univ2.png'},
      {id: 3, title:'건국대학교 미디어학과', image:'../image/univ3.png'},
    ]
  }
  componentDidMount() {
    db.collection('posts').get()
      .then( result => {
        const firedata = []
        result.forEach( doc => {
          firedata.push(doc.data())
        })
        this.setState({
          posts: firedata
        })
      }).catch( error => {
        console.log(error)
      })
  }

  render(){
    if(isIos){
      bottom = null
    }
    else{
      bottom = <View style={{ marginBottom: 50 }}/>
    }
    return (
      <ScrollView style={{ flex: 1,
        padding: 15, backgroundColor: 'white' }}>
        <View style={{ marginTop: 30 }}/>

        <View style={{ padding: 3}}>
          <RecommendSub />
        </View>
        
        <View style={{ marginTop: 30}}/>

        <View>
          <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18}}>이런 영상 어때요? </Text>
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('VideoList')}>
              <Text style={{ color:'gray', fontSize: 12}}>모두보기</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15}}/>
          <ScrollView
            horizontal={true}>
            {
              this.props.videos.map((video)=>{
                return (
                    <>
                      <VideoView {...this.props} video={video}/>
                      <View style={{ marginRight: 30}}/>
                    </>
                  )
                })
            }

          </ScrollView>
        </View>

        <View>
          <View style={{ flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18}}>재학생들의 생각이 궁금하세요? </Text>
            <TouchableOpacity>
              <Text style={{ color:'gray', fontSize: 12}}>모두보기</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15}}/>
          <ScrollView horizontal={true}>
            {
              this.state.posts.map( post => {
                return(
                  <>
                    <UnivCom post={post}/>
                    <View style={{ marginRight: 15}}/>
                  </>

                )
              })
            }
          </ScrollView>
        </View>
        {bottom}
      </ScrollView>
    );
  }
}


class VideoView extends Component{
  render(){
    return(
      <View style={{ flexDirection:'column', 
        borderRadius: 5, 
        backgroundColor: 'white',
        marginBottom: 50,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 3,
            width: 3
        },
        elevation: 3}}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('VideoView')}>
          <View>
            <Image 
              style={{ width: 250 , height: 150, borderRadius: 5 }}
              source={require('../image/video1.png')}/>
          </View>
          <View style={{ backgroundColor: 'white',
            position: 'absolute', 
            borderBottomLeftRadius: 5,
            borderBottomRightRadius:5,
            width: 250, 
            bottom: 0,
            padding: 10}}>
            <Text style={{ fontSize: 12}}>{this.props.video.title}</Text>
            <Text style={{ fontSize: 11, color: 'gray'}}>{this.props.video.date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

class RecommendSub extends Component{
  render() {
    return(
      <View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ fontWeight: 'bold', color: primary, fontSize: 22}}>종희</Text>
          <Text style={{ color: primary, fontSize: 17}}>님에게 어울리하는 학과는</Text>
        </View>

        <View style={{ marginTop: 15 }}/>

        <View style={{ 
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 15,
            borderRadius: 10,
            backgroundColor: 'white',
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
                height: 3,
                width: 3
            },
            elevation: 3
            }}>
          <Image
            style={{ width: 115, height: 150 }}
            source={require('../image/pentool.png')}/>
          <View style={{ marginTop: 30, marginLeft: 15 }}>
            <View style={{ borderWidth: 1, 
              borderRadius:30, 
              borderColor: primary,
              paddingHorizontal: 30,
              paddingVertical: 5,
              width: 130
              }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold'}}>디자인학과</Text>
            </View>
            <View>
              <View style={{ marginTop: 10 }}/>
              <Text style={{ fontSize: 10 }}>-창의적이고 섬세한 작업, 집중을 잘해요.</Text>
              <View style={{ marginTop: 10 }}/>
              <Text style={{ fontSize: 10 }}>-사람들과 소통하며 말하는것에 즐거움을 느껴요.</Text>
              <View style={{ marginTop: 10 }}/>
              <Text style={{ fontSize: 10 }}>-실외활동보다는 실내에서 차분히 있는 것을 좋아해요.</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class UnivCom extends Component {
  render(){
    console.log(this.props);
    return(
      <View style={{
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 30,
        flexDirection: 'row'
      }}>
        <View
          style={{
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
                height: 3,
                width: 3
            },
            elevation: 3
          }}>
          <TouchableOpacity>
            <View
              style={{ justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 5 }}
                source={{ uri: this.props.post.image}}/>
            </View>
            <View style={{ backgroundColor: primary,
              width: 120,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius:5, 
              padding: 10}}>
              <Text style={{ fontSize: 15, color: 'white', textAlign: 'center'}}>{this.props.post.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


