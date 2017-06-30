import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default class Contact extends Component {

  render() {
    return (
      <TouchableHighlight
        style={styles.contact}
        onPress={() => this.props.selected(this.props.rowData.contact)} >
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
              source={require('./../../assets/icons/profile.png')}
              style={{height:40, width:40}}
            />
          </View>
          <View style={styles.contactInfo}>
            <Text style={{fontSize: 20, color: '#4D4D4D', fontWeight: 'bold'}}>
              {this.props.rowData.name}
            </Text>
            <Text style={{fontSize: 14, color: 'darkgray'}}>
              {this.props.rowData.contact}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contact: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
})






