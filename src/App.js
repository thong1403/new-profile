import './App.css';
import HomePage from './components/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/concact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
