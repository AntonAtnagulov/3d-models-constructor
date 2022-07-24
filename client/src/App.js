import './App.css';
import Canvas from './components/Canvas/Canvas';
import NavLeft from './components/NavLeft/NavLeft';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <div>
      <NavLeft/>
      <Canvas />
      <Spinner />
    </div>
  );
}

export default App;
