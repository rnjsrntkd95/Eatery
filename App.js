import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
  
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

close =() => {
  this.props.navigation.goBack()
}

export default class App extends Component {
  render() {
    return (
      
    <View style={{flex: 1}}>

      {/* <View style={styles.name}>
        <Text style={{
          fontSize: 40, 
          fontWeight: 'bold',
        }}>  Review</Text>
        
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        }}>EateryMap</Text>
      </View> */}

      <View style={{backgroundColor: '#FFFFFF', flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{
          fontSize: 15,
          color: 'black',
          padding: 10,
          fontWeight: 'bold'
        }}>위치: 인천광역시 연수구 송도동...
        </Text>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.close}
        >
          <Icon name="home" size={30} color="#1B94FF" />
        </TouchableOpacity>

      </View>

      <View style={{backgroundColor: '#F5F5F5', flex: 2}}>
        
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, alignItems: 'center'}}>
          {
              [1, 2, 3, 4, 5].map(i => {
                return <TouchableOpacity 
                  style={styles.starButton}
                  key={i} 
                >
                  <Icon 
                    name={"star-o"} 
                    size={40}
                    color={'#FFD64C'}
                  />
                </TouchableOpacity>
              })
            }
          </View>
        </View>

      <View style={{backgroundColor: '#FFFFFF', flex: 2, flexDirection: 'row', paddingRight: 10, }}>
        <Text style={{
          fontSize: 20,
          color: '#00bfff',
          padding: 10,
          fontWeight: 'bold'
        }}>메뉴: 
        </Text>
        <TextInput style={{
          backgroundColor: '#00bfff',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'black',
          flex: 1,
          
          }}
          placeholder ="김치볶음밥"/>
      </View>

      <View style={{backgroundColor: '#F5F5F5', flex: 5}}>
      <Text style={{
          fontSize: 20,
          color: '#00bfff',
          padding: 10,
          fontWeight: 'bold'
          
        }}>사진: 
        </Text>

        

      </View>
      
      <View style={{backgroundColor: '#FFFFFF', flex: 5, flexDirection: 'row', paddingRight: 10, alignContent: 'center'}}>
        <Text style={{
          fontSize: 20,
          color: '#00bfff',
          padding: 10,
          fontWeight: 'bold'
          }}>내용: 
        </Text>
        <TextInput style={{
          backgroundColor: '#00bfff',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'white',
          flex: 1,
  
          }}
          placeholder ="정겨운 학교 앞 분식...이랄까...?"/>
      </View>

      <View style={{backgroundColor: '#F5F5F5', flex: 2, paddingRight: 10, flexDirection: 'row'}}>
      <Text style={{
          fontSize: 20,
          color: '#00bfff',
          padding: 10,
          fontWeight: 'bold'
          }}>태그: 
        </Text>
        <TextInput style={{
          backgroundColor: '#00bfff',
          marginBottom: 10,
          marginTop: 10,
          paddingHorizontal: 20,
          fontSize: 15,
          color: 'white',

          flex:1
        }}
        placeholder="#분식 #김치볶음밥 #점심"/>
      </View>

      <View style={{backgroundColor: '#FFFFFF', flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={this.onPressed}
            style={styles.registerButton}
          >
            <Text style={{
              fontWeight: 'bold', 
              fontSize: 17,
              color: 'white'
              
              }}>등록</Text>

          </TouchableOpacity>
      </View>
    </View> 
 
    )
  };  
};

const styles = StyleSheet.create({
  name: {
    backgroundColor: '#1B94FF',
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
  closeButton: {
    paddingHorizontal: 10
  },
  starButton: {
    padding: 5
  },



  registerButton: {
    alignItems: 'center',
    backgroundColor: '#1B94FF',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 3,
    width: 50,
    height: 30,
    justifyContent: 'center'
    

  }

});