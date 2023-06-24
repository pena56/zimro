import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { Text } from "./Text";

interface BannerProps {
  title: string;
  coverImage: string;
  buttonLabel: string;
}

export const Banner: FC<BannerProps> = ({ buttonLabel, coverImage, title }) => {
  return (
    <View className="w-full h-40 rounded-xl overflow-hidden">
      <View className="absolute top-0 left-0 bottom-0 right-0">
        <Image
          source={coverImage}
          className="w-full h-full"
          contentFit="cover"
          contentPosition="center"
        />
      </View>

      <View
        style={{ gap: 12 }}
        className="flex-1 bg-neutral-13/70 justify-center px-5"
      >
        <Text className="text-neutral-1 max-w-[70%]" variant="title2/semibold">
          {title}
        </Text>

        <View className="flex-row">
          <TouchableOpacity className="px-4 py-2 bg-primary-dark rounded-lg">
            <Text className="text-neutral-1" variant="callout/semibold">
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
