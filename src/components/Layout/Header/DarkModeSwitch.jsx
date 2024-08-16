import React, { useState } from 'react';
import useDarkSide from '../../../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMode } from 'ModeContext';

export default function Switcher() {
  const { toggleMode } = useMode();
  const [theme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(theme === 'light' ? false : true);

  const toggleDarkMode = (checked) => {
    setTheme(theme);
    toggleMode(checked);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
          sunColor="#ffbe58"
          moonColor="gray"
        />
      </div>
    </>
  );
}
