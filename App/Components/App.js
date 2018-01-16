import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import createStore from 'App/Redux'
import Navigation from 'App/Navigation'

import { Loading } from 'App/Components/Blocks'

const { persistor, store } = createStore()

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={<Loading />}
          persistor={persistor}
        >
         <Navigation />
       </PersistGate>
      </Provider>
    )
  }
}

export default App
