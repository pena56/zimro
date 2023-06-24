import { FC } from "react";
import {
  TextProps as DefaultTextProps,
  Text as DefaultText,
} from "react-native";
import { cva, VariantProps } from "class-variance-authority";

import { cln } from "../../utils/cln";

const textVariants = cva("text-neutral-1", {
  variants: {
    size: {
      lgTitle: "text-largeTitle",
      title1: "text-title1",
      title2: "text-title2",
      title3: "text-title3",
      headline: "text-headline",
      body: "text-body",
      callout: "text-callout",
      subHeadline: "text-subHeadline",
      footnote: "text-footnote",
      caption1: "text-caption1",
      caption2: "text-caption2",
      caption3: "text-caption3",
    },
    weight: {
      regular: "font-jost",
      medium: "font-jostMedium",
      semibold: "font-jostSemiBold",
      bold: "font-jostBold",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    size: "body",
    weight: "regular",
    align: "left",
  },
});

type TextStylesProps = VariantProps<typeof textVariants>;

interface TextProps
  extends DefaultTextProps,
    Omit<TextStylesProps, "size" | "weight"> {
  variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<
    TextStylesProps["weight"]
  >}`;
}

export const Text: FC<TextProps> = ({
  align,
  variant,
  className,
  children,
  ...props
}) => {
  const [size, weight] = variant.split("/") as [
    TextStylesProps["size"],
    TextStylesProps["weight"]
  ];

  return (
    <DefaultText
      className={cln(textVariants({ align, size, weight, className }))}
      {...props}
    >
      {children}
    </DefaultText>
  );
};
