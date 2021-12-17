import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

// constants file
import { Speeds } from "../constants";

interface PlayerProps {}

export const Player: React.FC<PlayerProps> = () => {
  // bruh
  let audio: HTMLAudioElement = new Audio("/bruh.mp3");

  const start = (): Promise<void> => audio.play();
  const changePlaybackSpeed = (speed: number): number =>
    (audio.playbackRate = speed / 10);
  const changeAudio = (newSoundEffect: HTMLAudioElement): HTMLAudioElement =>
    (audio = newSoundEffect);

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
            <MenuItem
              onClick={() => changePlaybackSpeed(Speeds.INSTANT_DETH_SPEED)}
            >
              instant deth
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.THICC_SPEED)}>
              thiccccc
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.SLOWWW_SPEED)}>
              slooww
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.SLOW_SPEED)}>
              slow
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.NORMAL_SPEED)}>
              normal
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.RACECAR_SPEED)}>
              racecar
            </MenuItem>
            <MenuItem onClick={() => changePlaybackSpeed(Speeds.ROCKET_SPEED)}>
              rocket (ft: elon musk)
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <Box pl={"2%"}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              effex
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  let normie: HTMLAudioElement = new Audio("/bruh.mp3");
                  changeAudio(normie);
                }}
              >
                normie bruh
              </MenuItem>
              <MenuItem
                onClick={() => {
                  let reverb: HTMLAudioElement = new Audio(
                    "/bruh_with_extra_reverb.mp3"
                  );
                  changeAudio(reverb);
                }}
              >
                reverb-b-b
              </MenuItem>
              <MenuItem
                onClick={() => {
                  let hurb: HTMLAudioElement = new Audio("/urb.mp3");
                  changeAudio(hurb);
                }}
              >
                hurb
              </MenuItem>
            </MenuList>
          </Box>
        </Menu>
      </Center>
    </div>
  );
};
