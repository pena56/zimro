import { FC, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

interface BottomSheetProps {
  children: React.ReactNode;
  forwardedRef: React.Ref<BottomSheetModal>;
  snapPoint?: number | string;
  handleIndicatorStyle?: ViewStyle;
  showBottomHandleIndicator?: boolean;
}

export const BottomSheet: FC<BottomSheetProps> = ({
  children,
  forwardedRef,
  snapPoint = "50%",
  handleIndicatorStyle = {
    height: 2,
    width: 41,
  },
  showBottomHandleIndicator = false,
}) => {
  const snapPoints = useMemo(() => ["20%", snapPoint], []);

  return (
    <BottomSheetModal
      ref={forwardedRef}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={1} opacity={0} />
      )}
      handleIndicatorStyle={handleIndicatorStyle}
    >
      <View className="flex-1 bg-neutral-1">
        {children}
        {showBottomHandleIndicator && (
          <View className="absolute bottom-4 left-0 right-0 items-center justify-center">
            <View className="w-[40%] h-1 bg-neutral-13 rounded-full" />
          </View>
        )}
      </View>
    </BottomSheetModal>
  );
};
