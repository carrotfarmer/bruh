import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";

interface BruhProps {}

export const Bruh: React.FC<BruhProps> = () => {
  return (
    <div>
      <Center>
        <Box boxSize="xs">
          <Image src="/bruhcat.gif" />
        </Box>
      </Center>
      <Center>
        {/* thicc */}
        <Heading size="4xl">bruh.</Heading>
      </Center>
    </div>
  );
};
