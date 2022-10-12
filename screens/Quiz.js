import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Chip } from "react-native-paper";
import tw from "twrnc";
import axios from "axios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Questions from "../componets/Questions";
import { useDispatch, useSelector } from "react-redux";
import { resetIndex } from "../store/slices/progressSlice";

export default function Quiz({ navigation, route: { params } }) {
  const currentProgressPercentage = useSelector(state => state.progress.currentProgressPercentage)
  const dispatch = useDispatch()
  const quitTrivia = () => {
    dispatch(resetIndex())
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={tw`p-3 flex-1 bg-[#6b5be2]`}>
      <View>
        <Text style={tw`text-white text-center text-xl mt-2`}>
          {params.name}
        </Text>
        <TouchableOpacity style={tw`absolute right-0 p-2 rounded-xl`} onPress={quitTrivia}>
          <FontAwesomeIcon name="times-circle" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={tw`relative pt-1 my-3`}>
        <View style={tw`flex-row mb-2 items-center justify-between`}>
          <View>
            <View
              style={tw`text-xs font-semibold py-1 px-2 uppercase rounded-full bg-[#887aeb]`}
            >
              <Text style={tw`text-white`}>Progress</Text>
            </View>
          </View>
          <View>
            <View style={tw`text-xs font-semibold text-pink-600`}>
              <Text style={tw`text-white`}>{currentProgressPercentage}</Text>
            </View>
          </View>
        </View>
        <View
          style={tw`overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#887aeb]`}
        >
          <View style={{ width: `${currentProgressPercentage}`, backgroundColor: "white" }}>
            <Text
              styel={tw`shadow-none flex flex-col text-center text-white justify-center bg-pink-500`}
            ></Text>
          </View>
        </View>
      </View>
      <Questions quizes={params.quizes} artImage={params.artImage} navigation={navigation} />
    </SafeAreaView>
  );
}
