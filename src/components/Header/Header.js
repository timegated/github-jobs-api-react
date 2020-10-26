import React from 'react';
import Searchbar from './Searchbar/Searchbar';
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

const LogoContainer = styled.img`
  max-width: fit-content;
`;

// Header --> ToggleButton --> SearchBar

const Header = () => {
  return (
    <HeaderContainer>
          <LogoContainer src={logo} alt="Devjobs logo" />
          <Searchbar />
    </HeaderContainer>
  );
};

export default Header;
