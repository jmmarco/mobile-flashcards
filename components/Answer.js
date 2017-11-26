import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../utils/styles'

export default class Answer extends Component {

  static navigationOptions = ({ navigation }) => {


    return {
      title: 'Answer goes here',
    }

  }

  render() {
    return (
      <View>
        <Text>Answer to card goes here.</Text>
      </View>
    )
  }

}
