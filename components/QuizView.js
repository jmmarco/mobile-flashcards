import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Button, AsyncStorage, Alert } from 'react-native'
import styles from '../utils/styles'
import { StackNavigator } from 'react-navigation'
import {
  FLASHCARDS_STORAGE_KEY,
  initialFlashCards,
  clearLocalNotification,
  setLocalNotification
} from '../utils/_initialData'

export default class QuizView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questionsLength: 0,
      scoreBoard: 0,
      score: 0,
      answered: false,
    }
  }

  componentDidMount() {
    console.log("Setting state")
    this.setState({
      questionsLength: this.props.navigation.state.params.questions.length
    })
    // Signal that we already studied for today
    this.props.navigation.state.params.refresh()
    clearLocalNotification()
      .then(setLocalNotification)
  }


  static navigationOptions = ({ navigation }) => {
    const { title, questions, reminder } = navigation.state.params


    return {
      title: 'Quiz',
      questions: questions,
      reminder: reminder
    }
  }

  next = () => {

    if (this.state.index < this.state.questionsLength - 1) {
      this.setState(function(prevState, props) {
        console.log(prevState, props)
        return {
          index: prevState.index + 1,
          answered: false
        }
      })
    } else {
      Alert.alert(
        `You're at the last card already.`,
        ``, [
          { text: 'OK, I see it now..', onPress: () => console.log('OK Pressed') },
        ], { cancelable: false }
      )
    }

  }

  previous = () => {
    const { index, questionsLength } = this.state
    if (index > 0) {
      this.setState(function(prevState, props) {
        console.log(prevState, props)
        return {
          index: prevState.index - 1,
        }
      })
    } else {
      Alert.alert(
        `You're at the begining card.`,
        ``, [
          { text: 'OK, I see it now..', onPress: () => console.log('OK Pressed') },
        ], { cancelable: false }
      )
    }
  }

  correct = (index, title) => {
    let currentScore = this.state.score
    this.setState((prevState, props) => ({
      scoreBoard: prevState.scoreBoard + 1,
      answered: !prevState.answered
    }))

  }

  incorrect = () => {

    let currentScore = this.state.score
    if (currentScore >= 0) {
      this.setState((prevState, props) => ({
        scoreBoard: prevState.scoreBoard,
        answered: !prevState.answered
      }))
    } else {
      Alert.alert(
        'Scoreboard is zero',
        `Scoreboard: ${this.state.scoreBoard}`, [
          { text: 'OK, I see it now..', onPress: () => console.log('OK Pressed') },
        ], { cancelable: false }
      )
    }
  }


  render() {

    const questions = this.props.navigation.state.params.questions
    const questionsLength = this.props.navigation.state.params.questions.length
    const { index, scoreBoard, answered } = this.state
    const { navigation } = this.props
    const title = this.props.navigation.state.params.title

    return (

      <View style={styles.container}>
        <Text>Scoreboard: {scoreBoard} out of {this.state.questionsLength}</Text>
        <Text>Card: {index + 1} / {this.state.questionsLength}</Text>
        <Text style={styles.question}>{questions[index].question}</Text>
        <Text style={styles.answer} onPress={() => navigation.navigate('Answer', questions[index].answer)}>Answer</Text>

        { !answered ? (
          <View>
            <TouchableOpacity style={styles.btnCorrect} onPress={this.correct.bind(this, index, title)}>
              <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnIncorrect} onPress={this.incorrect}>
              <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        ): (
          <View style={styles.answered}>
            <Text>You've already answered this question.</Text>
          </View>
        )}
        <Button onPress={this.next} title="Next" />
        {/* {this.props.navigation.state.params.refresh()} */}
        <Button onPress={this.previous} title="Back" />
        </View>

    )


  } // End of Render

}
