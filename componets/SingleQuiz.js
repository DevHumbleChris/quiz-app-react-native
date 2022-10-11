import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Chip } from "react-native-paper";
import tw from "twrnc";
import { decode } from "html-entities";

export default function SingleQuiz({
  currentQuiz,
  currentQuizIndex,
  totalQuizes,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  return (
    <View>
      <Text style={tw`uppercase text-gray-500`}>
        Question {currentQuizIndex} of {totalQuizes}
      </Text>
      <Text style={tw`my-3 text-lg`}>{decode(currentQuiz.question)}</Text>
      {currentQuiz.incorrect_answers.map((answer, i) => {
        return (
          <TouchableOpacity key={i} style={tw`p-2`}>
            <Chip icon={selectedAnswer === answer ? 'check-all': ''} onPress={() => setSelectedAnswer(answer)}>{answer}</Chip>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
