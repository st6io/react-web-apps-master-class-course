import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeAlt } from './theme';

import ProgressWithVariantTheme from '../components/ProgressWithVariantTheme';

const ProgressWithVariantThemeDemo = () => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleClick = () => {
    setCurrentTheme(
      currentTheme === theme ? themeAlt : theme,
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <h3>Progress bars</h3>
        <ProgressWithVariantTheme />

        <ProgressWithVariantTheme
          percentage={25}
          variant="primary"
        />

        <ProgressWithVariantTheme
          percentage={50}
          variant="error"
        />

        <ProgressWithVariantTheme
          percentage={100}
          variant="success"
        />

        <button onClick={handleClick}>Change theme</button>
      </>
    </ThemeProvider>
  );
};

export default ProgressWithVariantThemeDemo;
