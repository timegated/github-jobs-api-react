import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../context/jobsContext';
import Header from '../Header/Header';
import styled from 'styled-components';

const JobPost = (props) => {
  const jobsContext = useContext(JobsContext);

  const { jobs, singleJob, singleJobPost } = jobsContext;

  console.log('Properties of JobPost', props);
  console.log(jobs);

  // useEffect(() => {
  //   singleJobPost(jobs.id);
  // }, []);
  
  return (
    <>
      <Header />
        {jobs.id}
      
    </>
  );
};

export default JobPost;
