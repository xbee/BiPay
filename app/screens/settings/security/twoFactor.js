import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TwoFactor extends Component {
  static navigationOptions = {
    title: 'Two factor',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            You can manage two factor settings at https://www.rehive.com.
          </Text>
        </View>
        <View style={{ flex: 3 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  comment: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    paddingLeft: 30,
  },
  commentText: {
    fontSize: 16,
    textAlign: 'center',
  },
})
