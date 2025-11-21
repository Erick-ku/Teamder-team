import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Mail, ArrowLeft, ShieldCheck } from 'lucide-react';
import teamderLogo from "../../../assets/logo.png";

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState<'email' | 'verification'>('email');
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo
    setEmailSent(true);
    setStep('verification');
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para verificar el código
    alert('Código verificado. Redirigiendo para crear nueva contraseña...');
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
          <h2 className="text-purple-600 mb-2">
            {step === 'email' ? 'Recuperar Contraseña' : 'Verificación'}
          </h2>
          <p className="text-purple-600 text-center">
            {step === 'email' 
              ? 'Ingresa tu correo para recibir el código de verificación'
              : 'Ingresa el código enviado a tu correo'
            }
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Icono */}
          <div className="flex justify-center mb-6 -mt-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-white shadow-xl">
              {step === 'email' ? (
                <Mail className="w-12 h-12 text-white" />
              ) : (
                <ShieldCheck className="w-12 h-12 text-white" />
              )}
            </div>
          </div>

          {step === 'email' ? (
            <form onSubmit={handleSendEmail} className="space-y-6">
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
                    required
                    className="pl-10 bg-purple-50/50 border-purple-200 focus:border-purple-400 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Botón Enviar código */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg h-12 shadow-lg"
              >
                Enviar código de verificación
              </Button>

              {/* Botón Regresar */}
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/')}
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 rounded-lg h-12 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Regresar al inicio
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-6">
              {/* Mensaje de confirmación */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <p className="text-purple-700 text-center">
                  ✓ Código enviado a <span className="font-medium">{email}</span>
                </p>
              </div>

              {/* Código de verificación */}
              <div>
                <label className="block text-purple-800 mb-2">
                  Código de verificación
                </label>
                <Input
                  type="text"
                  placeholder="000000"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  maxLength={6}
                  className="text-center tracking-widest bg-purple-50/50 border-purple-200 focus:border-purple-400 rounded-lg h-12"
                />
              </div>

              {/* Reenviar código */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                  onClick={handleSendEmail}
                >
                  ¿No recibiste el código? Reenviar
                </button>
              </div>

              {/* Botón Verificar */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg h-12 shadow-lg"
              >
                Verificar código
              </Button>

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
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-400">Teamderteam</p>
        </div>
      </div>
    </div>
  );
}
