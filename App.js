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




export default class App extends Component {

  close =() => {
    this.props.navigation.goBack()
  }

  state = {
    starPoint: 0,
    
  }

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

      <View style={{backgroundColor: '#FFFFFF', flex: 2}}>
        
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, alignItems: 'center'}}>
          {
              [1, 2, 3, 4, 5].map(i => {
                return <TouchableOpacity
                  onPress = {() => this.setState({ starPoint : i })} 
                  style={styles.starButton}
                  key={i}
                >
                  <Icon 
                    name={"star"} 
                    size={40}
                    color={this.state.starPoint >= i ? "#FFD64C" : "#CCCCCC"}
                    
                  />
                  
                </TouchableOpacity>
              })
            }
          </View>
        </View>

      <View style={{borderBottomWidth: 1, borderBottomColor:'#F5F5F5',borderTopWidth:1,borderTopColor:'#F5F5F5', backgroundColor: '#FFFFFF', flex: 1.5, flexDirection: 'row', paddingHorizontal: 10, }}>
        <TextInput style={{
          marginBottom: 10,
          marginTop: 10,
          fontSize: 17,
          color: 'black',
          flex: 1,
          textAlignVertical: 'top',
          }}
          placeholder="제목을 입력하세요. "/>
      </View>

      <View style={{backgroundColor: '#FFFFFF', flex: 7, flexDirection: 'row', paddingHorizontal: 10, alignContent: 'center',}}>

        <TextInput style={{
          marginBottom: 10,
          marginTop: 10,
          fontSize: 17,
          color: 'black',
          flex: 1,
          textAlignVertical: 'top',
          }}
          multiline ={true}
          maxLength ={240}
          placeholder ="내용을 입력하세요. "/>
      </View>

      {/* <View style={{backgroundColor: '#F5F5F5', flex: 2}}>
      <Text style={{
          fontSize: 20,
          color: '#00bfff',
          padding: 10,
          fontWeight: 'bold'
          
        }}>사진: 
        </Text>

        

      </View> */}
      
      <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1.5,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={this.close}
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
    borderRadius: 10,
    paddingVertical: 7,
    flex: 1,
    justifyContent: 'center'
    

  }

});