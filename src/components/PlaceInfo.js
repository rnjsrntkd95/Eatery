import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import Comment from './Comments';
import Input from './Input';

import Icon from 'react-native-vector-icons/FontAwesome';
import { get, put } from './api';

export default class PlaceInfo extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string,
    }),
  };

  state = {
    comments: [],
    refreshing: true,
  };

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: state.params.title,
      headerStyle: {
        backgroundColor: '#F3F3F7',
      },
      headerTintColor: '#1B94FF',
    };
  };

  addReview = () => {
    this.props.navigation.navigate('AddReview');
  };

  componentWillMount = () => this.fetchComments();

  onRefresh = () => this.fetchComments();

  fetchComments = async () => {
    this.setState({ refreshing: true });
    try {
      const response = await get('comments');
      const json = await response.json();
      this.setState({
        refreshing: false,
        comments: json.comments,
      });
    } catch (error) {
      alert(error);
    }
  };

  submitComment = async comment => {
    const { user } = this.props;
    this._scrollView.scrollTo({ y: 0 });
    try {
      const response = await put('comments', {
        user_id: user._id,
        content: comment,
      });
      const json = await response.json();
      this.setState({
        comments: [json.comment, ...this.state.comments],
      });
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.navigation.getParam('place').name,
    });
  }
  constructor(props) {
    super(props);
  }

  render() {
    const places = this.props.navigation.getParam('place');
    const { comments } = this.state;

    let star = <Icon name="star" size={30} color="#FFD64C" />;
    let starHalf = <Icon name="star-half" size={30} color="#FFD64C" />;
    let rating = [];
    let selectStar = places.rating;

    for (let i = 0; i < places.rating; i++) {
      if (selectStar >= 1) {
        rating.push(star);
      }
      if (selectStar === 0.5) {
        rating.push(starHalf);
      }
      selectStar--;
    }

    return (
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: 'stretch',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
        >
          <Text style={styles.restaurantName}>{places.name}</Text>
          <View
            style={{
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            {rating}
            <Text style={{ paddingLeft: 10, fontSize: 30 }}>
              {places.rating}
            </Text>
          </View>
          <Text style={styles.restaurantAddress}>{places.address}</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Button title="리뷰를 남겨주세요" onPress={this.addReview} />
        </View>
        <View style={styles.container}>
          <ScrollView
            ref={scrollView => {
              this._scrollView = scrollView;
            }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            {comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </ScrollView>
          <Input onSubmit={this.submitComment} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  restaurantName: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  restaurantAddress: {
    paddingTop: 10,
    textAlign: 'center',
  },
  reviewContainer: {},
});
