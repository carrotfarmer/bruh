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
import { AudioEffect, effects } from "../audioEffects";
import { AudioSound, audioSounds } from "../audioSounds";

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
            {audioSounds.map((audioSound: AudioSound) => (
              <MenuItem onClick={() => changePlaybackSpeed(audioSound.speed)}>
                {audioSound.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <Box pl={"2%"}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              effex
            </MenuButton>
            <MenuList>
              {effects.map((effect: AudioEffect) => (
                <MenuItem
                  onClick={() => {
                    let audio: HTMLAudioElement = new Audio(
                      `/${effect.effectName}`
                    );
                    changeAudio(audio);
                  }}
                >
                  {effect.componentLabel}
                </MenuItem>
              ))}
            </MenuList>
          </Box>
        </Menu>
      </Center>
    </div>
  );
};
