import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../utils/styles'

export default class Answer extends Component {

  static navigationOptions = ({ navigation }) => {


    return {
      title: 'Answer',
    }

  }

  render() {
    console.log(this.props)
    const answer = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.answerText}>{answer}</Text>
      </View>

    )
  }

}
