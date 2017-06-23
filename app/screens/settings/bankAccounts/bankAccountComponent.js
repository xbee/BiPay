import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView } from 'react-native'
import TextInput from './../../../components/textInput'

export default class BankAccountComponent extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
        <ScrollView keyboardDismissMode={'interactive'}>
          <TextInput
            title="Account Holder"
            autoCapitalize="none"
            value={this.props.values.name}
            onChangeText={(text) => this.props.updateName(text)}
          />
          <TextInput
            title="Account Number"
            autoCapitalize="none"
            value={this.props.values.number}
            onChangeText={(text) => this.props.updateNumber(text)}
          />
          <TextInput
            title="Account Type"
            autoCapitalize="none"
            value={this.props.values.type}
            onChangeText={(text) => this.props.updateType(text)}
          />
          <TextInput
            title="Bank Name"
            autoCapitalize="none"
            value={this.props.values.bank_name}
            onChangeText={(text) => this.props.updateBank(text)}
          />
          <TextInput
            title="Branch Code"
            autoCapitalize="none"
            value={this.props.values.branch_code}
            onChangeText={(text) => this.props.updateBranch(text)}
          />
          <TextInput
            title="Swift Code"
            autoCapitalize="none"
            value={this.props.values.swift}
            onChangeText={(text) => this.props.updateSwift(text)}
          />
          <TextInput
            title="IBAN Number"
            autoCapitalize="none"
            value={this.props.values.iban}
            onChangeText={(text) => this.props.updateIBAN(text)}
          />
          <TextInput
            title="BIC Number"
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
    backgroundColor: '#3C8DBC',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
