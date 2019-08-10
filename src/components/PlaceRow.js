import React, { Component } from 'react'
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class PlaceRow extends Component {

    infoPressed = () => {
        this.props.navigation.navigate(
            'Info',
            { place: this.props.place }
        )
    }

    render(){
        const {
            place,
            index,
        } = this.props
        return(
            <TouchableOpacity onPress = {this.infoPressed}>
            <View style={{
                backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7',
                flexDirection: 'row',
                padding: 5,
                flex: 1
                }}>
                <View style={styles.indexBox}>
                    <Text>{index + 1}</Text>
                </View>
                <View style={styles.ratingBox}>
                    <Icon name = "star" color = "#FFD64C"/>
                    <Icon name = "star" color = "#FFD64C"/>
                    <Icon name = "star" color = "#FFD64C"/>
                    <Icon name = "star" color = "#FFD64C"/>
                    <Icon name = "star-half" color = "#FFD64C"/>                
                </View>
                <View style={styles.placeNameBox}>
                    <Text style = {{
                        fontWeight: '700',
                        fontSize: 18,
                      }}>{place.name}</Text>
                    <Text style = {{
                    color: '#ADADAD',
                    }}>{place.address}</Text>
                </View>
                <View style = {styles.arrowButtonBox}>                        
                    <Text style = {{
                        color: '#ADADAD',
                        fontSize: 17
                    }}>></Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    indexBox: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingBox: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    arrowButtonBox: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeNameBox: {
        flex: 9,
        alignItems: 'center'
    }
})