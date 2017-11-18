import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { getDeckInfo } from '../utils/helpers'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { addEntry } from '../actions'

class NewDeckView extends Component {

  state = {
    title: 'Deck Title',
    questions: []
  }

  submit = () => {
    const key = this.state.title
    const entry = this.state

    // Add Redux or just use local state..
    this.props.dispatch(addEntry({
      [key]: entry
    }))

    this.setState(() => ({
      title: 'Deck Title', questions: []
    }))
    console.log("What is key: ", key)
    console.log("What is entry: ", entry)
    console.log(key, entry)
    // Save to 'DB'
    saveDeckTitle({ key, entry })

    // Navigate to home
  }


  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddEntry'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: 'center'}} >What is the title of your new deck?</Text>
        <TextInput
          placeholder={this.state.title}
          editable={true}
          maxLength={140}
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
        />
        <TouchableOpacity style={styles.btn} onPress={this.submit}>
          <Text style={{color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

function mapStateToProps (state) {
  // Empty for now
}

export default connect()(NewDeckView)

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
