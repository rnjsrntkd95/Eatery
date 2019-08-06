import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            search: null,
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
            <View style={{
                flex: 1,
                backgroundColor: '#FFFFFF'
            }}>
                <View style = {styles.container}>
                    <MapView
                        provider = { PROVIDER_GOOGLE }
                        style = { styles.map }
                        region = {this.state.region}
                        >
                    </MapView>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <TextInput style={styles.input}
                        placeholder="Live Search"
                        onChangeText={text => {
                            this.setState({ search: text })
                        }}
                    />
                    <Text>{this.state.latitude}</Text>
                    <Text>{this.state.longitude}</Text>
                    <Text>{this.state.error}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
    input: {
        fontSize: 16,
        padding: 10,
        paddingHorizontal: 20,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    }
})