import React from "react";
import styled from "styled-components";
import { colors } from "../UI/StyleVariables";
import Title from "../UI/Title";

const IntroContainer = styled.div`
  position: flex;
  background-color: ${colors.secondary};

  & h1 {
    color: ${colors.primary};
  }
  & .fab {
    color: ${colors.primaryFaded};
  }
`;

const Intro = () => {
  return (
    <IntroContainer>
      <Title
        icon={<i className="fab fa-connectdevelop"></i>}
        title={"Get into my Brain"}
        lineColor={colors.primaryFaded}
      />
    </IntroContainer>
  );
};

export default Intro;
