import React, { useContext, useEffect } from 'react';
import JobsContext from '../../context/jobsContext';
import styled from 'styled-components';

const JobCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10rem;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: .75rem;
  flex: 1 0 25%;
  background: var(--secondary-white);
  border-radius: 15px;

  .job-company-logo {
    position: relative;
    top: -15px;
    left: 10%;
  }
  .job-time-type {
    display: flex;
    justify-content: center;
  }
`;

const NoJobsHere = styled.h1`
  width: 50%;
  margin: 10rem auto;
`;

const Main = () => {

  const jobsContext = useContext(JobsContext);
  const { jobs, loadJobsInitial } = jobsContext;

  useEffect(() => {
    loadJobsInitial();
  }, []);
  console.log(Date.now());
  return (
    <>
      {jobs.length === 0 ? <NoJobsHere>No Jobs Here Yet</NoJobsHere>
        : <JobCardContainer>
          {jobs.map(job => {
            return (
              <JobCard key={job.id}>
                <img className="job-company-logo" src={job.company_logo} alt="The companies logo" width={50} height={50} />
                <div className="job-time-type">
                  <p>{job.created_at}</p> {" "} <p>{job.type}</p>

                </div>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </JobCard>
            )
          })}
         

          </JobCardContainer>}
    </>
  );
};

export default Main;
