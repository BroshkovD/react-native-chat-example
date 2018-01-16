import { StackNavigator } from 'react-navigation'

import Home from 'App/Components/Screens/Home'
import Chat from 'App/Components/Screens/Chat'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: { backgroundColor: '#fff' }
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: () => ({
      title: 'Chat',
      headerStyle: { backgroundColor: '#fff' }
    })
   }
});