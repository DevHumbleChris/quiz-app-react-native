import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import tw from "twrnc";

export default function Results({ navigation }) {
  return (
    <SafeAreaView style={tw`p-3 flex-1`}>
      <View>
        <Text style={tw`text-center text-xl mt-2`}>Good Job!</Text>
        <TouchableOpacity
          style={tw`absolute right-0 p-2 rounded-xl`}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesomeIcon name="times-circle" size={25} color="black" />
        </TouchableOpacity>
      </View>
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
        <Text style={tw`text-white text-lg my-2`}>You got 80 Quiz points.</Text>
      </View>
      <View style={tw`p-2`}>
        <View style={tw`flex-row justify-between items-center my-4`}>
          <View>
            <Text style={tw`text-sm uppercase text-gray-500`}>
              Correct Answer
            </Text>
            <Text style={tw`text-lg uppercase text-[#6b5be2]`}>
              7 Questions
            </Text>
          </View>
          <View>
            <Text style={tw`text-sm uppercase text-gray-500`}>Completion</Text>
            <Text style={tw`text-lg uppercase text-[#6b5be2]`}>80%</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-sm uppercase text-gray-500`}>
              Incorrect Answer
            </Text>
            <Text style={tw`text-lg uppercase text-[#6b5be2]`}>
              7 Questions
            </Text>
          </View>
          <View>
            <Text style={tw`text-sm uppercase text-gray-500`}>Points Gain</Text>
            <Text style={tw`text-lg uppercase text-[#6b5be2]`}>80%</Text>
          </View>
        </View>
      </View>
      <View style={tw`mt-auto mb-3 flex-row justify-between items-center`}>
        <TouchableOpacity style={tw`bg-[#6b5be2] rounded-xl p-2 w-3/4`}>
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
