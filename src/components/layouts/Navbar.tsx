import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <View className="w-full flex-row justify-between items-center px-4 py-2">
      <Image
        source={require("../../assets/logo-1.png")}
        className="w-20 h-5"
        contentFit="contain"
      />

      <TouchableOpacity className="w-8 h-8 rounded-full overflow-hidden items-center justify-center">
        <Image
          source={require("../../assets/avatar.png")}
          className="w-full h-full"
          contentFit="cover"
        />
      </TouchableOpacity>
    </View>
  );
};
