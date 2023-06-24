import { FC } from "react";
import { ScrollView } from "react-native";

import { Category } from "./Category";

interface CategoriesProps {}

const data = [
  {
    id: 1,
    name: "Men's T-shirt",
    cover: require("../../assets/category/1.png"),
  },
  {
    id: 2,
    name: "Women's T-shirt",
    cover: require("../../assets/category/2.png"),
  },
  {
    id: 3,
    name: "Skinner",
    cover: require("../../assets/category/3.png"),
  },
  {
    id: 4,
    name: "Long Sleeve",
    cover: require("../../assets/category/4.png"),
  },
  {
    id: 5,
    name: "Party Dresses",
    cover: require("../../assets/category/5.png"),
  },
  {
    id: 6,
    name: "Frock",
    cover: require("../../assets/category/6.png"),
  },
  {
    id: 7,
    name: "Denims",
    cover: require("../../assets/category/7.png"),
  },
  {
    id: 8,
    name: "Blouses",
    cover: require("../../assets/category/8.png"),
  },
];

export const Categories: FC<CategoriesProps> = ({}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ gap: 16, flexGrow: 1, paddingHorizontal: 16 }}
    >
      {data.map((item) => (
        <Category coverImage={item.cover} name={item.name} key={item.id} />
      ))}
    </ScrollView>
  );
};
