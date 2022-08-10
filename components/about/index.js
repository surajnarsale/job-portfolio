import React from "react";
import {
  Left,
  Right,
  Container,
  Wrapper,
  Description,
  Item,
  Title,
  Name,
  Quote,
  Story,
  Services,
  IconWrapper,
} from "./about";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

export default function About() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Item>
              <Services>
                <Title>Product Design</Title>
                <Description>
                  I have experience in developing products from scratch. I can
                  bring an idea to life.
                </Description>
              </Services>
              <IconWrapper>
                <SiAltiumdesigner
                  size={35}
                  style={{ color: "#1bc573", margin: "auto" }}
                />
              </IconWrapper>
            </Item>

            <Item>
              <Services>
                <Title>Front-End</Title>
                <Description>I can build pixel-perfect UI.</Description>
              </Services>
              <IconWrapper>
                <FaCode
                  size={35}
                  style={{ color: "#1bc573", margin: "auto" }}
                />
              </IconWrapper>
            </Item>
            <Item>
              <Services>
                <Title>Back-End</Title>
                <Description>
                  I have hands-on experience on backend. Also have worked with
                  most needed AWS services.
                </Description>
              </Services>
              <IconWrapper>
                <BiSearchAlt
                  size={35}
                  style={{ color: "#1bc573", margin: "auto" }}
                />
              </IconWrapper>
            </Item>
          </Left>
          <Right>
            <Name>
              👋 Hello, I'm <br />
              Suraj Narsale
            </Name>
            <Quote>
              " Every great design begin with an even better story "
            </Quote>
            <Story>
              As a freelancer, I work with web agencies, companies, startups and
              individuals to create a blueprint for the digital business.
            </Story>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
