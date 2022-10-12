import { View, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import SingleQuiz from "./SingleQuiz";
import { useDispatch, useSelector } from "react-redux";
import { incrementIndex, resetIndex } from "../store/slices/progressSlice";

export default function Questions({ artImage, navigation }) {
  const quizes = useSelector(state => state.progress.quizes)
  const index = useSelector(state => state.progress.index)
  const dispatch = useDispatch()
  const nextQuiz = () => {
    if (index === quizes.length - 1) {
      navigation.replace('Results')
      dispatch(resetIndex())
    } else {
      dispatch(incrementIndex())
    }
  };
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
        <SingleQuiz currentQuizIndex={index + 1} nextQuiz={nextQuiz} currentQuiz={quizes[index]} totalQuizes={quizes.length} />
      </View>
    </View>
  );
}
