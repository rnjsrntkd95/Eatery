import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  
} from 'react-native';

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
      <View style={styles.ground}>
        <TouchableOpacity 
          onPress={this.onPressed}
          style={styles.registerButton}
        >
          <Text style={{fontWeight: 'bold'}}>등록</Text>
          
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
    borderWidth: 2
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
    width: 60,
    

  }

});