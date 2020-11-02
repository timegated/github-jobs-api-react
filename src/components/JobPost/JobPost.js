import React, { useContext, useEffect, useState } from 'react';
import SingleJobContext from '../../context/singleJobContext/singleJobContext';
import Header from '../Header/Header';
import styled from 'styled-components';

const JobPostHeading = styled.section`
  display: flex;
  width: 750px;
  margin: auto;

  .img-container {
    flex: 1 0 20%;
  }
  .company-name {
    display: flex;
    flex-direction: column;
    flex: 1 0 60%;
  }
  .button-container {
    flex: 1 0 20%;
  }
`;

const JobPostBody = styled.section``;



const JobPost = () => {
  const singleJobContext = useContext(SingleJobContext);

  const { singleJob, singleJobPost } = singleJobContext;

  const renderSingleJobPost = (obj) => {
    if (obj !== null) {
      const { company_logo, company, company_url } = singleJob;
      return (<>
        <div className="img-container">
          <img src={company_logo} alt="company logo" srcSet="" width={150} height={150}/>
      </div>
      <div className="company-name">
        <h1>{company}</h1>
        <p>{company_url}</p>
      </div>
      <div className="button-container">
        <button>
          <a href={company.url}>Company Site</a>
        </button>
          </div>
        </>)
    }
    return 'Haha, no jobs here';
  }
  return (
    <>
      <Header />
      <JobPostHeading>
        {renderSingleJobPost(singleJob)}
      </JobPostHeading>
      
    </>
  );
};

export default JobPost;
