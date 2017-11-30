import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'
import styles from '../utils/styles'

export default class NewQuestionView extends Component {

  constructor(props) {
  super(props)
    this.state = {
      question: 'Question goes here!',
      answer: 'Answer goes here!',
      deckTitle: '',
      quizzed: false
    }
  }


  static navigationOptions = ({ navigation }) => {
    const { deckId, title, questions } = navigation.state.params

    console.log("ind deck view ", navigation.state.params)

    return {
      title: 'Add Card',
      questions: questions
    }

  }

  componentDidMount() {
    this.setState({
      deckTitle: this.props.navigation.state.params.title
    })
  }


  addCard = (title, card) => {
    let currentData
    const { question, answer } = this.state
    console.log(question, answer)
    const questions = { question, answer }
    console.log(questions)
    title = this.state.deckTitle

    let object = {
      [title]: {
        'title': [title],
        'questions': questions
      },
    }

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (results !== null) {
        console.log('Data Found', results)
        currentData = JSON.parse(results)
        currentData[title]['questions'].push(questions)
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

  render() {

    const { title } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text>Please enter a question</Text>
        <TextInput style={styles.input} onChangeText={(question) => this.setState({
          question
        })} value={this.state.question}/>
        <Text>Enter an answer</Text>
        <TextInput style={styles.input} onChangeText={(answer) => this.setState({
          answer
        })} value={this.state.answer}/>
        <TouchableOpacity style={styles.btnBlack} onPress={this.addCard}>
          <Text style={{color: 'white', textAlign: 'center'}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }

}
