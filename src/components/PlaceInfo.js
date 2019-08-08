import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


export default class PlaceInfo extends Component {
    
    static navigationOptions = {
        title: 'Information'
    }
    
    
    render() {        
        const places = this.props.navigation.getParam('place')
        return(
            <View>
                <Text>{places.name}</Text>
                <Text>{places.address}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})
