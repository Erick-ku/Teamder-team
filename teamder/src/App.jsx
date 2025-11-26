import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTS
import { Login } from './Components/inicio.jsx/Figma/components/Login';
import { SignUp } from './Components/inicio.jsx/Figma/components/SignUp';
import { ForgotPassword } from './Components/inicio.jsx/Figma/components/ForgotPassword';

// IMPORTAMOS EL DASHBOARD QUE ACABAMOS DE GUARDAR
import Dashboard from './Components/inicio.jsx/Figma/App'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/recuperar" element={<ForgotPassword />} />
        
        {/* AQUÍ ESTÁ LA MAGIA: Cuando vas a /inicio, muestra el Dashboard */}
        <Route path="/inicio" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;