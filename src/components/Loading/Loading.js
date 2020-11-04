import React from 'react';
import styled from 'styled-components';

const AnimateLoading = styled.h3`
  text-align: center;
  .animated-dot-1 {
    animation: blinking 0.6s infinite;
  }
  .animated-dot-2 {
    animation: blinking 0.8s infinite;
  }
  .animated-dot-3 {
    animation: blinking 0.9s infinite;
  }

  @keyframes blinking {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .50;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <AnimateLoading>
      Loading <span className="animated-dot-1">.</span><span className="animated-dot-2">.</span><span className="animated-dot-3">.</span>
    </AnimateLoading>
  )
;
};

export default Loading;
