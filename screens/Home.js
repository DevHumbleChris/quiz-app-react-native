import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Avatar } from "react-native-paper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

const categoryOptions = [
  {
    name: "Maths",
    iconName: "square-root-alt",
  },
  {
    name: "Sports",
    iconName: "volleyball-ball",
  },
  {
    name: "Music",
    iconName: "headphones",
  },
  {
    name: "Science",
    iconName: "flask",
  },
  {
    name: "History",
    iconName: "landmark",
  },
  {
    name: "Animals",
    iconName: "spider",
  },
  {
    name: "General Knowlegde",
    iconName: "lightbulb",
  },
  {
    name: "Video Games",
    iconName: "gamepad",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#6b5be2]`}>
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between`}>
          <View style={tw`my-2`}>
            <Text style={tw`text-white uppercase`}>Good Morning</Text>
            <Text style={tw`text-white text-2xl`}>Christopher Odhiambo</Text>
          </View>
          <Avatar.Image
            size={55}
            source={{
              uri: "https://avatars.githubusercontent.com/u/63234437?v=4",
            }}
          />
        </View>
        <View style={tw`bg-[#ffe0e6] p-2 rounded-2xl my-3`}>
          <View style={tw`flex-row justify-between shrink-0`}>
            <Text
              style={tw`bg-[#ff90a3] p-2 rounded-xl h-10 text-white text-center`}
            >
              Top Trivia
            </Text>
            <Image
              style={{
                height: 150,
                width: 150,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://ouch-cdn2.icons8.com/yl95m-QcjiuW9XcR-arZQN33e0eezIJIe0uKUqA2bMg/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDM5/L2U3Y2QwN2VkLWZm/OTktNGI1MS04NGZi/LWM2NmUzODZjYjY1/OS5zdmc.png",
              }}
            />
          </View>
          <View style={tw`absolute bottom-4 left-3`}>
            <Text style={tw`text-[#4b0d1a] text-lg`}>Travel Trivia Quiz</Text>
            <View>
              <Text style={tw`text-[#4b0d1a]`}>Music - 5 Quizzes</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`bg-white p-4 rounded-t-3xl flex-1`}>
        <View>
          <Text style={tw`text-xl mt-3 text-center`}>Choose Category</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-2 mb-6 `}>
            <View style={tw`my-3 flex-row flex-wrap`}>
              {categoryOptions.map((category, i) => {
                return (
                  <TouchableOpacity
                    style={tw`px-3 py-5 bg-[#e7e4f9] mb-3 rounded-xl mx-3 w-40 items-center`}
                    key={i}
                  >
                    <View style={tw`bg-white p-2 rounded-xl`}>
                      <FontAwesomeIcon
                        name={category.iconName}
                        size={35}
                        color="#6b5be2"
                      />
                    </View>
                    <Text style={tw`text-sm my-2 text-[#6a5adf]`}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
