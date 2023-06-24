import { FC, useRef } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { Text } from "./Text";
import { FilterSheet } from "./FilterSheet";
import { SortSheet } from "./SortSheet";
import { AddToCartSheet } from "./AddToCartSheet";
import { ItemPreviewSheet } from "./ItemPreviewSheet";
import { COLORS } from "../../constants/colors";

interface FilterSectionHeaderProps {}

export const FilterSectionHeader: FC<FilterSectionHeaderProps> = ({}) => {
  const filterSheetRef = useRef<BottomSheetModal>(null);
  const sortSheetRef = useRef<BottomSheetModal>(null);
  const addToCartSheetRef = useRef<BottomSheetModal>(null);
  const itemPreviewSheetRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <FilterSheet forwardedRef={filterSheetRef} />
      <SortSheet forwardedRef={sortSheetRef} />
      <AddToCartSheet forwardedRef={addToCartSheetRef} />
      <ItemPreviewSheet forwardedRef={itemPreviewSheetRef} />

      <View
        style={{ gap: 22 }}
        className="w-full flex-row items-center justify-between"
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", gap: 16, flexGrow: 1 }}
        >
          <TouchableOpacity className="py-1 px-4 bg-neutral-7 rounded-xl">
            <Text className="text-neutral-1" variant="caption3/regular">
              All collections
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-1 px-4 bg-neutral-12 rounded-xl">
            <Text className="text-neutral-1" variant="caption3/regular">
              Trousers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-1 px-4 bg-neutral-12 rounded-xl">
            <Text className="text-neutral-1" variant="caption3/regular">
              Denims
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="py-1 px-4 bg-neutral-12 rounded-xl">
            <Text className="text-neutral-1" variant="caption3/regular">
              Shorts
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity
          onPress={() => itemPreviewSheetRef?.current?.present()}
        >
          <AntDesign name="filter" size={24} color={COLORS.neutral[1]} />
        </TouchableOpacity>
      </View>
    </>
  );
};
