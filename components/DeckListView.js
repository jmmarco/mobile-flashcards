import React, { Component } from 'react'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards } from '../utils/_initialData'
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native'
import IndividualDeckView from './IndividualDeckView'
import styles from '../utils/styles'

export default class DeckListView extends Component {

  constructor() {
    super()
    this.state = {
      date: null,
      firstLaunch: null,
      decks: [],
      reminder: true
    }
  }

  componentDidMount() {

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialFlashCards), () => {
      AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
        this.setState({ decks: JSON.parse(results) })
      })
    }).then((response) => {
      // There's no response, but if we're here the storage has been succesfully set!
      // Set the initial state
      this.setState({ firstLaunch: true, date: new Date().toDateString() })
    }).catch((error) => {
      // Otherwise output error to the console
      console.log("Oops, something went wrong..", error)
    })

  }

  refreshDeckListView = () => {
    this.setState((prevState, props) => ({
      reminder: !prevState.reminder
    }))
  }

  render() {

    const { decks, reminder, date } = this.state

    if (this.state.firstLaunch && decks !== undefined) {
      return (<View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1
      }}>
        {
          Object.keys(decks).map((key, i) => {
            return (<TouchableOpacity style={styles.deck} key={i} onPress={() => this.props.navigation.navigate('Deck', {
                deckId: i,
                title: decks[key].title,
                questions: decks[key].questions,
                refresh: this.refreshDeckListView
            })}>
              <Text style={styles.deckTitle}>{decks[key].title}</Text>
              {
                decks[key].questions.length > 0
                  ? (<Text>{decks[key].questions.length} cards</Text>)
                  : (<Text>0 cards</Text>)
              }
            </TouchableOpacity>)
          })
        }

        {

          reminder && date === new Date().toDateString()
            ? <Text style={{textAlign: 'center'}}>👋 Don't forget to study today!</Text>
            : <Text style={{textAlign: 'center'}}>👍 You've already studied for today!</Text>
        }

      </View>)

    } else {
      return (<View>
        <Text>{JSON.stringify(this.state.firstLaunch)}</Text>
        <Text>Something went wrong..</Text>
      </View>)
    }

  }

}
