import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import styles from '../utils/styles'
import { StackNavigator } from 'react-navigation'


function Question({ question }){
  return (
    <View>
      <Text> / {question.length}</Text>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.answer} onPress={() => navigation.navigate('Answer')}>Answer</Text>
      <TouchableOpacity style={styles.btnCorrect} onPress={this.correct}>
        <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIncorrect} onPress={this.inCorrect}>
        <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class QuizView extends Component {


  static navigationOptions = ({ navigation }) => {
    const { title, questions } = navigation.state.params

    return {
      title: 'Quiz',
      questions: questions
    }
  }



  render() {
    const currentQuestionIndex = 0
    const questions = this.props.navigation.state.params.questions
    const questionsLength = this.props.navigation.state.params.questions.length

    const { navigation } = this.props

      return (

        // <FlatList renderItem={({ question }) => <Text>{question}</Text>}/>
        <ScrollView>
          {questions.map(({ question }) =>  <Question question={question}/> )}
        </ScrollView>

      )


  } // End of Render

}
