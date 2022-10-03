import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Avatar } from 'react-native-paper'

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#6b5be2]`}>
      <View style={tw`p-4`}>

        <View style={tw`flex-row justify-between`}>
            <View style={tw`my-2`}>
                <Text style={tw`text-white uppercase`}>Good Morning</Text>
                <Text style={tw`text-white text-2xl`}>Christopher Odhiambo</Text>
            </View>
            <Avatar.Image size={55} source={{ uri: 'https://avatars.githubusercontent.com/u/63234437?v=4'}} />
        </View>
        <View style={tw`bg-[#ffe0e6] p-2 rounded-2xl my-3`}>
          <View style={tw`flex-row justify-between shrink-0`}>
          <Text style={tw`bg-[#ff90a3] p-2 rounded-xl h-10 text-white text-center`}>Top Trivia</Text>
          <Image
            style={{
              height: 150,
              width: 150,
              resizeMode: 'contain'
            }}
            source={{
              uri: 'https://ouch-cdn2.icons8.com/yl95m-QcjiuW9XcR-arZQN33e0eezIJIe0uKUqA2bMg/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDM5/L2U3Y2QwN2VkLWZm/OTktNGI1MS04NGZi/LWM2NmUzODZjYjY1/OS5zdmc.png'
            }}
          />
          </View>
          <View style={tw`absolute bottom-4 left-3`}>
            <Text style={tw`text-[#4b0d1a] text-lg`}>Travel Trivia Quiz</Text>
            <View>
              <Text style={tw`text-[#4b0d1a]`}>Music - 5 Quizzes</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`bg-white p-4 rounded-t-3xl flex-1`}>
            <View>
              <Text style={tw`text-lg mt-3`}>Top rank of the week</Text>
              <View style={tw`bg-[#6b5be2] p-4 rounded-2xl my-2`}>
                <View style={tw`flex-row items-center`}>
              <Avatar.Image size={55} source={{ uri: 'https://avatars.githubusercontent.com/u/63234437?v=4'}} />
              <View style={tw`mx-3`}>
                <Text style={tw`text-white font-bold`}>Brandon Matrovs</Text>
                <Text style={tw`text-white text-xs`}>120 points</Text>
              </View>
                </View>
              </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home