import { View, ScrollView } from "react-native";
import { useState } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { Box } from "../src/components/layouts/Box";
import { Button } from "../src/components/ui/Button";
import { Input } from "../src/components/form/Input";
import { Navbar } from "../src/components/layouts/Navbar";
import { Banner } from "../src/components/ui/Banner";
import { Categories } from "../src/components/ui/Categories";
import { ProductCard } from "../src/components/ui/ProductCard";
import { SectionHeader } from "../src/components/ui/SectionHeader";
import { FilterSectionHeader } from "../src/components/ui/FilterSectionHeader";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <View className="bg-neutral-13 flex-1 pt-10">
      <Navbar />

      <ScrollView
        contentContainerStyle={{ gap: 15, flexGrow: 1 }}
        className="flex-1"
      >
        <Categories />

        <Box gap={16} className="flex-row w-full justify-between">
          <ProductCard />
          <ProductCard productSection="collections" />
        </Box>

        <Box gap={16}>
          <FilterSectionHeader />

          <SectionHeader title="All collection" />

          <ProductCard productSection="arrivals" />
          <ProductCard productSection="wishlist" />
        </Box>

        <Box gap={16}>
          <Input
            variant="contained"
            label="What's your email?"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Banner
            buttonLabel="Shop Now"
            coverImage={require("../src/assets/banner.jpg")}
            title="Men's Fashion 50% OFF"
          />

          <Banner
            buttonLabel="Explore"
            coverImage={require("../src/assets/banner2.jpg")}
            title="Get up to 30% Off
          New Arrivals"
          />

          <Banner
            buttonLabel="Shop Now"
            coverImage={require("../src/assets/banner3.jpg")}
            title="Save up to 40% 
          Summer collection"
          />
        </Box>

        <Box gap={16}>
          <Button label="Sign up" variant="sm/light" />
        </Box>
      </ScrollView>
    </View>
  );
}
