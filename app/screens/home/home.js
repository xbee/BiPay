import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage, TouchableHighlight, Text } from 'react-native'
import UserInfoService from './../../services/userInfoService'
import Transactions from './transactions'
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
        <View style={styles.transaction} >
          <Transactions logout={this.logout} />
        </View>
        <View style={styles.buttonbar} >
            <TouchableHighlight
              style={styles.submit}
              onPress={() => this.props.navigation.navigate("SendTo", { reference: "" })}>
              <Text style={{ color: 'white', fontSize: 20 }}>
                Receive
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.submit}
                onPress={() => this.props.navigation.navigate("SendTo", { reference: "" })}>
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
  transaction: {
    flex: 5,
    backgroundColor: '#F7F7F7',
  },
  buttonbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  submit: {
    height: "100%",
    backgroundColor: '#3C8DBC',
    width: "50%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

