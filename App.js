import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Mobile Flashcards</Text>
        <MaterialCommunityIcons name='cards-outline' style={{color: 'deepskyblue'}} size={50}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 30,
  }
})
