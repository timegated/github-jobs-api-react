import React from 'react'
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useToggleModes } from './hooks/useToggleModes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/GlobalStyle';
import { lightTheme, darkTheme } from './components/Theme/Themes';
import JobState from './context/jobsContext/JobsState';
import SingleJobState from './context/singleJobContext/singleJobState';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

const App = () => {

  const [theme, themeToggle] = useToggleModes();
  console.log('Theme value from useToggleModes', theme);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <JobState>
        <SingleJobState>
          <Header themeToggle={themeToggle} />
            <Router>
              <Switch>
                <Route path='/job/:id' component={JobPost} />
                <Route exact path='/' component={Main} />
              </Switch>
            </Router>
          </SingleJobState>
        </JobState>
    </ThemeProvider>
  )
};

export default App;
