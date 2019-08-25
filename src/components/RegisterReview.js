import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class RegisterReview extends Component {

    close =() => {
      this.props.navigation.goBack()
    }
  
    state = {
      starPoint: 0,    
    }
    
    render() {
  
      return (
        
      <View style={{flex: 1}}>
  
        <View style = {styles.location}>
          <Text style={styles.locationFont}>
            위치: 인천광역시 연수구 송도동...
          </Text>
  
          <TouchableOpacity
            style={styles.closeButton}
            onPress={this.close}
          >
            <Icon name="home" size={30} color="#1B94FF" />
          </TouchableOpacity>
  
        </View>
  
        <View style={{backgroundColor: '#FFFFFF', flex: 2}}>
          
            <View style={styles.starPointGround}>
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
  
        <View style={styles.titleGround}>
          <TextInput style={styles.titleFont}
            placeholder="제목을 입력하세요. "/>
        </View>
  
        <View style={styles.contentGround}>
  
          <TextInput style={styles.contentFont}
            multiline ={true}
            maxLength ={240}
            placeholder ="내용을 입력하세요. "/>
        </View>
  
        <View style={styles.registerGround}>
            <TouchableOpacity 
              onPress={this.close}
              style={styles.registerButton}
            >
              <Text style={styles.registerFont}>
                등록
              </Text>
  
            </TouchableOpacity>
        </View>
      </View> 
   
      )
    };  
  };
  
  const styles = StyleSheet.create({
    location: {
      backgroundColor: '#FFFFFF',
      flex: 1.5, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    locationFont: {
      fontSize: 15,
      color: 'black',
      padding: 10,
      fontWeight: 'bold'
    }, 
    starPointGround: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      paddingHorizontal: 40, 
      alignItems: 'center'
    },
    titleGround: {
      borderBottomWidth: 1, 
      borderBottomColor:'#F5F5F5',
      borderTopWidth:1,
      borderTopColor:'#F5F5F5', 
      backgroundColor: '#FFFFFF', 
      flex: 1.5, 
      flexDirection: 'row', 
      paddingHorizontal: 10,
    },
      titleFont: {
      marginBottom: 10,
      marginTop: 10,
      fontSize: 17,
      color: 'black',
      flex: 1,
      textAlignVertical: 'top',
    },
    contentGround: {
      backgroundColor: '#FFFFFF', 
      flex: 7, 
      flexDirection: 'row', 
      paddingHorizontal: 10, 
      alignContent: 'center',
    },
    contentFont: {
      marginBottom: 10,
      marginTop: 10,
      fontSize: 17,
      color: 'black',
      flex: 1,
      textAlignVertical: 'top',
    },
    registerGround: {
      paddingHorizontal: 20, 
      backgroundColor: '#FFFFFF', 
      flex: 1.5,
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    registerFont: {
      fontWeight: 'bold', 
      fontSize: 17,
      color: 'white'
    },
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