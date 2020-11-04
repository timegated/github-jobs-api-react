import React from 'react'
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
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

  const [theme, mountedComponent] = useToggleModes();
  console.log('Theme value from useToggleModes', theme);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  console.log('Theme Mode that should return an object',themeMode);
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <JobState>
          <SingleJobState>
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
