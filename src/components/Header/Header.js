import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Toggle from './Toggle/Toggle';
import styled from 'styled-components';
import desktopHeaderBg from '../../assets/desktop/bg-pattern-header.svg';
import logo from '../../assets/desktop/logo.svg';

const HeaderContainer = styled.header`
  background: url(${desktopHeaderBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0 0 0 80px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 100%;
`;

const Logo = styled.img`
  max-width: fit-content;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

// Component Structure
// Container
// Flex-Parent ->
// Logo + ToggleButton: Justify: Space-between/around : Flex-direction: row;
// Searchbar: Fixed Position: Centered: 3 subsections

const Header = () => {
  return (
    <HeaderContainer>
        <ToggleContainer>
          <Logo src={logo} alt="Devjobs logo" />
          <Toggle />
        </ToggleContainer>
          <Searchbar />
    </HeaderContainer>
  );
};

export default Header;
