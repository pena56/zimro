import { FC, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { Image } from "expo-image";

import { Text } from "./Text";
import { RatingDisplay } from "./RatingDisplay";
import HeartSvg from "../../assets/icons/HeartSvg";
import ShoppingBagSvg from "../../assets/icons/ShoppingBagSvg";
import CloseSvg from "../../assets/icons/CloseSvg";
import { COLORS } from "../../constants/colors";
import { WIDTH } from "../../constants/sizes";

const productCardVariants = cva("", {
  variants: {
    productSection: {
      collections: "",
      arrivals: "",
      products: "",
      wishlist: "",
    },
  },
  defaultVariants: {
    productSection: "products",
  },
});

type ProductCardStylesProps = VariantProps<typeof productCardVariants>;

interface ProductCardProps extends ProductCardStylesProps {}

export const ProductCard: FC<ProductCardProps> = ({ productSection }) => {
  const [isLiked, setIsLiked] = useState(false);

  if (productSection === "arrivals")
    return (
      <View style={{ width: WIDTH - 32, gap: 16 }} className="flex-row">
        <View className="w-24 h-24 rounded-xl overflow-hidden">
          <Image
            source={require("../../assets/products/1.png")}
            className="w-full h-full"
            contentFit="cover"
            contentPosition="top center"
          />
        </View>
        <View className="flex-1 justify-center" style={{ gap: 8 }}>
          <View>
            <Text className="text-neutral-1" variant="headline/semibold">
              Cotton long sleve jacket
            </Text>
            <Text className="text-neutral-1" variant="headline/regular">
              Women's wear
            </Text>
          </View>

          <Text className="text-neutral-1" variant="title2/semibold">
            $26.00
          </Text>
        </View>
      </View>
    );

  if (productSection === "wishlist")
    return (
      <View
        style={{ width: WIDTH - 32, gap: 16 }}
        className="flex-row bg-neutral-12 p-1 rounded-xl"
      >
        <View className="w-24 h-24 rounded-xl overflow-hidden">
          <Image
            source={require("../../assets/products/1.png")}
            className="w-full h-full"
            contentFit="cover"
            contentPosition="top center"
          />
        </View>
        <View className="flex-1 justify-center" style={{ gap: 8 }}>
          <View style={{ gap: 4 }}>
            <Text className="text-neutral-1" variant="subHeadline/semibold">
              Women Bottoms Free sizes
            </Text>
            <Text className="text-neutral-1" variant="headline/semibold">
              $12.99
            </Text>
          </View>

          <RatingDisplay />
        </View>
        <View className="p-2 items-end justify-between">
          <TouchableOpacity>
            <CloseSvg />
          </TouchableOpacity>

          <TouchableOpacity className="w-8 h-8 rounded-full bg-primary-normal items-center justify-center">
            <ShoppingBagSvg />
          </TouchableOpacity>
        </View>
      </View>
    );

  if (productSection === "collections")
    return (
      <View style={{ gap: 8, width: 116 }}>
        <View className="w-full h-[156px] rounded-xl overflow-hidden">
          <View className="absolute top-0 right-0 bottom-0 p-2 h-full w-10 z-20 justify-between items-center">
            <TouchableOpacity onPress={() => setIsLiked((prev) => !prev)}>
              <HeartSvg />
            </TouchableOpacity>

            <TouchableOpacity className="w-8 h-8 rounded-full bg-primary-normal items-center justify-center">
              <ShoppingBagSvg />
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/products/1.png")}
            className="w-full h-full"
            contentFit="cover"
            contentPosition="right top"
          />
        </View>

        <View style={{ gap: 4 }}>
          <Text className="text-neutral-1" variant="caption1/semibold">
            Women Bottoms Free sizes
          </Text>

          <Text className="text-neutral-1" variant="footnote/semibold">
            $12.99
          </Text>
        </View>
      </View>
    );

  return (
    <View style={{ gap: 8, width: "100%", maxWidth: WIDTH / 2 - 24 }}>
      <View className="w-full h-[258px] rounded-xl overflow-hidden">
        <View className="absolute top-0 right-0 bottom-0 p-2 h-full w-10 z-20 justify-between items-center">
          <TouchableOpacity onPress={() => setIsLiked((prev) => !prev)}>
            <HeartSvg />
          </TouchableOpacity>

          <TouchableOpacity className="w-8 h-8 rounded-full bg-primary-normal items-center justify-center">
            <ShoppingBagSvg />
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../assets/products/1.png")}
          className="w-full h-full"
          contentFit="cover"
          contentPosition="right top"
        />
      </View>

      <View style={{ gap: 4 }}>
        <Text className="text-neutral-1" variant="caption1/semibold">
          Women Bottoms Free sizes
        </Text>

        <Text className="text-neutral-1" variant="footnote/semibold">
          $12.99
        </Text>
      </View>
    </View>
  );
};
