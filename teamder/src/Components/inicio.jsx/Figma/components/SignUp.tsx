import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Mail, ArrowLeft, UserPlus } from 'lucide-react';
import teamderLogo from "../../../assets/logo.png";

interface SignUpProps {
  onBack: () => void;
}

export function SignUp({ onBack }: SignUpProps) {
  const [email, setEmail] = useState('');

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para registro con correo institucional
    alert('Registro con correo institucional: ' + email);
  };

  const handleGoogleSignUp = () => {
    // Aquí iría la lógica para registro con Google
    alert('Iniciar registro con Google');
  };

  const handleFacebookSignUp = () => {
    // Aquí iría la lógica para registro con Facebook
    alert('Iniciar registro con Facebook');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-40 h-40 mb-4">
            <img 
              src={teamderLogo} 
              alt="Teamder Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-purple-600 mb-2">Crear una cuenta</h2>
          <p className="text-purple-600 text-center">
            Únete a Teamder y comienza a aprender
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Icono */}
          <div className="flex justify-center mb-6 -mt-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-white shadow-xl">
              <UserPlus className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Título */}
            <div className="text-center mb-6">
              <h3 className="text-purple-800">Elige cómo registrarte</h3>
            </div>

            {/* Botón Google */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              className="w-full border-purple-300 hover:bg-purple-50 rounded-lg h-12 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-purple-800">Continuar con Google</span>
            </Button>

            {/* Botón Facebook */}
            <Button
              type="button"
              variant="outline"
              onClick={handleFacebookSignUp}
              className="w-full border-purple-300 hover:bg-purple-50 rounded-lg h-12 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-purple-800">Continuar con Facebook</span>
            </Button>

            {/* Separador */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 border-t border-purple-200"></div>
              <span className="text-purple-400">o</span>
              <div className="flex-1 border-t border-purple-200"></div>
            </div>

            {/* Registro con correo institucional */}
            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <div>
                <label className="block text-purple-800 mb-2">
                  Correo institucional
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="ejemplo@universidad.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-purple-50/50 border-purple-200 focus:border-purple-400 rounded-lg h-12"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg h-12 shadow-lg"
              >
                Registrarse con correo
              </Button>
            </form>

            {/* Separador */}
            <div className="border-t border-purple-100 my-6"></div>

            {/* Botón Regresar */}
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 rounded-lg h-12 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Regresar al inicio
            </Button>

            {/* Términos y condiciones */}
            <p className="text-center text-purple-500 mt-4">
              Al registrarte, aceptas nuestros <br />
              <button type="button" className="text-purple-600 hover:text-purple-800">
                Términos de servicio
              </button> y{' '}
              <button type="button" className="text-purple-600 hover:text-purple-800">
                Política de privacidad
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-400">Teamderteam</p>
        </div>
      </div>
    </div>
  );
}
