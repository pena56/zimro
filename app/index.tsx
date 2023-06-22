import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="bg-primary-normal flex-1 p-10 m-5">
      <View className="bg-green-normal flex-1 items-center justify-center">
        <Text className="text-largeTitle font-bold">Hello World</Text>
        <Text className="text-title1">This is the first page of your app.</Text>
      </View>
    </View>
  );
}
