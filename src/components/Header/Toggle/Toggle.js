import React, { useState } from 'react';
import styled from 'styled-components';


const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToggleBar = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: var(--secondary-white);
  height: 34px;
  width: 75px;
  border-radius: 15px;
  padding: 1rem;
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
  background-color: var(--primary-violet);
  z-index: 2;
  transform: ${props => props.toggled ? 'translateX(30px)' : 'translateX(0px)'};
`;

const ToggleBg = styled.div``;


const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };
    return (
      <>
        <ToggleWrapper>
          <ToggleBar onClick={handleToggle} >
            <ToggleBall toggled={isToggled} />
          </ToggleBar>
        </ToggleWrapper>
        </>
    );
};

export default Toggle;
