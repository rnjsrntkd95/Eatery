import React, { Component } from 'react'
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen from 'components/HomeScreen'
import PlaceInfo from 'components/PlaceInfo'
import GoogleMap from 'components/GoogleMap'

const List = createStackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: PlaceInfo }
});
//will make bottom tabs to switch between map and list
const Bottom = createBottomTabNavigator({
  List: { screen: List },
  Map: { screen: GoogleMap }
})

const AppContainer = createAppContainer(Bottom);

export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
