import { useState, useEffect } from 'react';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import MobileNav from './components/MobileNav/MobileNav';
import NavLeft from './components/NavLeft/NavLeft';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (width === 0) {
      setWidth(window.innerWidth)
    }
  }, [])
  
  return (
    <div>
      {width > 600 ? <NavLeft/> : <MobileNav/>}
      <Canvas width={width} />
      <Spinner width={width} />
    </div>
  );
}

export default App;
