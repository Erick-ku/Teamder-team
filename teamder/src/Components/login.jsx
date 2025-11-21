import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login con:", email);
    if (onLogin) onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        
        {/* Logo y título */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            {/* Usamos el logo de Vite que SIEMPRE existe en /vite.svg */}
            <img
              src="/vite.svg" 
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-purple-600 font-semibold text-xl">Bienvenido a Teamder</p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative mt-10">
          
          {/* Icono flotante arriba */}
          <div className="flex justify-center mb-6 -mt-16 absolute top-0 left-0 right-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-white shadow-xl">
              <User className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="mt-6"> 
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email */}
              <div>
                <label className="block text-purple-800 mb-2 font-medium">Correo electrónico</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-purple-50 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-purple-800 mb-2 font-medium">Contraseña</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-purple-50 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 cursor-pointer border-none bg-transparent"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all cursor-pointer border-none"
              >
                Iniciar Sesión
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}