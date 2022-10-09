import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Difficulty = ({ navigation, route}) => {
    console.log(route)
  return (
    <SafeAreaView>
      <Text>Difficulty</Text>
    </SafeAreaView>
  )
}

export default Difficulty