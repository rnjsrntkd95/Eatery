import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from 'components/HomeScreen';
import PlaceInfo from 'components/PlaceInfo';
import GoogleMap from 'components/GoogleMap';
import PlaceReview from 'components/PlaceReview';
import SubApp from 'components/SubApp';

const List = createStackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: PlaceInfo },
  AddReview: { screen: PlaceReview },
});
//will make bottom tabs to switch between map and list
const Bottom = createBottomTabNavigator({
  지도: { screen: GoogleMap },
  리스트: { screen: List },
  로그인: { screen: SubApp },
});

const AppContainer = createAppContainer(Bottom);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
