import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Intro from './components/Intro/Intro';
function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Intro/>}/>
    </Routes>
   </>
  );
}

export default App;
