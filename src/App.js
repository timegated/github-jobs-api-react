import React, { useContext } from 'react'
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useToggleModes } from './hooks/useToggleModes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/GlobalStyle';
import { lightTheme, darkTheme } from './components/Theme/Themes';


import { Buffer } from 'buffer';
global.Buffer = Buffer;

const App = () => {
  const [theme, themeToggle] = useToggleModes();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
          <Header themeToggle={themeToggle} />
          <Router>
            <Switch>
              <Route path='/job/:id' component={JobPost} />
              <Route exact path='/' component={Main} />
            </Switch>
          </Router>
    </ThemeProvider>
  )
};

export default App;
