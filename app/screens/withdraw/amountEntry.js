import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import TextInput from './../../components/textInput'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Withdraw',
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      note: '',
    }
  }

  goToSendTo = () => {
    if (this.state.amount <= 0) {
      Alert.alert(
        'Invalid',
        'Enter valid amount',
        [[{ text: 'OK' }]]
      )
    }
    else {
      this.props.navigation.navigate("SendTo", { amount: this.state.amount, note: this.state.note, reference: '' })
    }
  }

  goToBarcodeScanner = () => {
    if (this.state.amount <= 0) {
      Alert.alert(
        'Are you sure?',
        'You are about to withdraw ' + currency.symbol + this.state.amount,
        [
          { text: 'Yes', onPress: this.withdrawConfirmed },
          { text: 'No', onPress: () => ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home"), style: 'cancel' },
        ]
      )
    }
    else {
      this.props.navigation.navigate("QRcodeScanner", { amount: this.state.amount, note: this.state.note })
    }
  }

  amountChanged = (text) => {
    let amount = parseFloat(text)
    if (isNaN(amount)) {
      this.setState({ amount: 0 })
    }
    else {
      this.setState({ amount })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="ZAR"
            placeholder="Amount in rands"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={this.amountChanged}
          />
          <TextInput
            title="BTC"
            placeholder="Amount in bitcoin"
            autoCapitalize="none"
            onChangeText={(note) => this.setState({ note })}
          />
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.goToSendTo}>
          <Text style={{ color: 'white', fontSize: 20 }}>
            Next
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  submit: {
    padding: 10,
    height: 65,
    backgroundColor: '#3C8DBC',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
})
