import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, Image, Text } from 'react-native';

export default class DrawerHeader extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {},
    }

    this.getUserInfo()
  }

  getUserInfo = () => {
    AsyncStorage.getItem('user').then((value) => {
      this.setState({ 'userInfo': JSON.parse(value) });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.userInfo.profile !== null ?
          <Image
            style={styles.stretch}
            source={{ uri: this.state.userInfo.profile }}
          /> :
          <Image
            source={require('./../../assets/icons/profile_1.png')}
            style={styles.stretch}
          />
        }
        <Text style={styles.nameText}>
          {this.state.userInfo.first_name + ' ' + this.state.userInfo.last_name}
        </Text>
        <Text style={styles.emailText}>
          {this.state.userInfo.email}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15,
  },
  stretch: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  nameText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  emailText: {
    color: 'white',
    fontSize: 11,
    marginTop: 10,
  },
});
