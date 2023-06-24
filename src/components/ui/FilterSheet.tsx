import { FC, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MultiSlider from "@pietroanello/ptomasroos-react-native-multi-slider";

import { BottomSheet } from "../layouts/BottomSheet";
import { Box } from "../layouts/Box";
import { Text } from "./Text";
import { COLORS } from "../../constants/colors";
import { WIDTH } from "../../constants/sizes";
import { RatingDisplay } from "./RatingDisplay";

interface FilterSheetProps {
  forwardedRef: React.Ref<BottomSheetModal>;
}

const categories = ["Men's", "Women's", "Kids", "Accessories"];
const colors = [
  COLORS.neutral[1],
  COLORS.neutral[13],
  COLORS.primary.light.DEFAULT,
  COLORS.blue.normal.DEFAULT,
  COLORS.green.light.DEFAULT,
  COLORS.orange.light.DEFAULT,
  COLORS.red.light.DEFAULT,
  COLORS.primary.dark.DEFAULT,
];

export const FilterSheet: FC<FilterSheetProps> = ({ forwardedRef }) => {
  const [values, setValues] = useState([0, 100]);

  return (
    <BottomSheet snapPoint={"63%"} forwardedRef={forwardedRef}>
      <Box gap={12}>
        <Text variant="subHeadline/semibold">FILTER</Text>

        <Text variant="subHeadline/semibold">Categories</Text>

        <View style={{ gap: 14 }} className="w-full flex-row flex-wrap">
          <TouchableOpacity
            style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
            className="px-3 py-1 rounded bg-neutral-13"
          >
            <Text className="text-neutral-1" variant="caption3/medium">
              All
            </Text>
          </TouchableOpacity>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
              className="px-3 py-1 rounded"
            >
              <Text variant="caption3/medium">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text variant="subHeadline/semibold">Colors</Text>

        <View style={{ gap: 16 }} className="w-full flex-row flex-wrap">
          {colors.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 1,
                borderColor:
                  item === COLORS.neutral[1] ? COLORS.neutral[13] : item,
                backgroundColor: item,
              }}
              className="w-5 h-5 rounded-full"
            ></TouchableOpacity>
          ))}
        </View>

        <View className="w-full flex-row justify-between">
          <Text variant="subHeadline/semibold">Price range</Text>

          <Text variant="subHeadline/semibold">0 - 100 $</Text>
        </View>
        <MultiSlider
          values={values}
          sliderLength={WIDTH - 32}
          // onValuesChange={handleSliderValuesChange}
          min={0}
          max={100}
          step={1}
          allowOverlap={false}
          snapped
          markerStyle={{
            backgroundColor: COLORS.neutral[13],
            width: 24,
            height: 24,
          }}
          trackStyle={{
            backgroundColor: COLORS.neutral[5],
          }}
          selectedStyle={{ backgroundColor: COLORS.neutral[13] }}
        />

        <Text variant="subHeadline/semibold">Customer reviews</Text>
        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center" style={{ gap: 12 }}>
            <RatingDisplay
              averageRating={4}
              selectedColor={COLORS.neutral[13]}
            />

            <Text variant="subHeadline/semibold">& up</Text>
          </View>

          <View
            style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
            className="w-5 h-5 rounded-full items-center justify-center"
          >
            <View className="w-3 h-3 bg-neutral-13 rounded-full" />
          </View>
        </View>

        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center" style={{ gap: 12 }}>
            <RatingDisplay
              averageRating={3}
              selectedColor={COLORS.neutral[13]}
            />

            <Text variant="subHeadline/semibold">& up</Text>
          </View>

          <View
            style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
            className="w-5 h-5 rounded-full items-center justify-center"
          >
            {/* <View className="w-3 h-3 bg-neutral-13 rounded-full" /> */}
          </View>
        </View>

        <View className="w-full flex-row items-center justify-between">
          <View className="flex-row items-center" style={{ gap: 12 }}>
            <RatingDisplay
              averageRating={2}
              selectedColor={COLORS.neutral[13]}
            />

            <Text variant="subHeadline/semibold">& up</Text>
          </View>

          <View
            style={{ borderWidth: 1, borderColor: COLORS.neutral[13] }}
            className="w-5 h-5 rounded-full items-center justify-center"
          >
            {/* <View className="w-3 h-3 bg-neutral-13 rounded-full" /> */}
          </View>
        </View>
      </Box>
    </BottomSheet>
  );
};
