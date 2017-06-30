import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default class Account extends Component {

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        <TextInput
          {...this.props}
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    padding: 15,
    paddingLeft: 0,
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: 'normal',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#4D4D4D',
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
})
