import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #FFF;
    border-radius: 15px;
`;

const ToggleLabel = styled.label`
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;

    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox]:checked + .round {
        background: blue;
    }

    input[type=checkbox]:checked + .round:before {
        transform: translateX(26px);
    }
`;

const Slider = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    right: 0;
    top: 0;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
        background: #000000;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
        border-radius: 34px;
    }

    &:after {
        border-radius: 50px;
    }
`;


const Toggle = () => {
    return (
        <>
        <ToggleWrapper>
              <ToggleLabel for="checkbox">
                <input type="checkbox"/>
                <Slider className="round"></Slider>
              </ToggleLabel>
        </ToggleWrapper>  
        </>
    );
};

export default Toggle;
