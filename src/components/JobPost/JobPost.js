import React, { useContext, useEffect, useState } from 'react';
import SingleJobContext from '../../context/singleJobContext/singleJobContext';
import Header from '../Header/Header';
import styled from 'styled-components';

const JobPostHeading = styled.section`
  display: flex;
  width: 750px;
  margin: auto;
  align-items: center;
  background: var(--secondary-white);
  padding: 1.5rem;
  border-radius: 10px;

  .img-container {
    flex: 1 0 20%;
  }
  .company-name {
    display: flex;
    flex-direction: column;
    flex: 1 0 60%;
    margin-left: 1.5rem;
  }
  .button-container {
    flex: 1 0 20%;
  }
`;

const JobPostBody = styled.section``;



const JobPost = () => {
  const singleJobContext = useContext(SingleJobContext);

  const { singleJob, singleJobPost } = singleJobContext;

  // const id = localStorage.getItem('singleJob');

  // useEffect(() => {
  //   singleJobPost(id)
  // }, [])

  const renderSingleJobPost = (obj) => {
    if (obj !== null) {
      const { company_logo, company, company_url } = singleJob;
      return (<>
        <div className="img-container">
          <img src={company_logo} alt="company logo" srcSet="" width={150} height={150}/>
      </div>
      <div className="company-name">
        <h1>{company}</h1>
          <a href={company_url} target="_blank">{company_url}</a>
      </div>
      <div className="button-container">
          <a href={company_url} target="_blank">Company Site</a>
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
