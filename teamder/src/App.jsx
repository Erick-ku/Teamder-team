import { BrowserRouter, Routes, Route } from 'react-router-dom';



import { Login } from './Components/inicio.jsx/Figma/components/Login';
import { SignUp } from './Components/inicio.jsx/Figma/components/SignUp';
import { ForgotPassword } from './Components/inicio.jsx/Figma/components/ForgotPassword';
import { MainMenu } from './Components/inicio.jsx/Figma/components/MainMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login sigue siendo la página principal */}
        <Route path="/" element={<Login />} />

        {/* Registro usa el componente SignUp */}
        <Route path="/registro" element={<SignUp />} />

        {/* Recuperar usa el componente ForgotPassword */}
        <Route path="/recuperar" element={<ForgotPassword />} />

        {/* Inicio (Dashboard) usa el componente MainMenu */}
        <Route path="/inicio" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;