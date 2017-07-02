import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableHighlight } from 'react-native'
import AuthService from './../../../services/authService'
import TextInput from './../../../components/textInput'

export default class ChangePassword extends Component {
  static navigationOptions = {
    title: 'Change password',
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
        <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
          <ScrollView keyboardDismissMode={'interactive'}>

            <TextInput
              title="Old password"
              autoCapitalize="none"
              secureTextEntry
              value={this.state.old_password}
              onChangeText={(old_password) => this.setState({ old_password })}
            />
            <TextInput
              title="New password"
              autoCapitalize="none"
              secureTextEntry
              value={this.state.line_2}
              onChangeText={(new_password1) => this.setState({ new_password1 })}
            />

            <TextInput
              title="Confirm new password"
              autoCapitalize="none"
              secureTextEntry
              value={this.state.new_password2}
              onChangeText={(new_password2) => this.setState({ new_password2 })}
            />
          </ScrollView>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.save()}>
            <Text style={{ color: 'white', fontSize: 18 }}>
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
    height: 65,
    backgroundColor: '#3D95CE',
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

