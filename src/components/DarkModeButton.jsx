// ThemeToggleButton.jsx
import { useState } from 'react';

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="relative w-20 h-10 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer flex items-center justify-center" onClick={toggleDarkMode}>
      <div
        className={`absolute top-0 left-0 w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${darkMode ? 'translate-x-12 bg-gray-800' : 'bg-yellow-400'}`}
      >
        {darkMode ? (
          <img src="../../public/svg/luna.svg" alt="" />
        ) : (
          <img src="../../public/svg/sol.svg" alt="" />
        )}
      </div>
    </div>
  );
}
