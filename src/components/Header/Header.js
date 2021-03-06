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
  border-radius: 0 0 0 100px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 100%;
  height: 20vh;
`;

const Logo = styled.img`
  max-width: fit-content;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header = ({ themeToggle }) => {
  const location = window.location.pathname;
  return (
    <HeaderContainer>
        <ToggleContainer>
          <Logo src={logo} alt="Devjobs logo" />
        <Toggle themeToggle={themeToggle}/>
      </ToggleContainer>
      {location === '/' ? <Searchbar /> : null}
    </HeaderContainer>
  );
};

export default Header;
