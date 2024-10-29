import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

export const StyledServiceSection = styled.section`
  min-height: 20rem;
  background-color: #ededed;
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  gap: 15%;
  padding: 1.5rem;
  flex-direction: column;
  align-items: normal;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const HeroSection: React.FC = () => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <StyledServiceSection>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          height: "100%",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Super important heading fr fr</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante.
        </p>
      </div>

      <VideoWrapper>
        <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
      </VideoWrapper>
    </StyledServiceSection>
  );
};

export default HeroSection;
