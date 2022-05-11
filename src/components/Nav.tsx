import { Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue, useColorMode, Icon } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.200");
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop
      ? setScroll(true)
      : setScroll(false);
  if (typeof window !== "undefined") {
    // windowを使う処理を記述
    // https://qiita.com/ku1987/items/e592cb5133659c3136de
    window.addEventListener("scroll", changeScroll);
  }

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <IconButton onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
      <Text fontSize="lg" fontWeight="bold">
        Chakra Sample
      </Text>
      <Spacer />
      <Flex alignItems="center">
        <Text fontSize="md" mr="10">
          About
        </Text>
        <Text fontSize="md">More Apps</Text>
      </Flex>
    </Flex>
  );
};

export default Nav;
