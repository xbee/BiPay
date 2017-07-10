import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import SettingsService from './../../../services/settingsService'
import TextInput from './../../../components/mobileNumberInput'
import Colors from './../../../config/colors'
import Header from './../../../components/header'

export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Add mobile number',
  }

  constructor(props) {
    super(props);
    this.state = {
      number: '+1',
      primary: false,
    }
  }
  changeCountryCode = (code) => {
    this.setState({ number: '+' + code })
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
      <View style={{ flex: 1 }}>
        <Header
          navigation={this.props.navigation}
          back
          title="Add mobile number"
        />
        <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={75}>
          <View style={{ flex: 1 }}>
            <TextInput
              title="Enter number"
              autoCapitalize="none"
              value={this.state.number}
              onChangeText={(number) => this.setState({ number })}
              changeCountryCode={this.changeCountryCode}
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
  submit: {
    padding: 10,
    height: 65,
    backgroundColor: Colors.lightblue,
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
