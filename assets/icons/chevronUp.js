import React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronUp = ({ color }) => (
    <Svg width={10} height={6} viewBox="0 0 10 6">
        <Path
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.70711 5.70711C9.31658 6.09763 8.68342 6.09763 8.29289 5.70711L5 2.41421L1.70711 5.70711C1.31658 6.09763 0.683417 6.09763 0.292893 5.70711C-0.0976315 5.31658 -0.0976315 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976315 5.31658 -0.0976315 5.70711 0.292893L9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711Z"
        />
    </Svg>
);

export default ChevronUp;
