import React, { Component } from 'react'
import { View, StyleSheet, Image, Alert, Text, TouchableHighlight } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import SettingsService from './../../../services/settingsService'
import ResetNavigation from './../../../util/resetNavigation'

export default class DocumentUpload extends Component {
  static navigationOptions = {
    title: 'Document upload',
  }

  constructor(props) {
    super(props)
    const params = this.props.navigation.state.params
    this.state = {
      image: params.image,
      loading: false,
    }
  }

  goBackAndReload = () => {
    ResetNavigation.dispatchUnderDrawer(this.props.navigation, "Settings", 'SettingsGetVerified')
  }

  saveImage = async () => {
    this.setState({ loading: true })
    const uri = this.state.image.uri
    const parts = uri.split("/")
    const name = parts[parts.length - 1]
    const file = {
      uri,
      name,
      type: 'image/jpg',
    }

    let responseJson = await SettingsService.documentUpload(file)
    if (responseJson.status === "success") {
      Alert.alert(
        "Upload successful",
        "Your information will shortly be reviewed by our team.",
        [{ text: 'OK', onPress: () => this.goBackAndReload() }]
      )
    }
    else {
      Alert.alert('Error',
        responseJson.message,
        [{ text: 'OK' }])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.loading}
          textContent={"Uploading..."}
          textStyle={{ color: '#FFF' }}
        />
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={null}>
          <Image
            style={{ height: 300, width: 300 }}
            source={{ uri: this.state.image.uri }}
          />
        </TouchableHighlight>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            style={[styles.button, {backgroundColor: '#ED675A'}]}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.saveImage()}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Upload
          </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonsContainer: {
    height: 65,
    backgroundColor: '#3C8DBC',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

