import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login'; 
import Dashboard from './Components/inicio.jsx/Figma/App'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Dashboard />} />
        <Route path="/registro" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;