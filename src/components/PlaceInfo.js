import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class PlaceInfo extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: state.params.title,
            headerStyle: {
                backgroundColor: "#F3F3F7"
            },
            headerTintColor: '#1B94FF'
            }
    }

    addReview = () => {
        this.props.navigation.navigate('AddReview')
    }

    componentDidMount() {
        this.props.navigation.setParams({
            title: this.props.navigation.getParam('place').name,
        })
    }
    constructor(props){
        super(props);

    }

    render() {
        const places = this.props.navigation.getParam('place')

        let star = <Icon name = "star" size = {30} color = "#FFD64C"/>
        let starHalf = <Icon name = "star-half" size = {30} color = "#FFD64C"/>
        let rating = []
        let selectStar = places.rating

        for(let i = 0; i < places.rating; i++){
            if(selectStar >= 1){
                rating.push(star);
            }
            if (selectStar === 0.5){
                rating.push(starHalf)
            }
            selectStar--;
        }

        return(
            <View style = {{
                flexDirection: 'column',
                flex: 1,
            }}>
                <View style = {{ alignItems: 'stretch', borderBottomColor: "#ddd", borderBottomWidth: 1, paddingBottom: 10}}>
                    <Text style = {styles.restaurantName}>{places.name}</Text>
                    <View style = {{
                        paddingTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        { rating }
                        <Text style = {{paddingLeft: 10, fontSize: 30}}>{places.rating}</Text>
                    </View>
                    <Text style = {styles.restaurantAddress}>{places.address}</Text>
                </View>
                
                <View style = {styles.reviewContainer}>
                    <Button title = "리뷰를 남겨주세요" onPress = {this.addReview}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    restaurantName: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 30
    },
    restaurantAddress: {
        paddingTop: 10,
        textAlign: 'center'
    },
    reviewContainer: {
        
    }
})
