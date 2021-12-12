import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = () => {
  return (
    <Button
      ml="1%"
      onClick={() =>
        window.open("https://github.com/carrotfarmer/bruh", "_blank")
      }
    >
      <Icon as={FaGithub} />
    </Button>
  );
};
