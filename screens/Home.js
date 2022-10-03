import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Avatar } from 'react-native-paper'

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#6b5be2]`}>
        <View style={tw`flex-row justify-between p-4`}>
            <View>
                <Text style={tw`text-white`}>Good Morning</Text>
                <Text style={tw`text-white`}>Christopher Odhiambo</Text>
            </View>
            <Avatar.Image size={55} source={{ uri: 'https://avatars.githubusercontent.com/u/63234437?v=4'}} />
        </View>
    </SafeAreaView>
  )
}

export default Home