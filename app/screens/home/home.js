import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage, TouchableHighlight, Text } from 'react-native'
import UserInfoService from './../../services/userInfoService'
import Transections from './transections'
import CurrentBalance from './currentBalance'
import Auth from './../../util/auth'

export default class Home extends Component {
  static navigationOptions = {
    label: 'Home',
  }

  async componentDidMount() {
    let responseJson = await UserInfoService.getUserDetails()
    if (responseJson.status === "success") {
      AsyncStorage.removeItem('user')
      AsyncStorage.setItem('user', JSON.stringify(responseJson.data))
    }
    else {
      this.logout()
    }
  }

  logout = () => {
    Auth.logout(this.props.navigation)
  }

  render() {
    return (
      <View style={styles.container}>
        <CurrentBalance logout={this.logout} style={styles.balance} />
        <View style={styles.transection} >
          <Transections logout={this.logout} />
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.props.navigation.navigate("SendMoney")}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Send
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  balance: {
    flex: 1,
  },
  transection: {
    flex: 4,
    backgroundColor: 'white',
  },
  submit: {
    padding: 10,
    height: 70,
    backgroundColor: '#2070A0',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

