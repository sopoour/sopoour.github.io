import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
  text-align: center;
  font-size: 35px;
`;

const Title = (props) => {
  const LineStyle = styled.hr`
    width: 10%;
    border-width: thick;
    border-color: ${props.lineColor};
    text-align: center;
    margin: 0 auto;
    padding-bottom: 20px;
  `;
  return (
    <React.Fragment>
      <TitleStyle>
        {props.icon} {props.title}
      </TitleStyle>
      <LineStyle />
    </React.Fragment>
  );
};

export default Title;
