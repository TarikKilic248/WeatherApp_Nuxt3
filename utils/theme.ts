import { useColorMode } from "@vueuse/core";

export const useThemeToggle = () => {
  const colorMode = useColorMode();

  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  };

  return { toggleColorMode, colorMode };
};