import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, TouchableHighlight, Text, Alert, ListView, ActivityIndicator } from 'react-native'
import Contact from './../../components/contact'
import TextInput from './../../components/textInput'
import ContactService from './../../services/contactService'

export default class SendTo extends Component {
  static navigationOptions = {
    title: 'To',
  }

  constructor(props) {
    super(props)
    const params = this.props.navigation.state.params
    this.state = {
      ready: false,
      reference: params.reference,
      searchText: params.reference,
      data: [],
      contacts: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    }
  }

  componentWillMount() {
    this.showContactsAsync()
  }

  showContactsAsync = async () => {
    // Ask for permission to query contacts.
    let data = await ContactService.getAllContacts()

    this.setState({
      ready: true,
      data,
      contacts: this.state.contacts.cloneWithRows(data),
    })
  }

  selectAContact = (contact) => {
    this.setState({ searchText: contact })
  }

  searchTextChanged = (event) => {
    let searchText = event.nativeEvent.text
    this.setState({ searchText })

    if (searchText === '') {
      this.setState({
        contacts: this.state.contacts.cloneWithRows(this.state.data),
      })
      return
    }

    let contacts = this.state.data.filter((node) => {
      let name = node.name.toLowerCase()
      if (name.indexOf(searchText) !== -1) {
        return true
      }
      else if (node.contact.indexOf(searchText) !== -1) {
        return true
      }

      return false
    })

    this.setState({
      contacts: this.state.contacts.cloneWithRows(contacts),
    })
  }


  send = async () => {
    if (this.state.searchText === '') {
      Alert.alert(
        'Error',
        'Enter a reference..',
      )
      return
    }
    else {
      this.setState({ reference: this.state.searchText })
    }

    this.props.navigation.navigate("SendMoney", { reference: this.state.searchText })
  }

  goToBarcodeScanner = () => {
    if (this.state.amount <= 0) {
      Alert.alert(
        'Invalid',
        'Enter valid amount',
        [[{ text: 'OK' }]]
      )
    }
    else {
      this.props.navigation.navigate("QRcodeScanner", { amount: this.state.amount, note: this.state.note })
    }
  }

  render() {
    if (!this.state.ready) {
      return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={70}>
          <View style={{ flex: 1 }}>
            <TextInput
              title="Enter name/email/mobile"
              autoCapitalize="none"
              value={this.state.searchText}
              onChange={this.searchTextChanged.bind(this)}
            />
            <View style={styles.spinner}>
              <Text>
                Loading Contacts
              </Text>
              <ActivityIndicator
                animating
                style={{ height: 80 }}
                size="large"
              />
            </View>
          </View>
          <TouchableHighlight
            style={[styles.submit, { marginTop: 5 }]}
            onPress={this.goToBarcodeScanner}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Scan QR code
            </Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      )
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'} keyboardVerticalOffset={85} >
        <View style={{ flex: 1 }}>
          <TextInput
            title="Recepient"
            placeholder="Enter name/email/mobile"
            autoCapitalize="none"
            value={this.state.searchText}
            onChange={this.searchTextChanged.bind(this)}
          />
          <View style={{ flex: 1 }}>
            <ListView
              dataSource={this.state.contacts}
              enableEmptySections
              renderRow={(rowData) => <Contact selected={this.selectAContact} rowData={rowData} />}
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.submit}
          onPress={this.send}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Next
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.submit, { marginTop: 5 }]}
          onPress={this.goToBarcodeScanner}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            or Scan QR code
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
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    height: 60,
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  contact: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
