import React from "react";
import Link from "next/link";
import {
  Author,
  Container,
  Content,
  Dribble,
  Github,
  Subtitle,
  Title,
  Twitter,
  Wrapper,
} from "./hero";
import { motion } from "framer-motion";
const nameVariants = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      ease: "easeIn",
      delay: 0.1,
    },
  },
};
const headingVariants = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      ease: "easeIn",
      delay: 0.4,
    },
  },
};
const subHeadingVariants = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      ease: "easeIn",
      delay: 0.7,
    },
  },
};

export default function Hero() {
  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <Author
              as={motion.h1}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              👋 suraj narsale
            </Author>
            <Title
              as={motion.div}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Designer & Software Engineer
            </Title>
            {/* <Title
              as={motion.h1}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              WIP
            </Title> */}
            <Subtitle
              as={motion.div}
              variants={subHeadingVariants}
              initial="hidden"
              animate="visible"
            >
              Been working as a freelancer and software engineer on the web
              world. Excited for the upcoming opportunities. I talk about my
              journey on
              <Link href="https://twitter.com/surajnarsale_">
                <a style={{ textDecoration: "none" }} target="_blank">
                  <Twitter> Twitter </Twitter>
                </a>
              </Link>
              commit code to
              <Link href="https://github.com/surajnarsale">
                <a style={{ textDecoration: "none" }} target="_blank">
                  <Github> Github </Github>
                </a>
              </Link>
              , and take shots on
              <Link href="https://dribbble.com/surajnarsale">
                <a style={{ textDecoration: "none" }} target="_blank">
                  <Dribble> Dribble </Dribble>
                </a>
              </Link>
              .
            </Subtitle>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}
