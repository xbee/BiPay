import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, TouchableHighlight } from 'react-native'
import AuthService from './../../../services/authService'

export default class ChangePassword extends Component {
  static navigationOptions = {
    title: 'Change Password',
  }

  constructor() {
    super()

    this.state = {
      old_password: "",
      new_password1: "",
      new_password2: "",
    }
  }

  save = async () => {
    let responseJson = await AuthService.changePassword(this.state)
    if (responseJson.status === "success") {
      Alert.alert('Success',
        responseJson.message,
        [{
          text: 'OK',
          onPress: () => this.props.navigation.goBack(),
        }])
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
          <ScrollView keyboardDismissMode={'interactive'}>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                Old Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                secureTextEntry
                value={this.state.old_password}
                onChangeText={(old_password) => this.setState({ old_password })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                New Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                secureTextEntry
                value={this.state.line_2}
                onChangeText={(new_password1) => this.setState({ new_password1 })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                Confirm New Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                secureTextEntry
                value={this.state.new_password2}
                onChangeText={(new_password2) => this.setState({ new_password2 })}
              />
            </View>
          </ScrollView>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.save()}>
            <Text style={{ color: 'white' }}>
              Confirm
            </Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
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
  input: {
    height: 60,
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderColor: 'white',
    borderWidth: 1,
  },
  submit: {
    padding: 10,
    marginTop: 10,
    height: 60,
    backgroundColor: '#2070A0',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
  },
})

