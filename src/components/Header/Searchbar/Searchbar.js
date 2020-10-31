import React, { useContext, useEffect, useState } from 'react';
import JobsContext from '../../../context/jobsContext';
import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 75px;
  margin: auto;
  width: 75vw;
  max-width: 1200px;
  min-width: 320px;
  background: var(--secondary-white);
  align-items: center;
  border-radius: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--secondary-white);
  flex: 1 0 30%;
  
  border-radius: 15px;

  &:last-child {
    border-right: none;
  }

  p {
    font-size: 14px;
    flex: 1 0 75%;
  } 

  input[type=checkbox] {
    flex: 1 0 25%;
  }

`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  border-right: 1px solid var(--secondary-dark-darkgray);
`;

const SearchButton = styled.button`
  border: none;
  background:var(--primary-violet);
  color: var(--secondary-white);
  border-radius: 15px;
  padding: 1rem 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Searchbar = (props) => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    fulltime: false
  });

  const jobsContext = useContext(JobsContext);

  const { jobs, loadJobsInitial } = jobsContext;
  
  console.log(jobsContext);

  // Dispatch actions here 
  const onChange = (e) => {
    
  };

  const onSubmit = (e) => {
    // Request made to the API to return the jobs (array);

    e.preventDefault();
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <FormGroup>
          <Input onChange={onChange} type="text" name="description" placeholder="Filter by title, companies, expertise..." />
        </FormGroup>
        <FormGroup>
          <Input onChange={onChange} type="text" name="location" placeholder="Filter by location..." />
        </FormGroup>
        <FormGroup>
          <div style={{display: 'flex', alignItems: 'center'}}>
          {/* <Input onChange={onChange} type="checkbox" value={fulltime ? true : false} /> */}
          <p>Full Time Only</p>
          </div>
          <SearchButton>Search</SearchButton>
        </FormGroup>
      </SearchForm>
    </>
  );
};

export default Searchbar;
