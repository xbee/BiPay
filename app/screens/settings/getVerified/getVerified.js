import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Get verified',
  }

  goToDocument = (name) => {
    this.props.navigation.navigate("Document", {name})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.options}
          onPress={() => this.goToDocument("ID Document")}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              ID document
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.options}
          onPress={() => this.goToDocument("ID Selfie")}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              ID selfie
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.options}
          onPress={() => this.goToDocument("Proof Of Address")}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              Proof of address
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
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
  options: {
    padding: 20,
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsText: {
    flex: 1,
    fontSize: 18,
  },
  optionsIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})
