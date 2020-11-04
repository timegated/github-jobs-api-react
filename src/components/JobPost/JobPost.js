import React, { useContext, useEffect, useState } from 'react';
import SingleJobContext from '../../context/singleJobContext/singleJobContext';
import Loading from '../Loading/Loading';
import ReactHtmlParser from 'react-html-parser';
import bgImage from '../../assets/desktop/bg-pattern-detail-footer.svg';
import styled from 'styled-components';

const JobPostHeading = styled.section`
  position: relative;
  top: -50px;
  display: flex;
  max-width: 768px;
  margin: auto;
  align-items: center;
  background: ${({theme}) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 10px;

  .img-container {
    flex: 1 0 20%;
    background: ${({theme}) => theme.cardBg}
  }
  .company-name {
    display: flex;
    flex-direction: column;
    flex: 1 0 60%;
    margin-left: 1.5rem;
  }
  .button-container {
    flex: 1 0 20%;
    background: ${({ theme }) => theme.cardBg};
    a {
      color: ${({theme}) => theme.text}
    }
  }
`;

const JobPostBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 768px;
  margin: auto;
  background-color: ${({theme}) => theme.cardBg};
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



const JobPost = (props) => {
  const singleJobContext = useContext(SingleJobContext);

  const { singleJob, singleJobPost } = singleJobContext;

  const id = localStorage.getItem('singleJob');

  useEffect(() => {
    singleJobPost(id)
  }, [])

  const renderSingleJobPostHeader = (obj) => {
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
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <>
      <JobPostHeading>
        {renderSingleJobPostHeader(singleJob)}
      </JobPostHeading>
        {renderSingleJobPostBody(singleJob)}
    </>
  );
};

export default JobPost;
