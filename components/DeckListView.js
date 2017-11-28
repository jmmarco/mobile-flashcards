import React, { Component } from 'react'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'
import { getDecks } from '../utils/api'
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native'
import IndividualDeckView from './IndividualDeckView'



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

    const { decks } = this.state

    console.log(this.state.decks)
    //
    // for (let i in this.state.decks) {
    //   console.log(this.state.decks[i])
    // }

    Object.keys(this.state.decks).map((key) => {
      console.log(typeof this.state.decks[key])
    })


    // decks.map((entry, i, array) => {
    //   console.log(entry, i, array)
    // })
    console.log(decks)

    if (this.state.firstLaunch && decks !== undefined) {
      return (

        <View>
          {Object.keys(decks).map((key, i) => {
            return (
              <TouchableOpacity style={styles.deck} key={i}
                onPress={() => this.props.navigation.navigate('Deck',
                  {
                    deckId: i,
                    title: decks[key].title,
                    questions: decks[key].questions
                  }
                )}>
                <Text style={styles.deckTitle}>{decks[key].title}</Text>
                <Text>{decks[key].questions.length} cards</Text>
              </TouchableOpacity>
            )
          })}
          {/* {decks.map((entry, i) => {
            return (
              <TouchableOpacity key={entry} style={styles.deck}
            onPress={() => this.props.navigation.navigate('Deck',
            {
            deckId: i,
            title: entry
            }
            )}>
            <Text style={styles.deckTitle}>{entry}</Text>
            <Text>{decks.length} cards</Text>
              </TouchableOpacity>
            )

          })} */}

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
