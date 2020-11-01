import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../context/jobsContext/jobsContext';
import Header from '../Header/Header';
import styled from 'styled-components';

const JobPostHeading = styled.section`
  display: flex;

  .img-container {
    flex: 1 0 20%;
  }
`;

const JobPostBody = styled.section``;



const JobPost = (props) => {
  const jobsContext = useContext(JobsContext);

  const { jobs, singleJob } = jobsContext;
  console.log(singleJob);
  return (
    <>
      <Header />
      <JobPostHeading>
        <div className="img-container">
          <img src={jobs.company_logo} alt="company logo" srcset=""/>
        </div>
        <div className="company-name">
          <h1>{jobs.company}</h1>
          <p>{jobs.company_url}</p>
        </div>
        <div className="button-container">
          <button>
            <a href={jobs.company.url}>Company Site</a>
          </button>
        </div>
      </JobPostHeading>        
      
    </>
  );
};

export default JobPost;
