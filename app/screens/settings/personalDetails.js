import React, { Component } from 'react'
import { ImagePicker } from 'expo'
import { View, Modal, Alert, Text, Image, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, AsyncStorage, TouchableHighlight } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import Picker from './../../components/picker'
import UserInfoService from './../../services/userInfoService'
import ResetNavigation from './../../util/resetNavigation'
import Colors from './../../config/colors'
import Header from './../../components/header'

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Personal details',
  }

  constructor() {
    super()

    this.state = {
      nationality: '',
      first_name: '',
      last_name: '',
      id_number: '',
      skype_name: '',
      mobile_number: '',
      language: '',
      modalVisible: false,
    }
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem('user')

    const user = JSON.parse(value)

    if (user.language === '' || !user.language) {
      user.language = 'en'
    }
    this.setState({
      first_name: user.first_name,
      last_name: user.last_name,
      id_number: user.id_number,
      nationality: user.nationality !== "" ? user.nationality : 'US',
      language: user.language,
      profile: user.profile,
    })
  }

  navigateToUploadImage = (result) => {
    this.props.navigation.navigate("UploadImage", { image: result })
  }

  openModal = async () => {
    this.setState({ modalVisible: true })
  }

  launchCamera = async () => {

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    this.setState({ modalVisible: false })
    if (!result.cancelled) {
      this.navigateToUploadImage(result)
    }
  }

  launchImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    this.setState({ modalVisible: false })
    if (!result.cancelled) {
      this.navigateToUploadImage(result)
    }
  }

  save = async () => {
    let responseJson = await UserInfoService.updateUserDetails({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      id_number: this.state.id_number,
      nationality: this.state.nationality,
      language: this.state.language,
    })
    if (responseJson.status === "success") {
      await AsyncStorage.removeItem('user')
      await AsyncStorage.setItem('user', JSON.stringify(responseJson.data))
      ResetNavigation.dispatchToDrawerRoute(this.props.navigation, "Settings")
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
          title="Personal details"
        />
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
          <ScrollView keyboardDismissMode={'interactive'}>
            <View style={styles.profile}>
              <TouchableHighlight onPress={() => this.openModal()}>
                {this.state.profile ?
                  <Image
                    style={styles.photo}
                    source={{ uri: this.state.profile, cache: 'only-if-cached' }}
                  /> :
                  <Image
                    source={require('./../../../assets/icons/profile_1.png')}
                    style={styles.photo}
                  />
                }
              </TouchableHighlight>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                First name
                </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                value={this.state.first_name}
                onChangeText={(text) => this.setState({ first_name: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                Last name
                </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                value={this.state.last_name}
                onChangeText={(text) => this.setState({ last_name: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>
                Identity number
                </Text>
              <TextInput
                style={styles.input}
                placeholder=""
                autoCapitalize="none"
                value={this.state.id_number}
                onChangeText={(text) => this.setState({ id_number: text })}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Text style={[styles.text, { flex: 1 }]}>
                Country
              </Text>
              <CountryPicker
                onChange={(value) => {
                  this.setState({ nationality: value.cca2 });
                }}
                closeable
                filterable
                cca2={this.state.nationality}
                translation="eng"
                styles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              />
            </View>
            <View style={[styles.pickerContainer, { height: 60 }]}>
              <Text style={[styles.text, { flex: 2 }]}>
                Language
              </Text>
              <Picker
                selectedValue={this.state.language}
                style={{ flex: 1 }}
                onValueChange={(lang) => {
                  this.setState({ language: lang })
                }}>
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Africans" value="af" />
              </Picker>
            </View>
          </ScrollView>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.save()}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Save
              </Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
        <Modal
          animationType={"slide"}
          transparent
          style={{ backgroundColor: Colors.lightgray }}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }} >
          <View style={styles.modal}>
            <View style={styles.bottomModal}>
              <View style={[styles.button, { borderBottomColor: Colors.black }]}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                  Change Image
                </Text>
              </View>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.launchCamera()}>
                <Text style={styles.buttonText}>
                  Use Camera
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.launchImageLibrary()}>
                <Text style={styles.buttonText}>
                  Choose From Gallery
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => { this.setState({ modalVisible: false }) }}>
                <Text style={styles.buttonText}>
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
    height: 50,
    width: "100%",
    padding: 15,
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 'normal',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
  },
  submit: {
    padding: 10,
    marginTop: 10,
    height: 65,
    backgroundColor: Colors.lightblue,
    width: "100%",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
  },
  profile: {
    height: 130,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    width: '70%',
    height: 220,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
})

