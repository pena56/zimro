import { FC } from "react";
import { View, ViewProps } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

import { cln } from "../../utils/cln";

const boxVariants = cva("w-full px-4");

type BoxStylesProps = VariantProps<typeof boxVariants>;

interface BoxProps extends ViewProps, BoxStylesProps {
  gap?: number;
}

export const Box: FC<BoxProps> = ({
  children,
  gap = 0,
  className,
  ...props
}) => {
  return (
    <View
      style={{ gap }}
      className={cln(boxVariants({ className }))}
      {...props}
    >
      {children}
    </View>
  );
};
