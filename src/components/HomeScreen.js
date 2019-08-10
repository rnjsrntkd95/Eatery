import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { TextInput } from 'react-native-gesture-handler';
import PlaceRow from 'components/PlaceRow'

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: "거슐랭"
    }

    constructor(props){
        super(props);
        
        this.state = {
            search: null,
            places: [
                {name: '김밥천국', address: '인천광역시 서구 청라 ...'},
                {name: '달봉감자', address: '123 Anywhere St'},
                {name: '삼겹살 먹고싶다', address: '123 Anywhere St'},
                {name: '아몰랑', address: '인천광역시 서구 청라 ...'},
                {name: '권구상 일해라', address: '123 Anywhere St'},
                {name: '긱식 극혐', address: '123 Anywhere St'},
                {name: '내일은 개강일', address: '인천광역시 서구 청라 ...'},
                {name: '짜장면', address: '123 Anywhere St'},
                {name: '맛있다', address: '123 Anywhere St'},
            ],
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
            <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'column',
                }}>
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
                    }}
                        value = {this.state.search}
                        />
                    <FlatList
                        data = {
                            this.state.places.filter(place => {
                                return !this.state.search || place.name === this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > 1
                            })
                        }
                        renderItem = {({ item, index }) =>
                                <PlaceRow place = { item } index = { index } navigation = { this.props.navigation }/>
                        }
                        keyExtractor = {item => item.name}
                        initialNumToRender = {20}
                        ListHeaderComponent = {<View style = {{height: 5}} />}
                    />
                </View>
            </KeyboardAwareScrollView>
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
        height: 300
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