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
  }
})
