import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { Text } from "./Text";

interface CategoryProps {
  name: string;
  coverImage: string;
}

export const Category: FC<CategoryProps> = ({ name, coverImage }) => {
  return (
    <TouchableOpacity
      style={{ gap: 8 }}
      className=" items-center justify-center"
    >
      <View className="w-16 h-16 rounded-full overflow-hidden">
        <Image
          source={coverImage}
          className="w-full h-full"
          contentFit="cover"
        />
      </View>

      <Text
        align="center"
        className="text-neutral-1"
        variant="caption2/semibold"
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
