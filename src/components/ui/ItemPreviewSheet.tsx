import { FC, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { BottomSheet } from "../layouts/BottomSheet";
import { Box } from "../layouts/Box";
import { Text } from "./Text";
import { Button } from "./Button";
import { COLORS } from "../../constants/colors";

interface ItemPreviewSheetProps {
  forwardedRef: React.Ref<BottomSheetModal>;
}

const colors = [
  COLORS.blue.normal.DEFAULT,
  COLORS.green.light.DEFAULT,
  COLORS.orange.light.DEFAULT,
  COLORS.red.light.DEFAULT,
  COLORS.primary.dark.DEFAULT,
];

const sizes = ["S", "M", "L"];

export const ItemPreviewSheet: FC<ItemPreviewSheetProps> = ({
  forwardedRef,
}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <BottomSheet
      handleIndicatorStyle={{ width: 0, height: 0 }}
      forwardedRef={forwardedRef}
      showBottomHandleIndicator
      snapPoint={"53%"}
    >
      <Box gap={12}>
        <View
          style={{ gap: 16 }}
          className="w-full items-center justify-between flex-row"
        >
          <Text variant="title3/semibold">Women's levi's denims</Text>

          <Text variant="title3/semibold">$82.99</Text>
        </View>

        <Text className="text-neutral-10" variant="callout/regular">
          Levi's denim will perfectly complement your image. this denim is
          suitable for both classic style and for casual style.
        </Text>

        <Text variant="subHeadline/semibold">Color</Text>

        <View style={{ gap: 16 }} className="w-full flex-row flex-wrap">
          {colors.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedColor(item)}
              key={index}
              style={{
                borderWidth: 1,
                borderColor:
                  item === COLORS.neutral[1] ? COLORS.neutral[13] : item,
                backgroundColor: item,
              }}
              className="w-6 h-6 rounded-full"
            >
              {selectedColor === item && (
                <View
                  style={{ borderWidth: 1, borderColor: COLORS.neutral[1] }}
                  className="w-2 h-2 bg-neutral-13 absolute top-[-2px] right-[-2px] rounded-full"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text variant="subHeadline/semibold">Size</Text>

        <View style={{ gap: 16 }} className="w-full flex-row flex-wrap">
          {sizes.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedSize(item)}
              key={index}
              className={`w-6 h-6 rounded-full items-center justify-center ${
                selectedSize === item ? "bg-neutral-13" : "bg-neutral-3"
              }`}
            >
              <Text
                className={`${
                  selectedSize === item ? "text-neutral-1" : "text-neutral-13"
                }`}
                variant="callout/bold"
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          className="w-full flex-row items-center justify-between"
          style={{ gap: 24 }}
        >
          <View style={{ gap: 12 }} className="flex-row items-center">
            <TouchableOpacity
              onPress={() =>
                setSelectedQuantity((prev) => (prev === 1 ? prev : prev - 1))
              }
              style={{ borderWidth: 2, borderColor: COLORS.neutral[13] }}
              className="w-6 h-6 rounded-md items-center justify-center"
            >
              <Entypo name="minus" size={20} color={COLORS.neutral[7]} />
            </TouchableOpacity>

            <Text variant="subHeadline/semibold">{selectedQuantity}</Text>

            <TouchableOpacity
              onPress={() => setSelectedQuantity((prev) => prev + 1)}
              style={{ borderWidth: 2, borderColor: COLORS.neutral[13] }}
              className="w-6 h-6 rounded-md items-center justify-center"
            >
              <Entypo name="plus" size={20} color={COLORS.neutral[7]} />
            </TouchableOpacity>
          </View>

          <View className="flex-1">
            <Button label="Add to cart" variant="lg/dark">
              <SimpleLineIcons
                name="handbag"
                size={16}
                color={COLORS.neutral[1]}
              />
            </Button>
          </View>
        </View>
      </Box>
    </BottomSheet>
  );
};
