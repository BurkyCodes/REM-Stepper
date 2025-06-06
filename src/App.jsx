import { useEffect } from 'react';
import './App.css'
import Layout from './Layout/Layout'

function App() {
 useEffect(() => {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);

  return () => {
    window.removeEventListener('resize', setVH);
  };
}, []);


  return (
    <>
     <Layout />
    </>
  )
}

export default App
