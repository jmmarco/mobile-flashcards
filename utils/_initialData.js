import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:cards'

function setDummyData () {

  let dummyData = {}


    dummyData['firstEntry'] = {
          title: 'Blank',
          questions: [],
        }

  console.log(dummyData)

  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}


export function formatDataResults (results) {
  if (results === null) {
    setDummyData()
  }
}
