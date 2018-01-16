import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'

import { chat } from 'App/Navigation/routes'

import styles from './styles'

class Home extends PureComponent {
  state = {
    userName: null,
    isNameEntered: false
  }

  componentDidMount() {
    this.setState({ userName: this.props.user, isNameEntered: !!this.props.user })
  }

  handleNextPress = () => {
    const { userName } = this.state
    const { onLogIn, navigation } = this.props

   
    onLogIn(userName)
    Keyboard.dismiss()
    navigation.navigate(chat)
    this.setState({ isNameEntered: true })
  }

  handleInputChange = userName => {
    this.setState({ userName })
  }

  handleButtonRender = () => {
    const { userName } = this.state
    const TouchableWrapper = userName ? TouchableOpacity : View
    
    return (
      <TouchableWrapper
              onPress={() => this.handleNextPress()}
              style={userName ? styles.button : [styles.button, styles.disabledButton] }
            >
              <Text style={styles.buttonText}>
                Have a chat >
              </Text>
        </TouchableWrapper>
      )
  }

  render() {
    const { userName, isNameEntered } = this.state

    if (userName && isNameEntered) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleName}>Hello, {userName}!</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
                onPress={() => this.setState({ isNameEntered: false })}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  Change the name
                </Text>
            </TouchableOpacity>
            {this.handleButtonRender()}
         </View>
        </View>
      )
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.input}
          placeholder={!userName ? 'John Smith' : ''}
          value={userName}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={this.handleInputChange}
        />
        {this.handleButtonRender()}
      </KeyboardAvoidingView>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  user: PropTypes.string,
  onLogIn: PropTypes.func
}

export default Home