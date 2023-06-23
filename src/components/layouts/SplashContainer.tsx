import { FC } from "react";
import { View } from "react-native";
import { Image } from "expo-image";

interface SplashContainerProps {}

export const SplashContainer: FC<SplashContainerProps> = ({}) => {
  return (
    <View className="grow relative">
      <Image
        source={require("../../assets/splash/cover.png")}
        className="absolute top-0 bottom-0 left-0 right-0"
        contentFit="cover"
        contentPosition="center"
      />
      <View className="grow items-center justify-center bg-neutral-13/70">
        <Image
          source={require("../../assets/logo.png")}
          className="w-20 h-20"
          contentFit="contain"
        />
      </View>
    </View>
  );
};
