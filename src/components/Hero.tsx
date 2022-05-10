import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import chakraHero from "../../public/chakra-hero.png";
const Hero = () => {
  const [isLargerThan62] = useMediaQuery("(min-width: 62rem)");
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThan62 ? "16" : "6"}
      py="16"
      minH="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? "row" : "column"}
    >
      <Box mr={isLargerThan62 ? "6" : "0"} w={isLargerThan62 ? "60%" : "full"}>
        <Text
          fontSize={isLargerThan62 ? "5xl" : "4xl"}
          fontWeight="bold"
          mb="4"
        >
          {" "}
          Let's Scale your business
        </Text>
        <Text mb="6" fontSize={isLargerThan62 ? "lg" : "base"} opacity={0.7}>
          Hire professionals who will help your business make 10X
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThan62 ? "lg" : "md"}
          mb={isLargerThan62 ? "0" : "10"}
        >
          HIRE US
        </Button>
      </Box>

      <Spacer />

      <Flex
        w={isLargerThan62 ? "40%" : "full"}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={chakraHero.src} alt="Chakra UI" />
        {/* https://brightful.jp/blog/programming/nextjs-chakraui-1/#:~:text=%E2%80%BB%E3%81%A1%E3%81%AA%E3%81%BF%E3%81%AB%E3%80%81%EF%BC%91%E8%A1%8C%E7%9B%AE%E3%81%A8%EF%BC%91%EF%BC%90%E8%A1%8C%E7%9B%AE%E3%81%AF%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E3%82%A2%E3%82%A6%E3%83%88%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%81%8C%E3%80%81%E3%81%94%E8%87%AA%E8%BA%AB%E3%81%A7public%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E7%9B%B4%E4%B8%8B%E3%81%AB%E7%94%BB%E5%83%8F%E3%82%92%E7%94%A8%E6%84%8F%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%91%E3%82%8C%E3%81%B0%E3%80%81%E3%82%AB%E3%83%BC%E3%83%89%E3%81%AE%E3%83%88%E3%83%83%E3%83%97%E9%83%A8%E5%88%86%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%95%E3%81%9B%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%EF%BC%81 */}
      </Flex>
    </Flex>
  );
};

export default Hero;
