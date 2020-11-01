import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../context/jobsContext';
import Header from '../Header/Header';
import styled from 'styled-components';

const JobPost = (props) => {
  const jobsContext = useContext(JobsContext);

  const { jobs, singleJob, singleJobPost } = jobsContext;
  console.log(jobs);
  return (
    <>
      <Header />
        {jobs.id}
      
    </>
  );
};

export default JobPost;
