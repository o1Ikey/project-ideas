import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type IWrapperProps = {
  children: ReactNode;
  size?: "regular" | "small";
};

function Wrapper({ children, size = "regular" }: IWrapperProps) {
  return (
    <Box
      maxW={size === "regular" ? "800px" : "400px"}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  );
}

export default Wrapper;
