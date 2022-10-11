import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Chip } from "react-native-paper";
import tw from "twrnc";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

export default function Quiz({ navigation, route: { params } }) {
  return (
    <SafeAreaView style={tw`p-3 flex-1 bg-[#6b5be2]`}>
      <View>
        <Text style={tw`text-white text-center text-xl mt-2`}>
          {params.name}
        </Text>
        <TouchableOpacity style={tw`absolute right-0 p-2 rounded-xl`} onPress={() => navigation.navigate('Home')}>
          <FontAwesomeIcon name="times-circle" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={tw`relative pt-1 my-3`}>
        <View style={tw`flex-row mb-2 items-center justify-between`}>
          <View>
            <View
              style={tw`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[#887aeb]`}
            >
              <Text style={tw`text-white`}>Progress</Text>
            </View>
          </View>
          <View style={tw`"text-right`}>
            <View style={tw`text-xs font-semibold inline-block text-pink-600`}>
              <Text style={tw`text-white`}>30%</Text>
            </View>
          </View>
        </View>
        <View
          style={tw`overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#887aeb]`}
        >
          <View style={{ width: "100%", backgroundColor: "white" }}>
            <Text
              styel={tw`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500`}
            ></Text>
          </View>
        </View>
      </View>
      <View style={tw`bg-white rounded-xl p-3`}>
        <View style={tw`mx-auto my-4`}>
          <Image
            source={{
              uri: params.artImage,
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
          <Text style={tw`my-3 text-lg`}>{params.quizes[0].question}</Text>
          {params.quizes[0].incorrect_answers.map((answer, i) => {
            return (
              <TouchableOpacity key={i} style={tw`p-2`}>
                <Chip onPress={() => console.log("Pressed")}>{answer}</Chip>
              </TouchableOpacity>
            );
          })}
          <View style={tw`flex-row justify-between my-3`}>
            <Button mode="contained">Back</Button>
            <Button mode="contained">Next</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}