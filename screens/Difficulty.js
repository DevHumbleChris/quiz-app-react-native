import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { Button, RadioButton } from "react-native-paper";
import axios from "axios";

const Difficulty = ({ navigation, route: { params } }) => {
  const [difficulties, setDifficulties] = useState([
    { level: "Easy" },
    { level: "Medium" },
    { level: "Hard" },
  ]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const startQuiz = async () => {
    setLoadingQuiz(true);
    if (!selectedLevel) {
      alert("Level Required");
    } else {
      const url = `https://opentdb.com/api.php?amount=10&category=${
        params.category
      }&difficulty=${selectedLevel.toLowerCase()}&type=multiple`;
      console.log(url)
      const resp = await axios.get(url);
      const respData = resp.data.results;
      if (respData.length > 0) {
        setTimeout(() => {
          setLoadingQuiz(false);
          navigation.replace("Quiz", {
            name: params.name,
            artImage: params.artImage,
            quizes: respData
          });
        }, 1500);
      } else {
        alert('is null')
        setLoadingQuiz(false);
      }
    }
  };
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <View style={tw``}>
        <Text style={tw`text-center text-xl`}>{params.name}</Text>
        <TouchableOpacity
          style={tw`absolute`}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon name="chevron-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw`my-4 items-center`}>
        <Image
          style={{
            height: 300,
            width: 300,
            resizeMode: "contain",
          }}
          source={{
            uri: params.artImage,
          }}
        />
        <View style={tw`my-3 bg-white w-full p-4 rounded-xl`}>
          <Text style={tw`text-xl text-center`}>Choose your level</Text>
          <View style={tw`my-5`}>
            {difficulties.map((difficulty, i) => {
              return (
                <RadioButton.Group
                  key={i}
                  onValueChange={(value) => setSelectedLevel(value)}
                  value={selectedLevel}
                >
                  <View style={tw`flex-row items-center`}>
                    <RadioButton value={difficulty.level} />
                    <Text>{difficulty.level}</Text>
                  </View>
                </RadioButton.Group>
              );
            })}
            <Button
              loading={loadingQuiz}
              mode="contained"
              style={tw`mt-2`}
              onPress={startQuiz}
            >
              Start
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Difficulty;
