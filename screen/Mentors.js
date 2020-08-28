import React, { Component } from 'react';
import StarRating from 'react-native-star-rating'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { YellowBox } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Mentors extends Component {
  static defaultProps = {
    mentors: [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}] 
  }
  render(){
    return(
      <SafeAreaView>
        <View style={{ jutifyContent: 'center', 
          alignItems: 'center', 
          width: '100%',
          padding: 20,
          borderBottomWidth:1,
          borderColor: 'gray',
          marginBottom: 20,
          }}>
          <Text style={{ color: primary, fontSize: 18}}>대학 멘토</Text>
        </View>
        <ScrollView
          style={{ height: '100%'}}>
          {
            this.props.mentors.map((mentor)=>{
              return(
                <MentorList key={mentor.id}/>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class MentorList extends Component {

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render(){
    return(
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
          <View>
            <Image
              style={{ width: 90, height: 90 }}
              source={require('../image/test.png')}/>
          </View>
          
          <View>
            <View>
              <View style={{ flexDirection: 'row', jutifyContent: 'center', alignItems: 'center' }}>
                <Text>정종희</Text>
                <View style={{ marginLeft: 10 }}/>
                <View style={{ borderWidth: 1, 
                    borderRadius:30, 
                    borderColor: primary,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    width: 70,
                    }}>
                  <Text style={{ fontSize: 10, color: 'gray', textAlign:'center' }}>수시합격</Text>
                </View>
                <View style={{ marginRight: 30 }}/>
                {/* <StarRating
                  containerStyle={{ width: 40 }}
                  disabled={true}
                  fullStarColor="orange"
                  maxStars={5}
                  rating={3.5}
                  starSize={20}
                  /> */}
                  <Rating
                    type='star'
                    ratingColor='orange'
                    ratingCount={5}
                    imageSize={20}
                    style={{ paddingVertical: 10 }}
                    startingValue={3.5}
                  />
              </View>

              <View style={{ marginTop: 5 }}/>  
              <View style={{ flexDirection: 'row'}}>
                <Text>국민대학교 / </Text>
                <Text>시각디자인과 3학년</Text>
              </View>
              
              <View style={{ marginTop: 5 }}/>
              <View>
                <Text style={{ color: primary}}>인원 3/5</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}