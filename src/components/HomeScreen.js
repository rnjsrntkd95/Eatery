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

const places = [
    {name: '김밥천국', address: '123 Anywhere St'},
    {name: '달봉감자', address: '123 Anywhere St'},
    {name: '삼겹살 먹고싶다', address: '123 Anywhere St'}
]

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
                backgroundColor: '#FFFFFF',
                flexDirection: 'column',
            }}>
                <Text style={styles.header}>Eatery Map</Text>
                <View style={styles.container}>
                    <MapView
                        provider = { PROVIDER_GOOGLE }
                        style = { styles.map }
                        region = { this.state.region }
                    />
                </View>
                 <TextInput style={styles.input}
                    placeholder="Live Search"
                    onChangeText={text => {
                    this.setState({ search: text })
                }}/>

                {
                    places.map((place, index) => {
                        return(
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 5,
                                backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7',
                            }}>
                                <View style={{
                                    flex: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text>{index + 1}</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}>
                                    <Text>rating</Text>
                                </View>
                                <View style={{
                                    flex: 9,
                                    alignItems: 'center'
                                }}>
                                    <Text style = {{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                    }}>{place.name}</Text>
                                    <Text style = {{
                                        color: '#ADADAD',
                                    }}>{place.address}</Text>
                                </View>
                                <View style = {{
                                    flex: 3,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style = {{
                                        color: '#ADADAD',
                                        fontSize: 17
                                    }}>></Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        padding: 10,
        color: '#0066CC',
        backgroundColor: '#F5F5F5'
    },
    container: {
        height: 250
    },
    map: {
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