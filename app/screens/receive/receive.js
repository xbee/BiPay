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
      cryptoAddress: {}
    }
  }

  async componentWillMount() {
    await this.getCryptoAddress()
  }

  getCryptoAddress = async () => {
    let cryptoAddress = await stellarService.getAddress()
    cryptoAddress.qrCode = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + cryptoAddress.reference + '&choe=UTF-8'
    this.setState({ cryptoAddress })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          The QR code is your public address for accepting payments.
        </Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: this.state.cryptoAddress.qrCode }}
        />
        <Text style={styles.text}>
          {this.state.cryptoAddress.reference}
        </Text>
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
