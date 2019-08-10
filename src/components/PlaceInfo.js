import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


export default class PlaceInfo extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: state.params.title,
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            title: this.props.navigation.getParam('place').name
        })
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
