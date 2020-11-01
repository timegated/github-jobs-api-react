import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../context/jobsContext';
import styled from 'styled-components';

const JobPost = () => {
  const jobsContext = useContext(JobsContext);

  const { singleJob, singleJobPost } = jobsContext;

  useEffect(() => {
    singleJobPost('8dec62ca-a394-493a-9c18-0f1a186a3f86');
  },[]);
  return (
    <div>
      <h1>Single Job Post page</h1>
    </div>
  );
};

export default JobPost;
