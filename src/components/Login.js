import React, { Component, PropTypes } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    // static PropTypes = {
    //     onLoggedIn: PropTypes.func.isRequired
    // }
    
    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
        Linking.getInitialURL().then((url) => {
            if(url){
                this.handleOpenURL({ url });
            }
        });
    };
    
    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
        const [, user_string] = url.match(/user=([^#]+)/);
        const user = JSON.parse(decodeURI(user_string));
        this.props.onLoggedIn(user);
    };
    
    loginWithFaceBook = () => this.openURL('https://localhost:3000/auth/facebook');

    loginWithGoogle = () => this.openURL('https://localhost:3000/auth/google');

    openURL = (url) => {
        Linking.openURL(url);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header}>
                        Welcome to EateryMap!
                    </Text>
                    <View style={styles.avatar}>
                        <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
                    </View>
                    <Text style={styles.text}>
                        Please log in to continue {'\n'}
                    </Text>
                </View>

                <View style={styles.buttons}>
                    <Icon.Button
                        name = "facebook"
                        backgroundColor = "#3b5998"
                        onPress = {this.loginWithFaceBook}
                        {...iconStyles}
                    >
                        Login with facebook
                    </Icon.Button>
                    <Text>
                        {'\n'}
                    </Text>
                    <Icon.Button
                        name = "google"
                        backgroundColor = "#DD4B39"
                        onPress = {this.loginWithGoogle}
                        {...iconStyles}
                    >
                        Login with Google
                    </Icon.Button>
                </View>
            </View>           
        )
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyles: {
        paddingVertical: 5
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
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
        color: "#333",
        marginBottom: 5,
    },
    buttons: {
        flexDirection: 'column',
        margin: 20,
        marginBottom: 30,
    },
})