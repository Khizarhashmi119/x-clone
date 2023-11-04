import styled, { keyframes } from "styled-components";

type LoaderProps = {
  $size?: number;
  $thickness?: number;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<LoaderProps>`
  animation: ${rotate} 0.6s linear infinite;
  border-radius: 50%;
  border: ${(props) => (props.$thickness ? `${props.$thickness}px` : "3.5px")}
    solid #134c72;
  border-top: ${(props) =>
      props.$thickness ? `${props.$thickness}px` : "3.5px"}
    solid #1d9bf0;
  height: ${(props) => (props.$size ? `${props.$size}px` : "30px")};
  width: ${(props) => (props.$size ? `${props.$size}px` : "30px")};
`;

export default Loader;
