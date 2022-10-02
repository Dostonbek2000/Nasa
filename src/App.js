import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ParticlesPAge from './components/Particles/Particles';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';


const App = () => {
  

  return (
    <BrowserRouter>
       <Routes>
          <Route path='/'  element={<ParticlesPAge />}/>
          <Route path='/home'  element={<Home />}/>
          <Route path='/detail'  element={<Detail />}/>
       </Routes>
    </BrowserRouter>
  );
};

export default App