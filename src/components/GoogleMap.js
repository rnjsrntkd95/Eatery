import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: null,
    };
  }

  myLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        this.setState({
          currentLocation: {
            latitude,
            longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingBottom: 10,
          paddingRight: 10,
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ ...StyleSheet.absoluteFillObject }}
          region={this.state.currentLocation}
        >
        </MapView>
        <TouchableOpacity
          onPress={this.myLocation}
          style={styles.currentPositionButton}
        >
          <Icon name="map-marker-alt" size={25} color="#595959" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currentPositionButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 100 / 2,
    backgroundColor: '#fff',
    paddingLeft: 1,
  },
});