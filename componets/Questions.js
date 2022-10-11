import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Chip, Button } from "react-native-paper";
import SingleQuiz from "./SingleQuiz";

export default function Questions({ quizes, artImage }) {
  const [quiz, setQuiz] = useState(null);
  const [index, setIndex] = useState(0)
  const nextQuiz = () => {
    setIndex(index + 1)
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
