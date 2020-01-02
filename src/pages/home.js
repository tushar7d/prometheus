import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  padding: 24px;
  margin: 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: none;

  @media screen and (min-width: 320px) {
    padding: 24px;
    margin: 16px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 0.7px 1.6px rgba(0, 0, 0, 0.017),
      0 1.9px 4.4px rgba(0, 0, 0, 0.025), 0 4.5px 10.6px rgba(0, 0, 0, 0.033),
      0 15px 35px rgba(0, 0, 0, 0.05);
  }
  @media screen and (min-width: 412px) {
    margin: 16px;
    border-radius: 8px;
    height: 50vh;
    box-shadow: 0 0.7px 1.6px rgba(0, 0, 0, 0.017),
      0 1.9px 4.4px rgba(0, 0, 0, 0.025), 0 4.5px 10.6px rgba(0, 0, 0, 0.033),
      0 15px 35px rgba(0, 0, 0, 0.05);
  }

  @media screen and (min-width: 769px) {
    margin: 0px;
    border-radius: 0px;
    height: 70vh;
    box-shadow: none;
  }
  @media screen and (min-width: 1025px) {
    margin: 0px;
    border-radius: 0px;
    height: 100vh;
    box-shadow: none;
  }
`;

const CardContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0.7px 1.6px rgba(0, 0, 0, 0.017),
    0 1.9px 4.4px rgba(0, 0, 0, 0.025), 0 4.5px 10.6px rgba(0, 0, 0, 0.033),
    0 15px 35px rgba(0, 0, 0, 0.05);
`;

const Circle = styled.div`
  border-radius: 1000px;
  width: 70px;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 21px;
`;

const Paragraph = styled.div`
  line-height: 1.4;
  margin-top: 12px;
  opacity: 0.58;
`;

const AboutSection = () => {
  return (
    <Container>
      <Circle>
        <h1>Hi</h1>
      </Circle>
      <Paragraph>
        I am tushar a product designer and a design technologist from New Delhi.
        I love crafting specialised design tools and prototyping. When I am not
        designing things or tinkering with code, I Like to read (sometimes
        listen) to books, watch a lot of anime and spend time with my wife
        travelling the world.
      </Paragraph>
    </Container>
  );
};

const Banner = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: grey;
  height: 200px;
`;

const Section = styled.div`
  padding: 16px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Heading = styled.div`
  margin: 16px;
  margin-top: 32px;
  font-size: 21px;
  font-weight: 600;
`;

const ProjectSection = () => {
  return (
    <div>
      <Heading>Whats on my mind!</Heading>

      <CardGrid>
        <Link to="/migration-tools-figma">
          <CardContainer>
            <Banner />
            <Section>Making Migrations Easy</Section>
          </CardContainer>
        </Link>
        <Link to="/expedia-cars-redesign">
          <CardContainer>
            <Banner />
            <Section>Renting cars with confidence</Section>
          </CardContainer>
        </Link>
        <Link to="/expedia-cars-redesign">
          <CardContainer>
            <Banner />
            <Section>hello</Section>
          </CardContainer>
        </Link>
      </CardGrid>
    </div>
  );
};

const Wrapper = styled.div`
  min-width: 320px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <>
      <AboutSection />
      <Wrapper>
        <ProjectSection />
      </Wrapper>
    </>
  );
};

export default Home;
