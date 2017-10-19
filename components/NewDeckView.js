import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { getDeckInfo } from '../utils/helpers'
import { addDeck } from '../utils/api'

export default class NewDeckView extends Component {

  state = {
    title: 'Deck Title',
    questions: []
  }

  handlePress = () => {
    alert(this.state.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder={this.state.title}
          editable={true}
          maxLength={140}
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
        />
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={{color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    margin: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'black',
  }
})
