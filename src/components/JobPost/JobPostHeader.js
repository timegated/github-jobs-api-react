import React from 'react';
import styled from 'styled-components';

const JobPostHeading = styled.section`
  position: relative;
  top: -50px;
  display: flex;
  max-width: 768px;
  margin: auto;
  align-items: center;
  background: ${({theme}) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 10px;

  .img-container {
    flex: 1 0 20%;
    background: ${({ theme }) => theme.cardBg};
    img {
      object-fit: center;
      width: 150px;
      height: 150px;
    }
  }
  .company-name {
    display: flex;
    flex-direction: column;
    flex: 1 0 60%;
    margin-left: 1.5rem;
    a {
      color: ${({theme}) => theme.text};
    }
  }
  .button-container {
    flex: 1 0 20%;
    background: ${({ theme }) => theme.cardBg};
    a {
      color: ${({theme}) => theme.text}
    }
  }
`;

const JobPostHeader = ({ company, company_logo, company_url }) => {
  return (
    <JobPostHeading>
     <div className="img-container">
          <img src={company_logo} alt="company logo" srcSet="" />
      </div>
      <div className="company-name">
        <h1>{company}</h1>
          <a href={company_url} target="_blank">{company_url}</a>
      </div>
      <div className="button-container">
          <a href={company_url} target="_blank">Company Site</a>
          </div> 
    </JobPostHeading>
  );
};

export default JobPostHeader;
