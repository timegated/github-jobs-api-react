import React, { useState } from 'react';
import styled from 'styled-components';
import moonIcon from '../../../assets/desktop/icon-moon.svg';
import sunIcon from '../../../assets/desktop/icon-sun.svg';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleBar = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.toggled ? `var(--primary-violet)` : `var(--secondary-white)`};
  height: 34px;
  width: 75px;
  border-radius: 15px;
  border: 1px solid var(--secondary-lightgrey);
  transform: translate3d(0, 0, 0);

  &:hover {
    cursor: pointer;
  }
`;

const ToggleBall = styled.div`
  border-radius: 50%;
  box-shadow: 0px 9px 3px rgba(0,0,0,0.2);
  transition: transform 0.3s cubic-bezier(1, .19, .15, .7);
  transition-delay: 0.1s;
  will-change: transform;
  height: 26px;
  width: 26px;
  background-color: ${props => props.toggled ?  `var(--primary-lightviolet)` : `var(--primary-violet)`};
  z-index: 2;
  transform: ${props => props.toggled ? 'translateX(45px)' : 'translateX(0px)'};
`;


const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  
  const handleToggle = () => {
    setToggled(!isToggled);
  };
    return (
      <>
        <ToggleWrapper>
          <img src={sunIcon} alt="Sun icon for light mode" style={{ flex: '1 0 10%', width: '30px', height: '30px', marginRight: '0.5em'}}/> 
          <ToggleBar onClick={handleToggle} toggle={isToggled} >
            <ToggleBall toggled={isToggled} />
            
          </ToggleBar>
          <img src={moonIcon} alt="Moon icon for dark-mode" style={{flex: '1 0 10%', width: '30px', height: '30px', marginLeft: '0.5em'}} />
        </ToggleWrapper>
        </>
    );
};

export default Toggle;
