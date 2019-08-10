import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

export default class Map extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                error: null
            }
        }   
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                        error: null
                    }
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={{flex: 1}}>
                <MapView
                    provider = { PROVIDER_GOOGLE }
                    style = {{...StyleSheet.absoluteFillObject}}
                    region = { this.state.region }
                />
            </View>
        )
    }
} 