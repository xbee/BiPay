import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView } from 'react-native'
import TextInput from './../../../components/textInput'

export default class BankAccountComponent extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
        <ScrollView keyboardDismissMode={'interactive'}>
          <TextInput
            title="Account holder"
            placeholder="Account holder"
            autoCapitalize="none"
            value={this.props.values.name}
            onChangeText={(text) => this.props.updateName(text)}
          />
          <TextInput
            title="Account number"
            placeholder="Account number"
            autoCapitalize="none"
            value={this.props.values.number}
            onChangeText={(text) => this.props.updateNumber(text)}
          />
          <TextInput
            title="Account type"
            placeholder="Account type"
            autoCapitalize="none"
            value={this.props.values.type}
            onChangeText={(text) => this.props.updateType(text)}
          />
          <TextInput
            title="Bank name"
            placeholder="Bank name"
            autoCapitalize="none"
            value={this.props.values.bank_name}
            onChangeText={(text) => this.props.updateBank(text)}
          />
          <TextInput
            title="Branch code"
            placeholder="Branch code"
            autoCapitalize="none"
            value={this.props.values.branch_code}
            onChangeText={(text) => this.props.updateBranch(text)}
          />
          <TextInput
            title="Swift code"
            placeholder="Swift code"
            autoCapitalize="none"
            value={this.props.values.swift}
            onChangeText={(text) => this.props.updateSwift(text)}
          />
          <TextInput
            title="IBAN number"
            placeholder="IBAN number"
            autoCapitalize="none"
            value={this.props.values.iban}
            onChangeText={(text) => this.props.updateIBAN(text)}
          />
          <TextInput
            title="BIC number"
            placeholder="BIC number"
            autoCapitalize="none"
            value={this.props.values.bic}
            onChangeText={(text) => this.props.updateBIC(text)}
          />
        </ScrollView>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.props.save}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Save
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  submit: {
    marginTop: 10,
    height: 65,
    backgroundColor: '#3D95CE',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
