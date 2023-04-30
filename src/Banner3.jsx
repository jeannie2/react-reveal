import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation2 = keyframes`
  from {
    opacity: 0;
    background-color: green;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    transform: translateX(0px);
     display: inline-block;
  }

  to {
    opacity: 1;
    background-color: blue;
    border-radius: 50%;
   transform: translateX(1000px) scale(0.2);
   height: 100px;
    width: 100px;
     display: inline-block;
  }
`;

export default function CustomAnimation2({ children }) {
  return <Reveal keyframes={customAnimation2}>{children}</Reveal>;
}
