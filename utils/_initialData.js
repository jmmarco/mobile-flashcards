import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = '@MySuperStore:key'

export const initialFlashCards = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        quizzed: false
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        quizzed: false
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        quizzed: false
      }
    ]
  }
}


// let newEntry = {
//   Redux: {
//     title: 'Redux',
//     questions: [
//       {
//         question: 'What is Redux?',
//         answer: 'A container of things..'
//       },
//       {
//         question: 'What is the name of the main component used in Redux',
//         answer: 'Provider'
//       }
//     ]
//   },
//   redux: {
//     title: 'Redux',
//     questions: [
//       {
//         question: 'What is an action?',
//         answer: 'is a function that dispatches if that makes any sense'
//       },
//     ]
//   }
//
// }

export function saveDeckTitle() {
  // AsyncStorage.setItem(FLASHCARDS_STORAGE, JSON.stringify(flashCardsHolder), () => {
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE, JSON.stringify(newEntry), () => {
      AsyncStorage.getItem(FLASHCARDS_STORAGE, (err, result) => {
        console.log(JSON.parse(result))
      })

      console.log()
    });
  // });
}

export function initStorage () {
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialFlashCards), () => {
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
      console.log(JSON.parse(result))
    })
  })
  .then((response) => {
    response = true
    console.log("So far so good", response)
    // If all goes well signal that we're good!
    return response
  })
  .catch((error) => {
    // Otherwise output error to the console and return false
    console.log("Oops, something went wrong..", error)
    return error
  })
}






// function setDummyData () {
//
//   const value = await AsyncStorage.getItem('@MySuperStore:key');
//   if (value !== null) {
//     // We have data!!
//     console.log(value);
//
//   let dummyData = {}
//
//     dummyData['firstEntry'] = {
//           title: 'Blank',
//           questions: [],
//         }
//
//   console.log(dummyData)
//
//   AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))
//
//   return dummyData
// }
//
//
// export function formatDataResults (results) {
//   if (results === null) {
//     setDummyData()
//   }
// }
