import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import NewDeckView from './components/NewDeckView'
import DeckListView from './components/DeckListView'
import { TabNavigator } from 'react-navigation'
import { mediumSeaGreen, white } from './utils/colors'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

function FlashCardStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    },
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add' size={30} color={tintColor} />
    },
  },

}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? mediumSeaGreen : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : mediumSeaGreen,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    var store = createStore(reducer)
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={mediumSeaGreen} barStyle='light-content'/>
          <Tabs/>
        </View>
      </Provider>
    )
  }
}

/*
Noooo
ReactDOM.render(
 <Provider store={createStore(reducers)}>
   <App/>
 </Provider>,
 document.getElementById('root')
)


Yessss
var store = createStore(reducers);
ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
 document.getElementById('root')
)

*/
