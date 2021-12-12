import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";

interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
      </Button>
    </header>
  );
};
