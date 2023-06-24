import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

import { Text } from "./Text";
import { cln } from "../../utils/cln";
import { COLORS } from "../../constants/colors";

const buttonVariants = cva(
  "py-3 px-5 flex-row items-center justify-center rounded-xl border border-1",
  {
    variants: {
      size: {
        lg: "w-full",
        sm: "w-fit",
      },
      type: {
        dark: "bg-neutral-13 border-neutral-13",
        light: "bg-neutral-1 border-neutral-1",
        outlineDark: "bg-transparent border-neutral-13",
        outlineLight: "bg-transparent border-neutral-1",
      },
    },
    defaultVariants: {
      size: "lg",
      type: "dark",
    },
  }
);

type ButtonStylesProps = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends TouchableOpacityProps,
    Omit<ButtonStylesProps, "size" | "type"> {
  variant: `${NonNullable<ButtonStylesProps["size"]>}/${NonNullable<
    ButtonStylesProps["type"]
  >}`;
  label: string;
}

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  children,
  label,
  ...props
}) => {
  const [size, type] = variant.split("/") as [
    ButtonStylesProps["size"],
    ButtonStylesProps["type"]
  ];

  return (
    <TouchableOpacity
      style={{
        gap: size === "lg" ? 20 : 12,
        borderWidth: 1,
        borderColor:
          type === "dark" || type === "outlineDark"
            ? COLORS.neutral[13]
            : COLORS.neutral[1],
      }}
      className={cln(buttonVariants({ type, size, className }))}
      {...props}
    >
      {children}
      <Text
        className={`${
          type === "dark" || type === "outlineLight"
            ? "text-neutral-1"
            : "text-neutral-13"
        }`}
        variant="body/medium"
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
