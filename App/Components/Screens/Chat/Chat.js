import React, { PureComponent } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Backend from 'App/Services/Firebase'

import styles from './styles'

class Chat extends PureComponent {
  state = {
    messages: []
  }

  componentDidMount() {
    Backend.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        }
      })
    })
  }

  componentWillUnmount() {
    Backend.closeChat()
  }

  render() {
    const { user } = this.props

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => Backend.sendMessage(message)}
        user={{
          _id: Backend.getUid(),
          name: user
        }}
      />
    )
  }
}

Chat.propTypes = {
  user: PropTypes.string
}

export default Chat