import { Speeds } from "./constants";

export interface AudioSound {
  speed: Speeds;
  name: string;
}

export const audioSounds: AudioSound[] = [
  { speed: Speeds.INSTANT_DETH_SPEED, name: "instant deth" },
  { speed: Speeds.THICC_SPEED, name: "thiccccc" },
  { speed: Speeds.SLOWWW_SPEED, name: "slooww" },
  { speed: Speeds.SLOW_SPEED, name: "slow" },
  { speed: Speeds.NORMAL_SPEED, name: "normal" },
  { speed: Speeds.RACECAR_SPEED, name: "racecar" },
  { speed: Speeds.ROCKET_SPEED, name: "rocket" },
];
