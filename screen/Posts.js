import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class Posts extends Component {
  static defaultProps = {
    posts: [
      {postid: 1, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 2, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 3, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 4, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 5, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 6, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 7, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 8, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 9, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 10, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
      {postid: 11, title:'4학년 많이 바쁜가요?', content: '4학년때 많이 바쁜가요? 어떤가요?', like: 5, unlike: 2, date: "2020.08.20", comments: {} },
    ]
  }
  render() {
    console.log(this.props.navigation.state.params)
    if(isIos){
      bottom = <View style={{ marginBottom: 50 }}/>
    }
    else{
      bottom = null
    }
    return (
      <SafeAreaView>
        <View style={{ padding:30,flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20}}
              source={require('../image/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.title}</Text>
          <Image
            style={{ width: 20, height: 20}}
            source={require('../image/search.png')}/>
        </View>

        <FlatList 
          data={this.props.posts}
          renderItem={(post) => <PostList post={post}/>}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle ={{ paddingBottom: 70}}
        />
      </SafeAreaView>
    );
  }
}

class PostList extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={{ paddingBottom: 10, marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: 'gray'}}>
          <Text style={{ fontWeight: 'bold'}}>4학년때 많이 바쁜가요?</Text>
          
          <View style={{ marginTop: 10}} />
          
          <Text style={{ fontSize: 10}}>취업준비도 하고 졸업 작품도 준비도 해야되는데...</Text>
          
          <View style={{ marginTop: 10}} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 12 }}>17:31 | 익명</Text>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, marginRight: 10, color: primary }}>공감 5</Text>
              <Text style={{ fontSize: 12, color: 'red' }}>비공감 2</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}