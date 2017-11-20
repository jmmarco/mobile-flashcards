import React, { Component } from 'react'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'
import { getDecks } from '../utils/api'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AsyncStorage } from 'react-native'

export default class DeckListView extends Component {

  constructor() {
    super()
    this.state = {
      firstLaunch: null,
      decks: []
    }
  }

  componentDidMount() {
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialFlashCards), () => {
      AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
        this.setState({
          decks: JSON.parse(results)
        })
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

    const decks = Object.keys(this.state.decks)

    decks.map((entry) => {
      console.log(entry)
    })

    if (this.state.firstLaunch && decks.length > 0) {
      return (

        <View>
          {decks.map((entry) => {
            return (
              <TouchableOpacity key={entry} style={styles.deck}>
                <Text style={styles.deckTitle}>{entry}</Text>
                <Text>{decks.length} cards</Text>
              </TouchableOpacity>
            )

          })}

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


  }

}

const styles = StyleSheet.create({
  deck: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 18,
    letterSpacing: 1,
  }

})
