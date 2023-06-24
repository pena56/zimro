import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { BottomSheet } from "../layouts/BottomSheet";
import { Box } from "../layouts/Box";
import { Text } from "./Text";
import { COLORS } from "../../constants/colors";

interface SortSheetProps {
  forwardedRef: React.Ref<BottomSheetModal>;
}

const options = [
  "Recommended",
  "Recently added",
  "Price low - high",
  "Price high - low",
];

export const SortSheet: FC<SortSheetProps> = ({ forwardedRef }) => {
  return (
    <BottomSheet snapPoint={"45%"} forwardedRef={forwardedRef}>
      <Box gap={12}>
        <Text variant="subHeadline/semibold">SORT BY</Text>

        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={{
              gap: 16,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.neutral[5],
            }}
            className="w-full flex-row items-center py-3"
          >
            <View
              style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
              className="w-5 h-5 rounded-full items-center justify-center"
            >
              {/* <View className="w-3 h-3 bg-neutral-13 rounded-full" /> */}
            </View>

            <Text variant="callout/medium">{option}</Text>
          </TouchableOpacity>
        ))}
      </Box>
    </BottomSheet>
  );
};
