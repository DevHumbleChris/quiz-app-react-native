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
    artImage: 'https://ouch-cdn2.icons8.com/aGUQwdaVOw-YuC-YAd10XtNNMi_8Nv0zr_G64w6pQGA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzcv/YzYzOTNlZmMtMTRl/MS00YzRiLTk5NTct/ZDU1NWUxMjNiZmEy/LnN2Zw.png'
  },
  {
    name: "Sports",
    iconName: "volleyball-ball",
    artImage: 'https://ouch-cdn2.icons8.com/uwjs86tsBwFu_A-QHe0y8tSN7c0CExaL6v9gGJvvDhg/rs:fit:256:482/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTUz/Lzc4MjA0OWIwLTM4/MmItNGFhYi1iZmNk/LTIxNjg4NjRmNDMx/Zi5wbmc.png'
  },
  {
    name: "Music",
    iconName: "headphones",
    artImage: 'https://ouch-cdn2.icons8.com/bmh7bFhZflURB1E_rJ_yesld5LLsGTwGWOTfQ2CmKiw/rs:fit:256:291/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI0/Lzc0MWVkMWM4LWJj/MGQtNDM0ZC05ZmI1/LTc5NDFhYTVjNzRh/YS5wbmc.png'
  },
  {
    name: "Science",
    iconName: "flask",
    artImage: 'https://ouch-cdn2.icons8.com/tKSn64YPQRspDqKEtYQflqhv_ALoQUlLP-yC0WjUKY8/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzk0/L2QyZTBlZTcwLTM1/MjAtNGYyNi05Y2U5/LTMwZDE3OWU1ODc3/YS5wbmc.png'
  },
  {
    name: "History",
    iconName: "landmark",
    artImage: 'https://ouch-cdn2.icons8.com/-vVVU0ytD19Goilrknwy2AvD8Hdl5hOd0QA_Dfj18ds/rs:fit:256:162/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE3/LzQ4NmM0ZmJmLTQ0/MWItNDlkOS05NzE1/LTJmYjgxNzQ5Zjg4/OS5wbmc.png'
  },
  {
    name: "Animals",
    iconName: "spider",
    artImage: 'https://ouch-cdn2.icons8.com/Q_OjCVXGw8kIpafKhKOhv4BXE2ovEdo1GQfDJ-S39pE/rs:fit:256:193/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTAz/LzZlMDFkMjc3LTZm/ZmItNGIxNS1iZGRl/LWEyNzdlMzg4NzIx/ZS5wbmc.png'
  },
  {
    name: "General Knowlegde",
    iconName: "lightbulb",
    artImage: 'https://ouch-cdn2.icons8.com/12juZxqBP3K8ih2bmpllngnZ--Y83-HroshN0We8V14/rs:fit:256:262/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjMx/LzA3ZWRhMWU4LTFi/ODctNGE5Mi1iZjky/LTRmOWRlNzE0M2Iw/OS5zdmc.png'
  },
  {
    name: "Video Games",
    iconName: "gamepad",
    artImage: 'https://ouch-cdn2.icons8.com/adCnEx-6s5l1DLVdECzZU6s5Z33giMBMc8-hm9i_SV4/rs:fit:256:208/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTMy/Lzc0ZDliMzhlLWYx/OTUtNGJjMC1hNGI2/LWJhNTM2ZWM1YmZi/MS5wbmc.png'
  },
];

const Home = ({ navigation }) => {
  const selectDifficulty = (category) => {
    navigation.navigate('Difficulty', category)
  }
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
                    onPress={() => selectDifficulty(category)}
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
