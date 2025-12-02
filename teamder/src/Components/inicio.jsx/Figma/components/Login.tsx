import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos el GPS
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import teamderLogo from '../../../assets/logo.png';

// Borramos las "Props" que ya no sirven (onLogin, etc.)
export function Login() {
  const navigate = useNavigate(); // 2. Activamos el GPS
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Esta función maneja el botón morado
  const handleLogin = () => {
    // Aquí podríamos validar que escribiste algo, pero por ahora:
    console.log("Navegando al inicio..."); // Esto saldrá en la consola (F12)
    navigate('/inicio'); // 3. ¡VÁMONOS!
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        
        {/* Logo y Título */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-40 h-40 mb-4">
             <img 
               src={teamderLogo} 
               alt="Teamder Logo" 
               className="w-full h-full object-contain"
             />
          </div>
          <h2 className="text-purple-600 font-medium">Bienvenido de nuevo</h2>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative mt-10">
          {/* Icono de usuario flotante */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="w-8 h-8 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-6">
            {/* Campo Email */}
            <div className="space-y-2">
              <label className="text-sm text-purple-700">Correo electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                <Input 
                  type="email" 
                  placeholder="ejemplo@gmail.com" 
                  className="pl-10 border-purple-100 focus:border-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <label className="text-sm text-purple-700">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                <Input 
                  type={showPassword ? "text" : "password"} 
                  className="pl-10 border-purple-100 focus:border-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Olvidé contraseña */}
            <div className="flex justify-center">
              <button 
                type="button"
                onClick={() => navigate('/recuperar')}
                className="text-sm text-purple-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* BOTÓN MORADO DE INICIO */}
            <Button 
              type="button" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>

            <div className="flex justify-center">
              <span className="text-purple-300 text-xs">o</span>
            </div>

            {/* Botón Crear Cuenta */}
            <Button 
              variant="outline" 
              className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={() => navigate('/registro')}
            >
              Crear una cuenta
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-purple-300 text-sm">Teamderteam</p>
        </div>
      </div>
    </div>
  );
}