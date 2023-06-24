import { FC, useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { MotiText } from "moti";

import { Text } from "../ui/Text";
import { cln } from "../../utils/cln";
import { COLORS } from "../../constants/colors";

const inputVariants = cva("w-full border", {
  variants: {
    variant: {
      contained: "border-1 px-2 py-1 rounded pt-6",
      normal: "border-transparent",
      outline: "border-transparent",
    },
  },
  defaultVariants: {
    variant: "contained",
  },
});

type InputStyleProps = VariantProps<typeof inputVariants>;

interface InputProps extends TextInputProps, InputStyleProps {
  label: string;
}

export const Input: FC<InputProps> = ({ label, variant, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ width: "100%", gap: 4 }}>
      <Text className="text-neutral-5" variant="body/medium">
        {label}
      </Text>
      <View
        style={{
          borderWidth: variant === "contained" ? 1 : 0,
          borderColor: isFocused ? COLORS.neutral[4] : COLORS.neutral[6],
          gap: 4,
        }}
        className={cln(inputVariants({ variant }))}
      >
        <MotiText
          animate={{
            bottom: isFocused || props.value ? 24 : 4,
            scale: isFocused || props.value ? 0.75 : 1,
            left: isFocused || props.value ? 3 : 4,
          }}
          className="text-neutral-5 absolute left-2 bottom-1 text-title3 font-jost"
        >
          {props.placeholder}
        </MotiText>

        <TextInput
          className="w-full text-neutral-1 text-title3 font-jost"
          placeholderTextColor="transparent"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
    </View>
  );
};
