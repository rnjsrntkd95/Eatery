import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLocation: null
        };
    }
    
    myLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                this.setState({ currentLocation: location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        )
    }


    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MapView
                    provider = {PROVIDER_GOOGLE}
                    style = {{...StyleSheet.absoluteFillObject}}
                    region = {this.state.currentLocation}
                >
                    <Marker coordinate={ this.state }/>
                </MapView>
                <TouchableOpacity onPress={this.myLocation}>
                    <Text style = {{ textAlign: 'center'}}>current: {this.state.location}</Text>
                </TouchableOpacity>
            </View>
        )
    }
} 