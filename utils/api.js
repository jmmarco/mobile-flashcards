import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, formatDataResults } from './_initialData'

export function fetchDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDataResults)
}

export function submitEntry (entry, key) {
  alert("Fired", FLASHCARDS_STORAGE_KEY)
  console.log("Heloooooooooooo", FLASHCARDS_STORAGE_KEY)
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }), () => {
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
      console.log(result)
    })
  })
}

export function logger() {
  console.log(FLASHCARDS_STORAGE_KEY)
}
