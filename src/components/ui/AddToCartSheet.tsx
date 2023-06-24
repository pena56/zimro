import { FC } from "react";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

import { BottomSheet } from "../layouts/BottomSheet";
import { Box } from "../layouts/Box";
import { Text } from "./Text";
import { Button } from "./Button";
import { COLORS } from "../../constants/colors";

interface AddToCartSheetProps {
  forwardedRef: React.Ref<BottomSheetModal>;
}

export const AddToCartSheet: FC<AddToCartSheetProps> = ({ forwardedRef }) => {
  return (
    <BottomSheet
      showBottomHandleIndicator
      snapPoint={"35%"}
      forwardedRef={forwardedRef}
    >
      <Box gap={12}>
        <Text align="center" variant="subHeadline/semibold">
          Item(s) successfully added!
        </Text>

        <View
          className="w-full flex-row justify-center items-center"
          style={{ gap: 7 }}
        >
          <Ionicons
            name="checkmark-circle"
            size={12}
            color={COLORS.green.normal.DEFAULT}
          />

          <Text variant="caption1/regular" className="text-neutral-10">
            A new item has been added to your shopping cart.
          </Text>
        </View>

        <Button variant="lg/dark" label="View shopping cart" />

        <Button variant="lg/outlineDark" label="Check my order" />
      </Box>
    </BottomSheet>
  );
};
