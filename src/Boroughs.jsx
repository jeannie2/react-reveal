import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
    color: white;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    color: yellow;
  }
`;

export default function CustomAnimation({ children }) {
  return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}
