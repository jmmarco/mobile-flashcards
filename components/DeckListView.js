import React, { Component } from 'react'
import { initStorage } from '../utils/_initialData'
import { View, TouchableOpacity, Text } from 'react-native'

export default class DeckListView extends Component {

  componentDidMount() {
    // Initialize Storage
    initStorage()
  }

  render() {
    return (
      <Text>This is the DeckListView Component</Text>
    )
  }

}
