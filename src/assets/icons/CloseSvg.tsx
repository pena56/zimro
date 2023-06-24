import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CloseSvg = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3 3 9M3 3l6 6"
    />
  </Svg>
);
export default CloseSvg;
