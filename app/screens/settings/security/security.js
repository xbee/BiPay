import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import Option from './../../../components/settingsOption'

export default class Security extends Component {
  static navigationOptions = {
    title: 'Security',
  }

  goTo = (path) => {
    this.props.navigation.navigate(path)
  }

  render() {
    return (
      <View style={styles.container}>
        <Option name="Change password" gotoAddress="ChangePassword" goTo={this.goTo} />
        <Option name="Two factor" gotoAddress="TwoFactor" goTo={this.goTo} />
        <Option name="Pin" gotoAddress="null" goTo={this.goTo} />
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
})

