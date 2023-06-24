import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const StarSvg = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.3}
      d="m7 1.167 1.802 3.652 4.031.589-2.916 2.84.688 4.014L7 10.366l-3.605 1.896.688-4.013-2.916-2.841 4.03-.59L7 1.168Z"
    />
  </Svg>
);
export default StarSvg;
