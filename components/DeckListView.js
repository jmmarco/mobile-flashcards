import React, { Component } from 'react'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'
import { View, TouchableOpacity, Text } from 'react-native'
import { AsyncStorage } from 'react-native'

export default class DeckListView extends Component {

  constructor() {
    super()
    this.state = {
      firstLaunch: null
    }
  }

  componentDidMount() {
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialFlashCards), () => {
      AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
        console.log(JSON.parse(result))
      })
    })
    .then((response) => {
      // There's no response, but if we're here the storage has been succesfully set!
      this.setState({ firstLaunch: true })
    })
    .catch((error) => {
      // Otherwise output error to the console
      console.log("Oops, something went wrong..", error)
    })
  }


  render() {
    if (this.state.firstLaunch) {
      return (
        <View>
          <Text>{JSON.stringify(this.state.firstLaunch)}</Text>
          <Text>This is the DeckListView with AsyncStorage initialized!</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>{JSON.stringify(this.state.firstLaunch)}</Text>
          <Text>This is the DeckListView Component ---!</Text>
        </View>
      )
    }

    // return (
    //   <Text>This is the DeckListView Component</Text>
    // )
  }

}
