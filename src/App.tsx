import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';

import blue from './styles/colors/blue';
import yellow from './styles/colors/yellow';
import pink from './styles/colors/pink';
import purple from './styles/colors/purple';
import orange from './styles/colors/orange';
import green from './styles/colors/green';

interface ColorProps {
  blue: String;
  yellow: String;
  pink: String;
  purple: String;
  orange: String;
  green: String;
}
function App() {
  const [selectedColor, setSelectedColor] = useState<keyof ColorProps>('green');

  const colors = {
    blue: blue,
    yellow: yellow,
    pink: pink,
    purple: purple,
    orange: orange,
    green: green,
  };
  const toggleColors = (string: any) => {
    setSelectedColor(string);
  };
  return (
    <ThemeProvider theme={colors[selectedColor]}>
      <GlobalStyles />
      <Layout setColors={toggleColors} />
    </ThemeProvider>
  );
}

export default App;
