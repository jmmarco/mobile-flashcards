import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Button } from 'react-native'
import styles from '../utils/styles'

export default class Question extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title, questions } = navigation.state.params

    return {
      title: title,
      questions: questions
    }
  }

  // constructor(props, context) {
  //   super(props, context)
  //   this._onForward = this._onForward.bind(this)
  // }

  // _onForward() {
  //   console.log(this.props.navigator)
  //   let nextIndex = ++this.props.index;
  //   this.props.navigator.push({
  //     // component: Question,
  //     title: 'Scene ' + nextIndex,
  //     passProps: {index: nextIndex}
  //   })
  // }


  render() {
    console.log(this.props)

    const questions = this.props.navigation.state.params.questions
    const { i, entry, navigation } = this.props

    return (
    <View>
      <Text> {1} / {questions.length}</Text>
      {/* <Text style={styles.question} key={i}>{entry.question}</Text> */}

      <TouchableOpacity style={styles.btnCorrect}>
        <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIncorrect}>
        <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
      </TouchableOpacity>

      <Button onPress={() => navigation.goBack(null)} title="Go back" />
      <Button
        onPress={this._onForward}
        title="Tap me to load the next Card"
      />
    </View>
    )
  }



}
