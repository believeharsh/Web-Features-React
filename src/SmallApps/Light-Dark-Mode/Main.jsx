// import React, { useState } from 'react'
// import UseLightDark from './UseLightDark'
// import "./Theme.css"

// const LightDarkMode = () => {

//     const [theme, setTheme] = UseLightDark('theme', 'dark') ; 

//     const handleToggleTheme = () => {
//         setTheme(theme == 'dark' ? 'light' : 'dark') ; 
//     }
//     console.log(theme) ; 
//   return (
//     <div className="light-dark-mode" data-theme={theme}>
//     <div className="container">
//       <p>Hello World !</p>
//       <button onClick={handleToggleTheme}>Change Theme</button>
//     </div>
//   </div>
//   )
// }

// export default LightDarkMode


import React from 'react';
import UseLightDark from './UseLightDark';

const LightDarkMode = () => {
  const [theme, setTheme] = UseLightDark('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'light');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center transition-colors duration-500 bg-white dark:bg-black">
      <p className="text-black dark:text-white text-2xl font-bold">
        Hello World!
      </p>
      <button
        onClick={handleToggleTheme}
        className="px-6 py-2 mt-4 rounded-lg bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
      >
        Change Theme
      </button>
    </div>
  );
};

export default LightDarkMode;

