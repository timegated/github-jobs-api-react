import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 75px;
  left: 15%;
  max-width: 960px;
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
  border-right: 3px solid var(--secondary-dark-darkgray);

  &:last-child {
    border-right: none;
  }

  p {
    font-size: 12px;
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
`;

const SearchButton = styled.button`
  border: none;
  background:var(--primary-violet);
  color: var(--secondary-white);
  border-radius: 15px;
  padding: 1rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Searchbar = () => {
  return (
    <>
      <SearchForm>
        <FormGroup>
          <Input type="text" name="jobtype" placeholder="Filter by title, companies, expertise..." />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="location" placeholder="Filter by location..." />
        </FormGroup>
        <FormGroup>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Input type="checkbox" value="Full Time Only" name="fulltime" />
          <p>Full Time Only</p>
          </div>
          <SearchButton>Search</SearchButton>
        </FormGroup>
      </SearchForm>
    </>
  );
};

export default Searchbar;
