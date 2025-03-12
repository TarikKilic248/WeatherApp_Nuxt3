export const colorMode = useColorMode();

export const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
