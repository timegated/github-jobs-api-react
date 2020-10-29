import React from 'react'
import Header from './components/Header/Header';
const { log } = console;
const App = (props) => {
  
  log('Properties from store inside App.js: ', props);
  return (
    <>
    <Header />
    </>
  )
}

export default App;
