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
`;

const MigTooFig = () => {
  return (
    <>
      <HeroSection>Expedia Cars</HeroSection>
      <div style={{ backgroundColor: "#00806e" }}>
        <Wrapper>hello</Wrapper>
      </div>
    </>
  );
};

export default MigTooFig;
