import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Text } from "./Text";
import { COLORS } from "../../constants/colors";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <View
      className="w-full flex-row items-center justify-between"
      style={{ gap: 16 }}
    >
      <Text variant="subHeadline/semibold" className="text-neutral-1">
        {title}
      </Text>

      <TouchableOpacity style={{ gap: 2 }} className="flex-row items-center">
        <Text variant="caption1/semibold" className="text-neutral-1">
          See all
        </Text>

        <Entypo
          name="chevron-small-right"
          size={12}
          color={COLORS.neutral[1]}
        />
      </TouchableOpacity>
    </View>
  );
};
