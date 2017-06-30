import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableHighlight } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import UserInfoService from './../../services/userInfoService'
import TextInput from './../../components/textInput'

export default class Address extends Component {
  static navigationOptions = {
    title: 'Address',
  }

  constructor() {
    super()

    this.state = {
      line_1: '',
      line_2: '',
      city: '',
      state_province: '',
      country: '',
      postal_code: '',
    }
  }

  componentDidMount() {
    this.getAddress()
  }

  getAddress = async () => {
    let responseJson = await UserInfoService.getAddress()
    if (responseJson.status === "success") {
      const address = responseJson.data
      this.setState({
        line_1: address.line_1,
        line_2: address.line_2,
        city: address.city,
        state_province: address.state_province,
        country: address.country,
        postal_code: address.postal_code,
      })
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  save = async () => {
    let responseJson = UserInfoService.updateAddress(this.state)
    if (responseJson.status === "success") {
      this.props.navigation.goBack()
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
              title="Line 1"
              autoCapitalize="none"
              value={this.state.line_1}
              onChangeText={(line_1) => this.setState({ line_1 })}
            />

            <TextInput
              title="Line 2"
              autoCapitalize="none"
              value={this.state.line_2}
              onChangeText={(line_2) => this.setState({ line_2 })}
            />

            <TextInput
              title="City"
              autoCapitalize="none"
              value={this.state.city}
              onChangeText={(city) => this.setState({ city })}
            />

            <TextInput
              title="State province"
              autoCapitalize="none"
              value={this.state.state_province}
              onChangeText={(state_province) => this.setState({ state_province })}
            />

            <View style={styles.pickerContainer}>
              <Text style={[styles.text, { flex: 1 }]}>
                Country
              </Text>
              <CountryPicker
                onChange={(value) => {
                  this.setState({ country: value.cca2 });
                }}
                cca2={this.state.country}
                translation="eng"
                styles={{ flex: 1, justifyContent: 'center' }}
              />
            </View>

            <TextInput
              title="Postal code"
              autoCapitalize="none"
              value={this.state.postal_code}
              onChangeText={(postal_code) => this.setState({ postal_code })}
            />
          </ScrollView>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.save()}>
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
    marginTop: 10,
    height: 65,
    backgroundColor: '#3C8DBC',
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#4D4D4D',
  },
  pickerContainer: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
})

