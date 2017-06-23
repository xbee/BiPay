import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import SettingsService from './../../../services/settingsService'
import TextInput from './../../../components/textInput'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Add mobile number',
  }

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      primary: false,
    }
  }

  add = async () => {
    let responseJson = await SettingsService.addMobile(this.state)

    if (responseJson.status === "success") {
      this.props.navigation.navigate("VerifyMobileNumber")
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="Enter number"
            autoCapitalize="none"
            onChangeText={(number) => this.setState({ number })}
          />
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.add}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Save
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
})
