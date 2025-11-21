import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import teamderLogo from 'figma:asset/5b545e66f6c269c7e1d20d0231f9f7a657db4258.png';

interface LoginProps {
  onLogin: () => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

export function Login({ onLogin, onForgotPassword, onSignUp }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo y título */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo de Teamder */}
          <div className="w-40 h-40 mb-4">
            <img 
              src={teamderLogo} 
              alt="Teamder Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-purple-600">Bienvenido de nuevo</p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Avatar de usuario */}
          <div className="flex justify-center mb-6 -mt-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-white shadow-xl">
              <User className="w-12 h-12 text-white" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Correo electrónico */}
            <div>
              <label className="block text-purple-800 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <Input
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-purple-50/50 border-purple-200 focus:border-purple-400 rounded-lg h-12"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-purple-800 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                  <Lock className="w-5 h-5" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-purple-50/50 border-purple-200 focus:border-purple-400 rounded-lg h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* ¿Olvidaste tu contraseña? */}
            <div className="text-center">
              <button
                type="button"
                className="text-purple-600 hover:text-purple-800 transition-colors"
                onClick={onForgotPassword}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Botón Iniciar sesión */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg h-12 shadow-lg"
            >
              Iniciar sesión
            </Button>

            {/* Separador */}
            <div className="text-center text-purple-400">o</div>

            {/* Botón Crear cuenta */}
            <Button
              type="button"
              variant="outline"
              className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 rounded-lg h-12"
              onClick={onSignUp}
            >
              Crear una cuenta
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-400">Teamderteam</p>
        </div>
      </div>
    </div>
  );
}