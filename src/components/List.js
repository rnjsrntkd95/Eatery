import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { get, put } from './api';
import Comment from './Comments';
import Input from './Input';

export default class List extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string,
    }),
  };

  state = {
    comments: [],
    refreshing: true,
  };
  //fetch comments when component is about to mount
  componentWillMount = () => this.fetchComments();
  //refetch comments when user pulls ths list down
  onRefresh = () => this.fetchComments();
  //call API to fetch comments
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
  //call API to submit a new comment
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

  render() {
    const { comments } = this.state;
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
});
