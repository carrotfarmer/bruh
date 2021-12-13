// lifted from https://chakra-ui.com/docs/features/color-mode :)
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { DEFAULT_THEME } from "./constants";

const config: ThemeConfig = {
  initialColorMode: DEFAULT_THEME,
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
