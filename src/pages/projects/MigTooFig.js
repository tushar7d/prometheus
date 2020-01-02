import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  height: 70vh;
  background-color: white;
  padding: 16px;
`;
const Wrapper = styled.div`
  min-width: 320px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 16px;
`;

const MigTooFig = () => {
  return (
    <>
      <HeroSection>Migration to Figma</HeroSection>
      <div style={{ backgroundColor: "#00806e" }}>
        <Wrapper>
          <div>YouTube creates a new generation</div>
          <div>
            For a generation who spend the majority of their life online and are
            heavily influenced by video content they find there, YouTube
            Creators for Change provides a counter-narrative to combat
            extremism, hate speech, and xenophobia they encounter. We set out to
            develop a new Brand Positioning and Visual Identity that felt as
            fresh, bold and empowering as the platform itself, connecting with
            Creators, the YouTube generation and beyond. Creators are the heart
            and soul of Creators for Change. Their talented and passionate
            voices bravely speaking out against hate and extremism online.
            That’s why the Visual Identity we designed took its inspiration from
            this idea of creators positively “hacking” the existing narrative.
            Overwriting this with their own bolder, louder and more vibrant
            counter-narrative.
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default MigTooFig;
