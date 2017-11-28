import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Button } from 'react-native'
import styles from '../utils/styles'
import { StackNavigator } from 'react-navigation'


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
    }
  }

  componentDidMount() {
    console.log("Setting state")
    this.setState({
      questionsLength: this.props.navigation.state.params.questions.length
    })
  }


  static navigationOptions = ({ navigation }) => {
    const { title, questions } = navigation.state.params


    return {
      title: 'Quiz',
      questions: questions
    }
  }

  next = () => {
    if (this.state.index < this.state.questionsLength - 1) {
      this.setState(function(prevState, props) {
        console.log(prevState, props)
        return {
          index: prevState.index + 1
        }
      })
    } else {
      alert("You're at the last card already.")
    }


  }



  render() {
    console.log(this.props)
    console.log(this.state)
    const questions = this.props.navigation.state.params.questions
    const questionsLength = this.props.navigation.state.params.questions.length
    const { index } = this.state
    const { navigation } = this.props

      return (

        <View style={styles.container}>
          <Text>{index + 1} / {this.state.questionsLength}</Text>
          <Text style={styles.question}>{questions[index].question}</Text>
          <Text style={styles.answer} onPress={() => navigation.navigate('Answer', questions[index].answer)}>Answer</Text>

          <TouchableOpacity style={styles.btnCorrect} onPress={this.correct}>
            <Text style={{color: 'white', textAlign: 'center'}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIncorrect} onPress={this.inCorrect}>
            <Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text>
          </TouchableOpacity>

          <Button onPress={this.next} title="Next" />
          <Button onPress={() => navigation.goBack()} title="Back" />
        </View>


      )


  } // End of Render

}
