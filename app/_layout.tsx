import "react-native-gesture-handler";
import { Slot } from "expo-router";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
} from "@expo-google-fonts/jost";
import { NativeWindStyleSheet } from "nativewind";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { SplashContainer } from "../src/components/layouts/SplashContainer";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <SplashContainer />;

  return (
    <BottomSheetModalProvider>
      <Slot />
    </BottomSheetModalProvider>
  );
}
