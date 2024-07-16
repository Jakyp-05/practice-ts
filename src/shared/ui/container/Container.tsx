import React from "react";
import { Container as MuiContainer } from "./style";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <MuiContainer>{children}</MuiContainer>;
};

export default Container;
