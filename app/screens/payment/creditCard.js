import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from './../../components/credit-card/src/index';
import TextInput from './../../components/textInput'

export default class creditCard extends Component {
  static navigationOptions = {
    title: 'Add credit card',
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      note: '',
    }
  }

  _onChange = (form) => console.log(form);

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
        <View style={{ flex: 1 }}>
          <LiteCreditCardInput inputStyle={styles.input} onChange={this._onChange} />
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
