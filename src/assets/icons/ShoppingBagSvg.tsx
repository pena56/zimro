import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ShoppingBagSvg = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.01 14.333H5.443c-2.044 0-3.613-.738-3.167-3.71l.519-4.027c.274-1.483 1.22-2.05 2.05-2.05h6.786c.842 0 1.733.61 2.05 2.05l.519 4.027c.378 2.636-1.148 3.71-3.192 3.71Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.1 4.399a2.88 2.88 0 0 0-2.88-2.88v0a2.88 2.88 0 0 0-2.892 2.88h0"
      opacity={0.4}
    />
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.198 7.401h-.03M6.31 7.401h-.03"
    />
  </Svg>
);
export default ShoppingBagSvg;
