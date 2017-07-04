import React, { Component } from 'react'
import { View } from 'react-native'
import PickerDropDown from 'react-native-picker-dropdown'
import Colors from './../config/colors'

export default class Picker extends Component {
  static Item = PickerDropDown.Picker.Item

  render() {
    const { children, style } = this.props
    return (
      <View
        style={[{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }, style]}>
        <PickerDropDown.Picker
          {...this.props}
          style={[{
            alignSelf: 'stretch',
            color: Colors.black,
            height: 32,
          }, style]}>
          {children}
        </PickerDropDown.Picker>
      </View>
    )
  }
}
