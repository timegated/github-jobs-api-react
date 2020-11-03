import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import JobsContext from '../../context/jobsContext/jobsContext';
import SingleJobContext from '../../context/singleJobContext/singleJobContext';
import { convertDate } from '../../utils/convertDates';
import { sortJobs } from '../../utils/sortJobs';
import styled from 'styled-components';

const JobCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10rem;
  justify-content: center;

  @media (max-width: 320px) {
    margin: 0 auto;
  }
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin: 1.25rem;
  padding: 0.75rem;
  flex: 1 0 25%;
  background: var(--secondary-white);
  border-radius: 15px;
  max-width: 450px;
  box-shadow: 1px 1px 3px #000;
  
  .job-company-logo {
    position: relative;
    top: -15%;
    left: 10%;
  }
  .job-time-type {
    display: inline-flex;
    justify-content: flex-start;

    p {
      margin: 0.25em;
    }
  }

  .job-link {
    text-decoration: none;
    color: var(--primary-dark-midnight);
    margin: 1.5rem 0;

    &:hover {
      color: var(--secondary-dark-gray);
      transition: all 0.2s ease-in;
    }
  }
  @media (min-width: 768px) {
    flex: 1 0 50%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    flex: 1 0 50%;
  }
`;

const NoJobsHere = styled.h1`
  width: 50%;
  margin: 10rem auto;
`;

const Main = () => {

  const jobsContext = useContext(JobsContext);
  const singleJobContext = useContext(SingleJobContext);

  const { jobs, loadJobsInitial } = jobsContext;
  const { singleJobPost } = singleJobContext;

  useEffect(() => {
    loadJobsInitial();
  },[]);

  return (
    <>
      <Header />
      {jobs === null ? <NoJobsHere>No Jobs Here Yet</NoJobsHere>
        : <JobCardContainer>
          {sortJobs(jobs, convertDate).map(job => {
            return (
              <JobCard key={job.id}>
                <img className="job-company-logo" src={job.company_logo} alt="The companies logo" width={50} height={50} />
                <div className="job-time-type">
                  <p>{convertDate(job.created_at)}h ago</p> {" "} <p>{job.type}</p>
                </div>
                  <Link className="job-link" to={`/job/${job.id}`} onClick={() => singleJobPost(job.id)}>{job.title}</Link>
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
