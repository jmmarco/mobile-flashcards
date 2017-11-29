import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, AsyncStorage } from 'react-native'
import { getDeckInfo } from '../utils/helpers'
import { connect } from 'react-redux'
import { submitEntry, removeEntry } from '../utils/api'
import { addEntry } from '../actions'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'

class NewDeckView extends Component {

  state = {
    title: 'Deck Title',
    questions: []
  }



  submit = () => {
    // alert("Hey a button was pressed!")
    // const key = this.state.title
    // const entry = this.state

    const { title, questions } = this.state


    // Save to "DB"
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (results !== null) {
        console.log('Data Found', results)
        currentData = JSON.parse(results)
        // currentData[key] = key
        currentData[title] = { title, questions }
        console.log(currentData)
        AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(currentData))
        AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
          console.log(JSON.parse(results))
        })
      }
    })

    // Navigate to home
    this.props.navigation.navigate('Home')
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
