import React, { Component } from 'react'
import { Modal, View, StyleSheet, Text, Image, AsyncStorage, TouchableHighlight } from 'react-native'
import { ImagePicker } from 'expo'

export default class ProfileImage extends Component {
  static navigationOptions = {
    title: 'Profile Image',
  }

  constructor() {
    super()

    this.state = {
      modalVisible: false,
      imageURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmT5tM-IGcFDpqZ87p9zKGaWQuzpvAcDKfOTPYfx5A9zOmbTh8RMMFg',
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const value = await AsyncStorage.getItem('user');
    const user = JSON.parse(value)
    if (user.profile !== null) {
      this.setState({ imageURI: user.profile })
    }
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
      this.props.navigation.navigate("UploadImage", { image: result })
    }
  }

  launchImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    this.setState({ modalVisible: false })
    if (!result.cancelled) {
      this.props.navigation.navigate("UploadImage", { image: result })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.openModal()}>
          <Image
            style={styles.photo}
            source={{ uri: this.state.imageURI }}
          />
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent
          style={{ backgroundColor: 'lightgray' }}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }} >
          <View style={styles.modal}>
            <View style={styles.bottomModal}>
              <View style={[styles.button, { borderBottomColor: 'black' }]}>
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
    padding: 20,
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
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
    borderColor: 'black',
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

