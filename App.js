import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import RegisterReview from 'components/RegisterReview'
import GoogleMap from 'components/GoogleMap'

export default class App extends Component {

  render() {
    return(
      <View style={{flex: 1}}>
        <GoogleMap />
        {/* <RegisterReview /> */}
      </View>    
    )
  } 
};
