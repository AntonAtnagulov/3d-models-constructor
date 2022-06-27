import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import ParamMenu from './components/ParamMenu/ParamMenu';
import { useState } from 'react';

function App() {
  const [cannonName, setCannonName] = useState('battle-cannon')
  return (
    <div>
      <Canvas cannonName={cannonName} setCannonName={setCannonName}/>
      <ParamMenu cannonName={cannonName} setCannonName={setCannonName}/>
    </div>
  );
}

export default App;
