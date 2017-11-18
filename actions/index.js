export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function recieveEntries (entries) {
  return {
    type: 'RECEIVE_ENTRIES',
    entries,
  }
}

export function addEntry (entry) {
  console.log('entry from action is: ', entry)
  return {
    type: 'ADD_ENTRY',
    entry
  }
}
