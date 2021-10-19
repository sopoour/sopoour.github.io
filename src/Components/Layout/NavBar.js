import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../UI/StyleVariables";

const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  transition: all 0.5s ease-in;
  background: ${colors.primary};
  color: ${colors.secondary};
  padding: 0 1rem 0 1rem;

  &.scrolled {
    color: ${colors.secondayText};
    background: ${colors.primaryFaded};
  }
`;

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navClasses = scrolled ? "scrolled" : "";

  return (
    <React.Fragment>
      <Nav className={navClasses}>
        <h1>SA</h1>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
