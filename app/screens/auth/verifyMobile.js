import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import SettingsService from './../../services/settingsService'
import Auth from './../../util/auth'
import TextInput from './../../components/textInput'
import Colors from './../../config/colors'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Verify mobile number',
  }

  constructor(props) {
    super(props)
    const params = this.props.navigation.state.params
    this.state = {
      otp: '',
      loginInfo: params.loginInfo,
    }
  }

  reload = () => {
    Auth.login(this.props.navigation, this.state.loginInfo)
  }

  verify = async () => {
    let responseJson = await SettingsService.verifyMobile(this.state)

    if (responseJson.status === "success") {
      this.reload()
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={75}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="Enter OTP"
            placeholder="OTP"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={(otp) => this.setState({ otp })}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={[styles.submit, { backgroundColor: Colors.red }]}
            onPress={() => this.reload()}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Skip
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.submit}
            onPress={this.verify}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Verify
            </Text>
          </TouchableHighlight>
        </View>
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
    flex: 1,
    padding: 10,
    backgroundColor: Colors.lightblue,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    height: 65,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
})
