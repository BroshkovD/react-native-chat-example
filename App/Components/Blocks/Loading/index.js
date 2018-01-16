import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  )
}

export { Loading }