import { Box, keyframes } from "@chakra-ui/react";

import React from "react";

const Header = () => {
  // Animate the background color of the box
  const pulse = keyframes`
    0% {
      background-color: red;
    }
    50% {
      background-color: orange;
    }
    100% {
      background-color: brown;
    }
  `;

  return (
    <Box textAlign="center" paddingY="4">
      <Box
        animation={`${pulse} 2s ease-in-out infinite`}
        display="inline-block"
        paddingX={4}
        paddingY={2}
        borderRadius={4}
        color="black"
        fontSize={20}
        fontWeight="bold"
        letterSpacing="wide"
        textTransform="uppercase"
        boxShadow="md"
      >
        StarWars Ships
      </Box>
    </Box>
  );
};

export default Header;
