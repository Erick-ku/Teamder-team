import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, GraduationCap, Calendar, BookOpen, ArrowLeft } from 'lucide-react';

function Register({ onBackToLogin }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    career: '',
    semester: '',
  });

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const careers = [
    'Ingeniería en Sistemas', 'Ingeniería Industrial', 'Ingeniería Mecánica',
    'Ingeniería Civil', 'Arquitectura', 'Administración', 'Contabilidad',
    'Derecho', 'Medicina', 'Psicología', 'Diseño Gráfico', 'Mercadotecnia', 'Otra',
  ];

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    
    const datosParaEnviar = {
        nombre: formData.name,
        correo: formData.email,
        carrera: formData.career,
        semestre: formData.semester,
        id_interes: 1 
    };

    try {
      const res = await fetch('http://localhost:3001/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosParaEnviar)
      });
      const data = await res.json();
      
      if(res.ok) {
        alert("¡Cuenta creada con éxito! Ahora inicia sesión.");
        if (onBackToLogin) onBackToLogin();
      } else {
        alert("Error: " + (data.error || "No se pudo registrar"));
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="w-full max-w-md animate-fade-in-up"> 
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-purple-900 mb-2 font-bold text-2xl"></h1>
            <p className="text-purple-600">Crea tu cuenta y conecta con estudiantes</p>
          </div>

          {!showEmailForm ? (
            <>
              <div className="space-y-3 mb-6">
                <button className="w-full py-3 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-900 rounded-xl flex items-center justify-center font-medium transition-all">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar con Google
                </button>

                <button className="w-full py-3 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-900 rounded-xl flex items-center justify-center font-medium transition-all">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Continuar con Facebook
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-purple-200"></div></div>
                <div className="relative flex justify-center"><span className="px-4 bg-white text-purple-600">O</span></div>
              </div>

              <button 
                onClick={() => setShowEmailForm(true)}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg rounded-xl flex items-center justify-center font-bold transition-all transform hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Registrarse con correo institucional
              </button>

              <div className="mt-6 text-center">
                <p className="text-purple-600">
                  ¿Ya tienes cuenta?{' '}
                  <button onClick={onBackToLogin} className="text-purple-700 hover:text-purple-800 font-bold underline bg-transparent border-none cursor-pointer">
                    Inicia sesión
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              <button 
                onClick={() => setShowEmailForm(false)}
                className="mb-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50 -ml-2 px-3 py-2 rounded-lg flex items-center bg-transparent border-none cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver
              </button>

              <form onSubmit={handleEmailRegister} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
                    <User className="w-4 h-4" /> Nombre completo
                  </label>
                  <input
                    type="text" placeholder="Ej: Juan Pérez García" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-purple-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
                    <Mail className="w-4 h-4" /> Correo institucional
                  </label>
                  <input
                    type="email" placeholder="tu.correo@universidad.edu.mx" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-purple-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
                    <GraduationCap className="w-4 h-4" /> Carrera
                  </label>
                  <select
                    required
                    value={formData.career}
                    onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-purple-900 bg-white"
                  >
                    <option value="">Selecciona tu carrera</option>
                    {careers.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
                    <Calendar className="w-4 h-4" /> Semestre
                  </label>
                  <select
                    required
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-purple-900 bg-white"
                  >
                    <option value="">Selecciona tu semestre</option>
                    {semesters.map((s) => <option key={s} value={s}>{s}° Semestre</option>)}
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg rounded-xl font-bold mt-6 transition-all transform hover:scale-[1.02] border-none cursor-pointer"
                >
                  Crear cuenta
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-purple-600 text-sm">
                  ¿Ya tienes cuenta?{' '}
                  <button onClick={onBackToLogin} className="text-purple-700 hover:text-purple-800 underline font-bold bg-transparent border-none cursor-pointer">
                    Inicia sesión
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
        <p className="text-center text-purple-600 mt-6 text-sm opacity-80">
          Al registrarte, aceptas nuestros términos y condiciones
        </p>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); 

const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login con:", email);
    navigate('/inicio'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 flex items-center justify-center p-4">
      
      {isRegistering ? (
        <Register onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        <div className="w-full max-w-md animate-fade-in-up">
           <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
            </div>
            <p className="text-purple-600 font-semibold text-xl">Bienvenido a Teamder</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
            <div className="flex justify-center mb-6 -mt-16 absolute top-0 left-0 right-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center border-4 border-white shadow-xl">
                <User className="w-10 h-10 text-white" />
                </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-6 mt-6">
                <div>
                    <label className="block text-purple-800 mb-2 font-medium">Correo electrónico</label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"><Mail className="w-5 h-5" /></div>
                        <input type="email" placeholder="tu@correo.com" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-purple-50 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900" />
                    </div>
                </div>

                <div>
                    <label className="block text-purple-800 mb-2 font-medium">Contraseña</label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"><Lock className="w-5 h-5" /></div>
                        <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 bg-purple-50 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 cursor-pointer bg-transparent border-none">
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all cursor-pointer border-none">
                    Iniciar Sesión
                </button>

                <div className="text-center mt-4">
                    <p className="text-purple-800 text-sm">
                        ¿No tienes cuenta?{' '}
                        <button type="button" onClick={() => setIsRegistering(true)} className="font-bold text-purple-600 hover:underline bg-transparent border-none cursor-pointer">
                            Regístrate aquí
                        </button>
                    </p>
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}