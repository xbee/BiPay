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
          width: 200,
        }, style]}>
        <PickerDropDown.Picker
          {...this.props}
          style={[{
            alignSelf: 'stretch',
            color: Colors.black,
            width: 200,
            height: 50,
            fontSize: 16,
          }, style]}>
          {children}
        </PickerDropDown.Picker>
      </View>
    )
  }
}
