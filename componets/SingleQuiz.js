import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, Button } from "react-native-paper";
import tw from "twrnc";
import { decode } from "html-entities";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProgressPercentage, setTotalQuizes } from "../store/slices/progressSlice";

export default function SingleQuiz({
  currentQuiz,
  currentQuizIndex,
  nextQuiz,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const dispatch = useDispatch()
  const totalQuizes = useSelector(state => state.progress.totalQuizes)
  const quizes = useSelector(state => state.progress.quizes)
  const currentProgressPercentage = useSelector(state => state.progress.currentProgressPercentage)
  console.log(currentProgressPercentage)
  useEffect(() => {
    let newAnswers = [
      ...currentQuiz.incorrect_answers,
      currentQuiz.correct_answer,
    ];
    const shuffledAnswers = _.shuffle(newAnswers);
    setCorrectIndex(shuffledAnswers.indexOf(currentQuiz.correct_answer));
    setAnswers(shuffledAnswers);
    dispatch(setTotalQuizes(quizes.length))
    dispatch(setCurrentProgressPercentage())
    setAnswered(false);
  }, [currentQuiz]);
  const submitAnswer = (answer) => {
    setSelectedAnswer(answer)
    setTimeout(() => {
      nextQuiz()
    }, 1500)
  }
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
              <Chip
                icon={selectedAnswer === answer ? "check-all" : ""}
                onPress={() => submitAnswer(answer)}
              >
                {decode(answer)}
              </Chip>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* <View style={tw`my-3`}>
        <Button disabled={!answered} mode="contained" onPress={nextQuiz}>
          Next
        </Button>
      </View> */}
    </>
  );
}
