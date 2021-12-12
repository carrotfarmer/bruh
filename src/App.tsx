import { Center } from "@chakra-ui/react";
import React from "react";

// my stupid components
import { Bruh } from "./components/Bruh";
import { Player } from "./components/Player";
import { Socials } from "./components/Socials";
import { Switch } from "./components/Switch";

function App(): JSX.Element {
  return (
    <div className="App">
      <Center mb={"2%"} mt={"2%"}>
        <Switch />
        <Socials />
      </Center>
      <Bruh />
      <Player />
    </div>
  );
}

export default App;
