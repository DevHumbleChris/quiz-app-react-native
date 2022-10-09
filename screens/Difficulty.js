import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-paper";

const Difficulty = ({ navigation, route: { params } }) => {
  return (
    <SafeAreaView style={tw`flex-1 p-5`}>
      <View style={tw``}>
        <Text style={tw`text-center text-xl`}>{params.name}</Text>
        <TouchableOpacity style={tw`absolute`} onPress={() => navigation.goBack()}>
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
                <Button mode="contained" style={tw`my-1`}> Easy</Button>
                <Button mode="contained" style={tw`my-1`}> Medium</Button>
                <Button mode="contained" style={tw`my-1`}> Hard</Button>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Difficulty;
