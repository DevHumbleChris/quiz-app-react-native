import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip,Button } from "react-native-paper";
import tw from "twrnc";
import { decode } from "html-entities";
import _ from 'lodash'

export default function SingleQuiz({
  currentQuiz,
  currentQuizIndex,
  totalQuizes,
  nextQuiz
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([])
  const [correctIndex, setCorrectIndex] = useState(null)
  const [answered, setAnswered] = useState(false)
  useEffect(() => {
    let newAnswers = [...currentQuiz.incorrect_answers, currentQuiz.correct_answer]
    const shuffledAnswers = _.shuffle(newAnswers)
    setCorrectIndex(shuffledAnswers.indexOf(currentQuiz.correct_answer))
    setAnswers(shuffledAnswers)
  }, [currentQuiz])
  return (
    <>
    <View>
      <Text style={tw`uppercase text-gray-500`}>
        Question {currentQuizIndex} of {totalQuizes}
      </Text>
      <Text style={tw`my-3 text-lg`}>{decode(currentQuiz.question)}</Text>
      {answers.map((answer, i) => {
        return (
          <TouchableOpacity key={i} style={tw`p-2`}>
            <Chip icon={selectedAnswer === answer ? 'check-all': ''} onPress={() => setSelectedAnswer(answer)}>{decode(answer)}</Chip>
          </TouchableOpacity>
        );
      })}
    </View>
    <View style={tw`my-3`}>
          <Button mode="contained" onPress={nextQuiz}>Next</Button>
        </View>
    </>
  );
}
