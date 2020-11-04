import React, { useContext, useEffect, useState } from 'react';
import SingleJobContext from '../../context/singleJobContext/singleJobContext';
import JobPostHeader from './JobPostHeader';
import Loading from '../Loading/Loading';
import ReactHtmlParser from 'react-html-parser';
import bgImage from '../../assets/desktop/bg-pattern-detail-footer.svg';
import styled from 'styled-components';



const JobPostBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 768px;
  margin: auto;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 15px;

  .job-body-post {
    display: flex;
    flex-direction: column;
  }
`;

const HowToApply = styled.section`
    max-width: 768px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    color: var(--secondary-white);
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    a {
      color: var(--secondary-white);
    }
 
`;



const JobPost = () => {
  const singleJobContext = useContext(SingleJobContext);

  const { singleJob, singleJobPost } = singleJobContext;

  const id = localStorage.getItem('singleJob');

  useEffect(() => {
    if(singleJob !== null) return singleJobPost(id)
  }, [singleJob])

  const renderSingleJobPostHeader = (obj) => {
    if (obj !== null) {
      const { company_logo, company, company_url } = singleJob;
      return (
        <JobPostHeader
          company={company}
          company_logo={company_logo}
          company_url={company_url} />
      )
    }
    return (
      <>
        <Loading />
      </>
    )
  }

  const renderSingleJobPostBody = (obj) => {
    if (obj !== null) {
      const { description, how_to_apply, title, type } = singleJob;
      return (
        <>
          <JobPostBody>
            <section className="job-body-post">
              <h2>{title}</h2>
              <h3>{type}</h3>
              <p>{ReactHtmlParser(description)}</p>
            </section>
          </JobPostBody>
          <HowToApply>
            <h3>How To Apply</h3>
            {ReactHtmlParser(how_to_apply)}
          </HowToApply>
        </>
      )
    }
    return
  }
  return (
    <>
      {renderSingleJobPostHeader(singleJob)}
      {renderSingleJobPostBody(singleJob)}
    </>
  );
};

export default JobPost;
