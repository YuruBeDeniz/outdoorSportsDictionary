import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
    <h1>Hello world</h1>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
