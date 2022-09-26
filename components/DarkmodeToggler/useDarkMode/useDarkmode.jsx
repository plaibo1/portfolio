import { useEffect, useState } from 'react'


const useDarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    console.log(localStorage.theme === 'dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {

    console.log('123')

    const html = window.document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);
    
    localStorage.setItem("theme", nextTheme)

}, [isDarkMode]);

  return [isDarkMode, toggleDarkMode]
}

export default useDarkMode