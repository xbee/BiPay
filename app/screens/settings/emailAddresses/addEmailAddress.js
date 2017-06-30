import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import SettingsService from './../../../services/settingsService'
import ResetNavigation from './../../../util/resetNavigation'
import TextInput from './../../../components/textInput'
export default class AmountEntry extends Component {
  static navigationOptions = {
    title: 'Add email address',
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      primary: false,
    }
  }

  reload = () => {
    ResetNavigation.dispatchUnderDrawer(this.props.navigation, 'Settings', 'SettingsEmailAddresses')
  }

  add = async () => {
    let responseJson = await SettingsService.addEmail(this.state)

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
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85}>
        <View style={{ flex: 1 }}>
          <TextInput
            title="Enter email address"
            placeholder="e.g. "
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
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
