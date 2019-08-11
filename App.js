import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
  
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
  render() {
    return (
    <View style={{flex: 1}}>

      <View style={styles.name}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>  Review</Text>
        
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        }}>EateryMap</Text>
      </View>

      <View style={{backgroundColor: '#2f4f4f', flex: 1}}>
        <Text style={{
          fontSize: 15,
          color: 'white',
          padding: 10
        }}>위치: 인천광역시 연수구 송도동...
        </Text>
      </View>

      <View style={{backgroundColor: '#3f4f4f', flex: 2, justifyContent: 'space-between'}}>
        <View>
          <Icon name="star" />
        </View>
      </View>

      <View style={{backgroundColor: '#8f4f4f', flex: 2, flexDirection: 'row', paddingRight: 10}}>
        <Text style={{
          fontSize: 15,
          color: 'white',
          padding: 10
        }}>추천메뉴: 
        </Text>
        <TextInput style={{
          backgroundColor: 'green',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'white',
          borderWidth: 2,
          flex: 1,
          }}
          placeholder ="김치볶음밥"/>
      </View>

      <View style={{backgroundColor: '#4f4f4f', flex: 5}}>

      </View>
      
      <View style={{backgroundColor: '#5f4f4f', flex: 5, flexDirection: 'row', paddingRight: 10}}>
        <Text style={{
          fontSize: 15,
          color: 'white',
          padding: 10
          }}>내용: 
        </Text>
        <TextInput style={{
          backgroundColor: 'green',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'white',
          borderWidth: 2,
          flex: 1,
          }}
          placeholder ="정겨운 학교 앞 분식...이랄까...?"/>
      </View>

      <View style={{backgroundColor: '#6f4f4f', flex: 2, paddingHorizontal: 10}}>
        <TextInput style={{
          backgroundColor: 'green',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'white',
          borderWidth: 2,
          flex:1
        }}
        placeholder="#분식 #김치볶음밥 #점심"/>
      </View>

      <View style={{backgroundColor: '#7f4f4f', flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={this.onPressed}
            style={styles.registerButton}
          >
            <Text style={{
              fontWeight: 'bold', 
              fontSize: 20,
              }}>등록</Text>

          </TouchableOpacity>
      </View>



    



    </View> 
    )
  };  
};

const styles = StyleSheet.create({
  name: {
    backgroundColor: '#008080',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 2,
  },
  ground: {
    flex: 9,
    backgroundColor: '#2f4f4f',
    padding: 3,
    
    justifyContent: 'flex-end'
  },





  registerButton: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 3,
    width: 50,
    height: 30,
    justifyContent: 'center'
    

  }

});