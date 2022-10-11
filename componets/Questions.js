import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Chip, Button } from 'react-native-paper'

export default function Questions({ quizes, artImage }) {
  return (
    <View style={tw`bg-white rounded-xl p-3`}>
        <View style={tw`mx-auto my-4`}>
          <Image
            source={{
              uri: artImage,
            }}
            style={{
              height: 200,
              width: 200,
              resizeMode: "contain",
            }}
          />
        </View>
        <View>
          <Text style={tw`uppercase text-gray-500`}>Question 9 of 10</Text>
          <Text style={tw`my-3 text-lg`}>{quizes[0].question}</Text>
          {quizes[0].incorrect_answers.map((answer, i) => {
            return (
              <TouchableOpacity key={i} style={tw`p-2`}>
                <Chip onPress={() => console.log("Pressed")}>{answer}</Chip>
              </TouchableOpacity>
            );
          })}
          <View style={tw`my-3`}>
            <Button mode="contained">Next</Button>
          </View>
        </View>
      </View>
  )
}