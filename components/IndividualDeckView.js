import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default class IndividualDeckView extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deckId, title } = navigation.state.params

    return {
      title: title
    }
  }
  render() {
    const { deckId } = this.props.navigation.state.params
    console.log(deckId)
    return (
      <View>
        <Text>This is the IndividualDeckView Component - Deck id:{deckId}</Text>
      </View>
    )
  }

}
