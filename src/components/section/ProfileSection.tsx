import React from "react";
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Image,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import Paragraph from "../Paragraph";
import { resume, siteConfig } from "../../constant";
import SocialButton from "../SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";
import { SpotifySong } from "../../types/spotify";
import { MotionFlex } from "../../utils/motion";
import { IconButton } from "@chakra-ui/react";
interface IProfileSection {
  song: SpotifySong;
}
import Router from "next/router";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  return (
    <Box>
      <MotionFlex
        alignItems="center"
        justifyContent="space-between"
        opacity="0"
        initial={{
          opacity: 0,
          translateX: 150,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hey, I am Shardendu! <span className="waving-hand">👋</span>
        </Heading>
        <MotionFlex alignItems={"flex-end"} whileHover={{ scale: 1.2 }}>
          <Avatar
            name="Shardendu Shekhar Chaubey"
            src="/profile_picture.png"
            mb={5}
            size="lg"
          />
        </MotionFlex>
      </MotionFlex>
      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        A Student and a Future Software Developer from India ɪɴ
      </Paragraph>

      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
        my={8}
      >
        
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              aria-label={sc.name}
              href={sc.url}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
        <ButtonGroup>
          <SocialButton social={resume} />
            <Button
              colorScheme="blue"
              size="sm"
              margin={"5px"}
              leftIcon={<BiPhoneCall />}
              onClick={() => {Router.push("/contact");}}
            >
              Contact Me
            </Button>
        </ButtonGroup>
      </Flex>

      <SpotifySection song={song} />
    </Box>
  );
};

export default ProfileSection;
