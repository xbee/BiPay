import React, { Component } from 'react'
import { View, Alert, StyleSheet, ScrollView, TouchableHighlight, Text, KeyboardAvoidingView } from 'react-native'
import AuthService from './../../services/authService'
import TextInput from './../../components/textInput'

export default class Signup extends Component {
  static navigationOptions = {
    title: 'Create new account',
  }

  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      company: '',
      password1: '',
      password2: '',
    }
  }

  signup = async () => {
    let responseJson = await AuthService.signup(this.state)
    if (responseJson.status === "success") {
      const loginInfo = responseJson.data
      this.props.navigation.navigate("AuthVerifyMobile", {loginInfo})
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
          <ScrollView keyboardDismissMode={'interactive'}>
            <TextInput
              title="First name"
              placeholder="John"
              autoCapitalize="none"
              onChangeText={(first_name) => this.setState({ first_name })}
            />
            <TextInput
              title="Last name"
              placeholder="Last name"
              autoCapitalize="none"
              onChangeText={(last_name) => this.setState({ last_name })}
            />
            <TextInput
              style={styles.input}
              title="Email"
              placeholder="e.g john@gmail.com"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({ email })}
            />
            <TextInput
              style={styles.input}
              title="Mobile number"
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(mobile) => this.setState({ mobile })}
            />
            <TextInput
              style={styles.input}
              title="Company name"
              placeholder="e.g rehive"
              autoCapitalize="none"
              onChangeText={(company) => this.setState({ company })}
            />
            <TextInput
              style={styles.input}
              title="Password"
              placeholder="password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(password1) => this.setState({ password1 })}
            />
            <TextInput
              style={styles.input}
              title="Confirm password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(password2) => this.setState({ password2 })}
            />
          </ScrollView>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.signup()}>
            <Text style={{ color: 'white' }}>
              Sign Up
            </Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    height: 60,
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  submit: {
    padding: 10,
    marginTop: 10,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#3D95CE',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
