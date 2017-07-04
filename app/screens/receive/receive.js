import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native'
import stellarService from './../../services/stellarService'

export default class Receive extends Component {
  static navigationOptions = {
    title: 'Receive',
  }

  constructor() {
    super()

    this.state = {
      imageURI: 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=undefined&choe=UTF-8',
    }
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem('user')
    const user = JSON.parse(value)
    const imageURI = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + user.email + '&choe=UTF-8'
    this.setState({ imageURI })
  }

  getCryptoAddress = async () => {
    AsyncStorage.getItem('cryptoAddress').then((value) => {
      this.setState({ 'cryptoAddress': value || {} })
    })
  }

  setCryptoAddress = async () => {
    let responseJson = await stellarService.getAddress()
    if (responseJson.status === "success") {
      AsyncStorage.removeItem('cryptoAddress')
      AsyncStorage.setItem('cryptoAddress', JSON.stringify(responseJson.data))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          The QR code is your public address for accepting payments.
        </Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: this.state.imageURI }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4D4D4D',
  },
})
