import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Button, AsyncStorage, Alert } from 'react-native'
import styles from '../utils/styles'
import { StackNavigator } from 'react-navigation'
import { FLASHCARDS_STORAGE_KEY, initialFlashCards} from '../utils/_initialData'


// function Question({ question }){
//   return (
//     <View>
//       <Text> / {questions.length}</Text>
//       <Text style={styles.question}>{question}</Text>
//       <Text style={styles.answer} onPress={() => navigation.navigate('Answer')}>Answer</Text>
//       <TouchableOpacity style={styles.btnCorrect} onPress={this.correct}>
//         <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.btnIncorrect} onPress={this.inCorrect}>
//         <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

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
      alert("You're at the last card already.")
    }

  }

  correct = (index, title) => {
    // alert("Correct has been pressed")

    console.log(index, title)

    let currentScore = this.state.score
    this.setState((prevState, props) => ({
      scoreBoard: prevState.score + 1,
      answered: !prevState.answered
    }))

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (results !== null) {
        console.log('Data Found', results)
        currentData = JSON.parse(results)
        // currentData[title]['questions'].push(questions)
        console.log(currentData[title].questions[index].quizzed)
        currentData[title].questions[index].quizzed = true
        AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(currentData))
        AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
          console.log(JSON.parse(results))
        })
      }
    })




    console.log("Score is now: ", this.state.score)

  }

  incorrect = () => {

    let currentScore = this.state.score
    if (currentScore >= 0) {
      this.setState((prevState, props) => ({
        scoreBoard: prevState.score--,
        answered: !prevState.answered
      }))
    } else {
      // Alert.alert('Current score is 0.')
      Alert.alert(
        'Scoreboard is zero',
        `Scoreboard: ${this.state.scoreBoard}`,
        [
          {text: 'OK, I see it now..', onPress: () => console.log('OK Pressed')},
        ],
          { cancelable: false }
                )
    }

  }



  render() {
    console.log(this.props)
    console.log(this.state)
    const questions = this.props.navigation.state.params.questions
    const questionsLength = this.props.navigation.state.params.questions.length
    const { index, scoreBoard } = this.state
    const { navigation } = this.props
    const title = this.props.navigation.state.params.title

      return (

        <View style={styles.container}>
          <Text>Scoreboard: {scoreBoard} out of {this.state.questionsLength}</Text>
          <Text>Card: {index + 1} / {this.state.questionsLength}</Text>
          <Text style={styles.question}>{questions[index].question}</Text>
          <Text style={styles.answer} onPress={() => navigation.navigate('Answer', questions[index].answer)}>Answer</Text>

          { !questions[index].quizzed ? (
            <View>
              <TouchableOpacity style={styles.btnCorrect} onPress={this.correct.bind(this, index, title)}>
                <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnIncorrect} onPress={this.incorrect}>
                <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          ): (
            <View>
              <Text>You've already answered this question.</Text>
            </View>
          )}
          <Button onPress={this.next} title="Next" />
          <Button onPress={() => navigation.goBack()} title="Back" />
        </View>


      )


  } // End of Render

}
