import './App.css';
import Canvas from './components/Canvas/Canvas';
import ParamMenu from './components/ParamMenu/ParamMenu';
import InfoBox from './components/Elements/InfoBox';

import NavLeft from './components/NavLeft/NavLeft';

function App() {
  return (
    <div>
      <NavLeft/>
      <Canvas />
    </div>
  );
}

export default App;
