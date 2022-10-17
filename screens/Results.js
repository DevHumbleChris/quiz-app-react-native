import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "html-entities";
import { resetIndex, resetUserResults } from "../store/slices/progressSlice";

export default function Results({ navigation }) {
  const userResults = useSelector((state) => state.progress.userResults);
  const dispatch = useDispatch()
  const percentageScore = useSelector(
    (state) => state.progress.score
  );
  const correctAnswers = userResults.filter(
    (result) => result.userResultsRemarks === "correct"
  );
  const incorrectAnswers = userResults.filter(
    (result) => result.userResultsRemarks === "incorrect"
  );
  const closeResultsScreen = () => {
    dispatch(resetUserResults())
    dispatch(resetIndex())
    navigation.navigate("Home")
  }
  return (
    <SafeAreaView style={tw`p-3 flex-1`}>
      <View>
        <Text style={tw`text-center text-xl mt-2`}>Good Job!</Text>
        <TouchableOpacity
          style={tw`absolute right-0 p-2 rounded-xl`}
          onPress={closeResultsScreen}
        >
          <FontAwesomeIcon name="times-circle" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`my-2`}>
        <View style={tw`bg-[#ff90a3] items-center my-3 p-4 rounded-xl`}>
          <Image
            style={{
              height: 350,
              width: 350,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://ouch-cdn2.icons8.com/c2Q9cSZ_qYyhsaWtRgOczja3ZaGr8sSa_yZADjhM7Rw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjg0/L2ZjZDZmMzVkLWMz/N2MtNGVjMC05ODMy/LWIyZDUwZjE2MDBi/ZS5zdmc.png",
            }}
          />
          <Text style={tw`text-white text-lg my-2`}>
            You got 80 Quiz points.
          </Text>
        </View>
        <View style={tw`p-2`}>
          <View style={tw`flex-row justify-between items-center my-4`}>
            <View>
              <Text style={tw`text-sm uppercase text-gray-500`}>
                Correct Answer
              </Text>
              <Text style={tw`text-lg uppercase text-[#6b5be2]`}>
                {correctAnswers.length} Questions
              </Text>
            </View>
            <View>
              <Text style={tw`text-sm uppercase text-gray-500`}>
                Score Gained
              </Text>
              <Text style={tw`text-lg uppercase text-[#6b5be2]`}>
                {percentageScore * 10}
              </Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <View>
              <Text style={tw`text-sm uppercase text-gray-500`}>
                Incorrect Answer
              </Text>
              <Text style={tw`text-lg uppercase text-[#6b5be2]`}>
                {incorrectAnswers.length} Questions
              </Text>
            </View>
            <View>
              <Text style={tw`text-sm uppercase text-gray-500`}>
                Points Gained
              </Text>
              <Text style={tw`text-lg uppercase text-[#6b5be2]`}>80</Text>
            </View>
          </View>
          <View style={tw`my-2`}>
            <Text style={tw`text-sm uppercase text-gray-500`}>
              Detailed Results
            </Text>
            <View style={tw`bg-[#e7e4f9] p-3 my-3 rounded-xl`}>
              {userResults.map((result, i) => {
                return (
                  <View
                    style={tw`my-2 flex-row items-center justify-between space-x-2`}
                  >
                    <Text style={tw`bg-white text-[#6b5be2] p-2 rounded-full`}>
                      {i + 1}
                    </Text>
                    <View>
                      <View style={tw`p-1 w-58`}>
                        <Text>{decode(result.question)}</Text>
                        <View style={tw`flex-row items-center`}>
                          <Text style={tw`text-gray-500`}>Ans:</Text>
                          <Text style={tw`text-green-700 mx-2`}>
                            {decode(result.correct_answer)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <FontAwesomeIcon
                      name={
                        result.userResultsRemarks === "correct"
                          ? "check-circle"
                          : "times-circle"
                      }
                      size={25}
                      color={
                        result.userResultsRemarks === "correct" ? "green" : "red"
                      }
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={tw`mt-auto mb-3 flex-row justify-between items-center`}>
        <TouchableOpacity style={tw`bg-[#6b5be2] rounded-xl p-2 w-3/4`} onPress={closeResultsScreen}>
          <Text style={tw`text-center text-white text-lg`}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-white border-2 border-[#e9e8fb] rounded-xl p-2`}
        >
          <FontAwesomeIcon name="share-alt" size={25} color="#6b5be2" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
