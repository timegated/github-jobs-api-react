import { useEffect, useState } from 'react';

export const useToggleModes = () => {
  const [theme, setTheme] = useState('light');
  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  return [theme, themeToggle];
};