import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

export default class Account extends Component {

  render() {
    return (
      <TouchableHighlight
        style={styles.options}
        onPress={() => this.props.getCurrencies(this.props.reference)}>
        <View style={styles.optionsElement}>
          <View style={styles.icon}>
            <Image
              source={require('./../../assets/icons/placeholder.png')}
              style={{height:40, width:40}}
            />
          </View>
          <View style={styles.type}>
            <Text style={{ fontSize: 22, color: '#4D4D4D' }}>
              {this.props.name}
            </Text>
            <Text style={{ fontSize: 13, color: '#4D4D4D' }}>
              {this.props.reference}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  options: {
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  optionsElement: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  type: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})
