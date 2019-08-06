import React, { Component } from 'react'
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen from 'components/HomeScreen'

const List = createStackNavigator({
  Home: {screen: HomeScreen}
});

const AppContainer = createAppContainer(List);

export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
