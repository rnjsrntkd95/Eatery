import React, { Component } from 'react'
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen from 'components/HomeScreen'
import PlaceInfo from 'components/PlaceInfo'

const List = createStackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: PlaceInfo }
});

const AppContainer = createAppContainer(List);

export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
