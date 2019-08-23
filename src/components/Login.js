import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

//google client id
//721194900166-uo04o3ijq2i26prjf3m84rb6m3gcd9fs.apps.googleusercontent.com

export default class Login extends Component {
  static PropTypes = {
    onLoggedIn: PropTypes.func,
  };

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('linking url');
        console.log(url);
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = ({ url }) => {
    console.log(url);
    const [, user_string] = url.match(/user=([^#]+)/);
    const user = JSON.parse(decodeURI(user_string));
    this.props.onLoggedIn(user);
  };

  // login with facebook can be valid when getting api key from Facebook
  // loginWithFaceBook = () => this.openURL('http://localhost:3000/auth/facebook');

  loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  openURL = url => {
    Linking.openURL(url);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>거슐랭에 오신 것을 환영합니다!</Text>
          <View style={styles.avatar}>
            <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
          </View>
          <Text style={styles.text}>
            리뷰를 적으시려면 로그인을 해주십시오{'\n'}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={this.loginWithGoogle}
            {...iconStyles}
          >
            구글 계정으로 로그인
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyles: {
    paddingVertical: 5,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'column',
    margin: 20,
    marginBottom: 30,
  },
});
