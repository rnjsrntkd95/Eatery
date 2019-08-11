import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      // <View style={{flexDirection: 'row'}}>
      //   <View style={{backgroundColor: 'powderblue', flex:1}}/>
      //   <Text style={styles.main}>가게명</Text>
      // </View>
    <View style={{flex: 1}}>

      <View style={styles.name}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
        }}>Review</Text>
        
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>EateryMap</Text>

      </View>
      <View style={styles.ground}></View>

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
    justifyContent: 'space-between'
  },
  ground: {
    flex: 9,
    backgroundColor: '#2f4f4f',
  }

});