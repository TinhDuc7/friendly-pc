import { useState, createContext, useEffect } from 'react';
import './App.scss';
import { Contact } from './components/Contact/Location/Contact';
import MapboxFriendlyPC from './components/Contact/Location/MapboxFriendlyPC';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './theme/theme.scss';
import Products from './components/Products/Products';
import Product from './components/Products/Product';

// Theme dark mode

export const ThemeContext = createContext(
  {
    themeValue: null,
    setThemeValue: (boLValue) => { },

    language: null,
    setLanguage: () => { },
  }
);

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'VI');

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  return (

    //* Theme dark mode *
    <ThemeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (boLValue) => { setTheme(boLValue) },
      language: language,
      setLanguage: (language) => { setLanguage(language) }
    }}>

      <div className={`App ${theme}`}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
