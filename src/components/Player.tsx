import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

interface PlayerProps {}

export const Player: React.FC<PlayerProps> = () => {
  // bruh
  let audio = new Audio("/bruh.mp3");

  const start = () => audio.play();
  const changePlaybackSpeed = (speed: number): number =>
    (audio.playbackRate = speed / 10);

  return (
    <div>
      <Center>
        <Button
          rounded={360}
          size="lg"
          width={"10%"}
          mt={"5%"}
          colorScheme={"red"}
          onClick={start}
        >
          bruh
        </Button>
      </Center>

      {/* thiccness r8 */}
      <Center mt="2%">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            speed
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => changePlaybackSpeed(2.5)}>
              thiccccc
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(5)}>slooww</MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(7.5)}>slow</MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(10)}>normal</MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(15)}>racecar</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </div>
  );
};
