import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Avatar } from "react-native-paper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { setQuizes } from "../store/slices/progressSlice";
import { useDispatch } from "react-redux";

const categoryOptions = [
  {
    name: "Maths",
    iconName: "square-root-alt",
    artImage: 'https://ouch-cdn2.icons8.com/aGUQwdaVOw-YuC-YAd10XtNNMi_8Nv0zr_G64w6pQGA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzcv/YzYzOTNlZmMtMTRl/MS00YzRiLTk5NTct/ZDU1NWUxMjNiZmEy/LnN2Zw.png',
    category: 19
  },
  {
    name: "Sports",
    iconName: "volleyball-ball",
    artImage: 'https://ouch-cdn2.icons8.com/uwjs86tsBwFu_A-QHe0y8tSN7c0CExaL6v9gGJvvDhg/rs:fit:256:482/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTUz/Lzc4MjA0OWIwLTM4/MmItNGFhYi1iZmNk/LTIxNjg4NjRmNDMx/Zi5wbmc.png',
    category: 21
  },
  {
    name: "Music",
    iconName: "headphones",
    artImage: 'https://ouch-cdn2.icons8.com/bmh7bFhZflURB1E_rJ_yesld5LLsGTwGWOTfQ2CmKiw/rs:fit:256:291/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI0/Lzc0MWVkMWM4LWJj/MGQtNDM0ZC05ZmI1/LTc5NDFhYTVjNzRh/YS5wbmc.png',
    category: 12
  },
  {
    name: "Science",
    iconName: "flask",
    artImage: 'https://ouch-cdn2.icons8.com/tKSn64YPQRspDqKEtYQflqhv_ALoQUlLP-yC0WjUKY8/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzk0/L2QyZTBlZTcwLTM1/MjAtNGYyNi05Y2U5/LTMwZDE3OWU1ODc3/YS5wbmc.png',
    category: 17
  },
  {
    name: "History",
    iconName: "landmark",
    artImage: 'https://ouch-cdn2.icons8.com/-vVVU0ytD19Goilrknwy2AvD8Hdl5hOd0QA_Dfj18ds/rs:fit:256:162/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE3/LzQ4NmM0ZmJmLTQ0/MWItNDlkOS05NzE1/LTJmYjgxNzQ5Zjg4/OS5wbmc.png',
    category: 23
  },
  {
    name: "Animals",
    iconName: "spider",
    artImage: 'https://ouch-cdn2.icons8.com/Q_OjCVXGw8kIpafKhKOhv4BXE2ovEdo1GQfDJ-S39pE/rs:fit:256:193/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTAz/LzZlMDFkMjc3LTZm/ZmItNGIxNS1iZGRl/LWEyNzdlMzg4NzIx/ZS5wbmc.png',
    category: 27
  },
  {
    name: "General Knowlegde",
    iconName: "lightbulb",
    artImage: 'https://ouch-cdn2.icons8.com/12juZxqBP3K8ih2bmpllngnZ--Y83-HroshN0We8V14/rs:fit:256:262/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjMx/LzA3ZWRhMWU4LTFi/ODctNGE5Mi1iZjky/LTRmOWRlNzE0M2Iw/OS5zdmc.png',
    category: 9
  },
  {
    name: "Video Games",
    iconName: "gamepad",
    artImage: 'https://ouch-cdn2.icons8.com/adCnEx-6s5l1DLVdECzZU6s5Z33giMBMc8-hm9i_SV4/rs:fit:256:208/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTMy/Lzc0ZDliMzhlLWYx/OTUtNGJjMC1hNGI2/LWJhNTM2ZWM1YmZi/MS5wbmc.png',
    category: 15
  },
  {
    name: "Books",
    iconName: "book-open",
    artImage: 'https://ouch-cdn2.icons8.com/5IKTAFpyah1B7NZzxao5wlJrmGPGMI_ggeJOT52bFek/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODY5/LzlkODdjYmQ4LWNi/M2YtNGQ2OS05OTlh/LWI0NjE3YTc0MGE0/ZS5zdmc.png',
    category: 10
  },
  {
    name: "Computers",
    iconName: "desktop",
    artImage: 'https://ouch-cdn2.icons8.com/0tbdvf2KvOdquz8ASIaOIuOQ5lwXpb-7JREPgmJp31Y/rs:fit:256:171/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzU4/LzNlZjRiZDE0LTU5/NmItNDRlZS04Nzc3/LWM0OTg1MTVmMDUw/My5wbmc.png',
    category: 18
  },
  {
    name: "Cartoons",
    iconName: "user-astronaut",
    artImage: 'https://ouch-cdn2.icons8.com/ektaP1vM9UsuG8dFxlGB-VFZh12-agAXZ4TKa6KIQ_s/rs:fit:256:269/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDgz/L2QzMTUwNWNiLTEw/NTAtNGI3NC05NDg5/LWJkZGUwMGQ1NmE0/MC5zdmc.png',
    category: 32
  },
  {
    name: "Politics",
    iconName: "vihara",
    artImage: 'https://ouch-cdn2.icons8.com/MtZ149ousIjnuNl5dt4z-grsFTz35z4iZQw9ThFwcbE/rs:fit:256:327/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTgy/L2Q0N2QzNzYxLTFh/YTQtNDA1NC1hYmY4/LTFhZjM4ZTc4M2Rj/Mi5wbmc.png',
    category: 24
  },
];
const currentHour = new Date().getHours()
const timeData = [
  { hour: 22, message: 'Working Late!'},
  { hour: 18, message: 'Good Evening!'},
  { hour: 12, message: 'Good Afternoon!'},
  { hour: 5, message: 'Good Morning!'},
  { hour: 0, message: 'Whoa, Early Bird!'}
]

const Home = ({ navigation }) => {
  const selectDifficulty = (category) => {
    navigation.navigate('Difficulty', category)
  }
  const dispatch = useDispatch()
  const [timeOfDay, setTimeOfDay] = useState('')
  useEffect(() => {
    for (let i = 0; i < timeData.length; i++) {
      if (currentHour >= timeData[i].hour) {
        setTimeOfDay(timeData[i].message)
        break;
      }
    }
  }, [timeOfDay])
  const startRandomTrivia = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple'
    const resp = await axios.get(url)
    const respData = resp.data.results;
    if (respData.length > 0) {
      setTimeout(() => {
        dispatch(setQuizes(respData))
        navigation.replace("Quiz", {
          name: 'Random Trivia',
          artImage: 'https://ouch-cdn2.icons8.com/5l3cpKFyCb5BPpuDtW1vsB5StASp8zNF6AlXX1tnr8Q/rs:fit:256:353/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjc1/LzQ4MDUwMGE2LWNk/OGQtNDk4My05OGU2/LTU2ZjEyZGIzODdl/Ni5wbmc.png',
          quizes: respData
        });
      }, 1500);
    } else {
      alert('hello')
    }
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-[#6b5be2]`}>
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between`}>
          <View style={tw`my-2`}>
            <Text style={tw`text-white uppercase`}>{ timeOfDay }</Text>
            <Text style={tw`text-white text-2xl`}>Christopher Odhiambo</Text>
          </View>
          <Avatar.Image
            size={55}
            source={{
              uri: "https://avatars.githubusercontent.com/u/63234437?v=4",
            }}
          />
        </View>
        <TouchableOpacity onPress={startRandomTrivia} style={tw`bg-[#ffe0e6] p-2 rounded-2xl my-3`}>
          <View style={tw`flex-row justify-between shrink-0`}>
            <Text
              style={tw`bg-[#ff90a3] p-2 rounded-xl h-10 text-white text-center`}
            >
              Random Trivia
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
            <Text style={tw`text-[#4b0d1a] text-lg`}>Test Your Trivia Skills</Text>
            <View>
              <Text style={tw`text-[#4b0d1a]`}>10 Quizzes</Text>
            </View>
          </View>
        </TouchableOpacity>
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
