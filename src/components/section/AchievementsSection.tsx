import React from "react";
import {
  Heading,
  SlideFade,
  Grid,
  Text,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react";
import { achievements } from "../../constant";
import { FaAngleRight, FaLink } from "react-icons/fa";

const AchievementsSection = () => {
  return (
    <SlideFade in offsetY={80}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Achievements
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
        mb={5}
      >
        Some of my achievements and awards I am proud of -
      </Text>
      <Flex
        flexWrap="wrap"
        textColor={useColorModeValue("gray.600", "gray.400")}
      >
        {achievements.map((ach) => (
          <Flex
            key={ach.title}
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            flexBasis={["100%", "100%", "100%"]}
          >
            <Flex alignItems="center">
              <Icon as={FaAngleRight} mr={2} />
              <Text fontSize={["sm", "md"]}>{ach.title}</Text>
            </Flex>
            <Link href={ach.link} target="_blank" rel="noopener noreferrer">
              <Icon as={FaLink} mr={2} />
            </Link>
          </Flex>
        ))}
      </Flex>
    </SlideFade>
  );
};

export default AchievementsSection;
