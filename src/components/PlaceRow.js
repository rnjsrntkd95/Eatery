import React, { Component } from 'react'
import  {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class PlaceRow extends Component {
    render(){
        const {
            place,
            index,
        } = this.props
        return(
            <View style={{
                flexDirection: 'row',
                marginTop: 7,
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
                        fontWeight: '700',
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
    }
}