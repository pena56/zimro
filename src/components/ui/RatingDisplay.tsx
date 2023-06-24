import { FC } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import StarSvg from "../../assets/icons/StarSvg";
import { COLORS } from "../../constants/colors";

interface RatingDisplayProps {
  selectedColor?: string;
  averageRating: 0 | 1 | 2 | 3 | 4 | 5;
}

export const RatingDisplay: FC<RatingDisplayProps> = ({
  selectedColor = COLORS.primary.normal.DEFAULT,
  averageRating = 0,
}) => {
  return (
    <View className="flex-row ">
      {new Array(averageRating).fill(0).map((_, index) => (
        <AntDesign key={index} name="star" size={20} color={selectedColor} />
      ))}

      {new Array(5 - averageRating).fill(0).map((_, index) => (
        <AntDesign
          key={index}
          name="staro"
          size={20}
          color={COLORS.neutral[13]}
        />
      ))}
    </View>
  );
};
