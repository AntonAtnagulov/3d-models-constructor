import './App.css';
import Canvas from './components/Canvas/Canvas';
import ParamMenu from './components/ParamMenu/ParamMenu';
import InfoBox from './components/Elements/InfoBox';
import { useSelector } from 'react-redux';

function App() {
  const infoBox = useSelector(store => store.infoBox)

  return (
    <div>
      <Canvas />
      <ParamMenu/>
      { infoBox && <InfoBox/> }
    </div>
  );
}

export default App;
