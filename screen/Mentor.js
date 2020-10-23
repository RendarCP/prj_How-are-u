import React, { Component } from 'react';

export default class Mentor extends Component{
  static defaultProps = {
    reviews: [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}] 
  }
  render(){
    return(
      <SafeAreaView style={{ flex: 1, height: '100%'}}>
        <View style={{ padding:20,flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20}}
              source={require('../image/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={{ color: primary, fontSize: 15 }}>멘토 정종희</Text>
          <View />
        </View>

        <View style={{ paddingHorizontal:20, flexDirection: 'row'}}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require('../image/test.png')}/>
          <View>
            <View style={{ borderWidth: 1, 
                borderRadius:30, 
                borderColor: primary,
                paddingHorizontal: 10,
                paddingVertical: 5,
                width: 70,
                }}>
              <Text style={{ fontSize: 10, color: 'gray', textAlign:'center' }}>수시합격</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems:'baseline'}}>
              <Text style={{ marginTop: 10, marginRight:5 }}>정종희</Text>
              <Text style={{ fontSize: 10 }}>4학년</Text>
            </View>
            <Text style={{ marginTop: 10 }}>국민대학교</Text>
            <Text style={{ marginTop: 10 }}>시각디자인과</Text>
          </View>
        </View>

        <View style={{ padding: 30, 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            backgroundColor: '#f2f2f2'}}>
          <Text>"안녕하세요. 시각디자인과 정종희입니다" 여러분들께 최선을 다하는 멘토가 되겠습니다</Text>
        </View>
        {/* {
          this.props.reviews.map((review) => {
            return(
              <Reviews />
            )
          })
        } */}
        <View style={{ borderTopWidth: 1, marginTop: 15}}> 
          <Text style={{ padding: 20, fontSize: 20,}}>받은 후기</Text>
          <FlatList 
            data={this.props.reviews}
            renderItem={(review) => <Reviews review={review}/>}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle ={{ paddingBottom:760}}
          />
        </View>

        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          height:50,
          width: '100%',
          backgroundColor: primary
        }}
          onPress={() => this.props.navigation.navigate('Chat')}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold'}}>멘토신청</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

class Reviews extends Component {
  render(){
    return(
      <View style={{ paddingHorizontal: 20, marginBottom:20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <View style={{ borderWidth: 1, 
            borderRadius: 20, 
            width: 40, 
            height: 40,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Text>ddo_ddo27</Text>
          </View>
          <Text style={{ marginLeft:5, fontSize: 16, color: '#6b6b6b', fontWeight:'bold' }}>ddo_ddo27</Text>
          <Text style={{ marginLeft:5, fontSize: 10, color: '#6b6b6b' }}>대평고등학교</Text>
        </View>
        
        <View style={{ marginTop: 10 }}>
          <Text>최고의 멘토 선생님이였어요! 꼼꼼하게 잘알려주시고 덕분에 입시에 도움 많이 되었습니다</Text>
        </View>

        <View style={{ marginTop: 5, borderBottomWidth: 1, borderColor: '#6b6b6b'}}>
          <Text style={{ fontSize: 10, color: '#6b6b6b'}}>6월5일</Text>
        </View>
      </View>
    )
  }
}