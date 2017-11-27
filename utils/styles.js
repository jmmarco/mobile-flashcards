import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    margin: 10,
  },
  btnBlack: {
    padding: 15,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 10,
  },
  btnWhite: {
    padding: 15,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2
  },
  btnIncorrect: {
    padding: 15,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'orangered',
    margin: 10,

  },
  btnCorrect: {
    padding: 15,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'limegreen',
    margin: 10,
  },
  question: {
    fontSize: 32,
    textAlign: 'center',
  },
  cardsLeft: {
    flex: 1,
    padding: 0,
    margin: 0,
    // flexDirection: 'row',
    // alignSelf: 'flex-start',
    // alignItems: 'flex-start',
  },
  answer: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.2,
    color: 'firebrick',
    textAlign: 'center',
    marginBottom: 20,
  },
  answerText: {
    fontSize: 18,
    letterSpacing: 0.2,
    textAlign: 'center',
    padding: 10,
  }
})
