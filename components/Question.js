import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../utils/styles'

export default class Question extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title, questions } = navigation.state.params

    return {
      title: title,
      questions: questions
    }

  }


  render() {
    console.log(this.props)
    const { i, questions, entry } = this.props

    return (
    <View>
      <Text> {i + 1} / {questions.length}</Text>
      <Text style={styles.question} key={i}>{entry.question}</Text>

      <TouchableOpacity style={styles.btnCorrect} onPress={this.correct}>
        <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIncorrect} onPress={this.inCorrect}>
        <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
      </TouchableOpacity>
    </View>
    )
  }



}
