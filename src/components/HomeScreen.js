import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'

export default class HomeScreen extends Component {
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text>
                        Hello World
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})