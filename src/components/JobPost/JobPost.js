import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../context/jobsContext';
import styled from 'styled-components';

const JobPost = () => {
  const jobsContext = useContext(JobsContext);

  const { singleJob } = jobsContext;

  console.log(singleJob);
  return (
    <div>
      <h1>Single Job Post page</h1>
    </div>
  );
};

export default JobPost;
