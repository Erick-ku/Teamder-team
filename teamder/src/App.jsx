import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Components/inicio.jsx/Figma/components/Login';
import { SignUp } from './Components/inicio.jsx/Figma/components/SignUp';
import { ForgotPassword } from './Components/inicio.jsx/Figma/components/ForgotPassword';
import { MainMenu } from './Components/inicio.jsx/Figma/components/MainMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Registro */}
        <Route path="/registro" element={<SignUp />} />

        {/* Recuperar Contraseña */}
        <Route path="/recuperar" element={<ForgotPassword />} />

        {/* Inicio / Dashboard */}
        <Route path="/inicio" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;