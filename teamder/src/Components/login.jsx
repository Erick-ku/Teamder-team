import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, BookOpen, ArrowLeft } from 'lucide-react';

function Register({ onBackToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleEmailRegister = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Por favor completa todos los campos");
      return;
    }

    const datosParaEnviar = {
      nombre: formData.name,
      correo: formData.email,
      contraseña: formData.password
    };

    try {
      const res = await fetch('http://localhost:3001/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosParaEnviar)
      });

      const data = await res.json();
      if (res.ok) {
        alert("¡Cuenta creada con éxito! Ahora inicia sesión.");
        if (onBackToLogin) onBackToLogin();
      } else {
        alert(data.error || "No se pudo registrar");
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
          <p className="text-purple-600">Crea tu cuenta y conecta con estudiantes</p>
        </div>

        <button 
          onClick={() => onBackToLogin()} 
          className="mb-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-2 rounded-lg flex items-center bg-transparent border-none cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver
        </button>

        <form onSubmit={handleEmailRegister} className="space-y-4">
          <div className="space-y-2">
            <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
              <User className="w-4 h-4" /> Nombre completo
            </label>
            <input
              type="text"
              placeholder="Ej: Juan Pérez"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none text-purple-900"
            />
          </div>

          <div className="space-y-2">
            <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
              <Mail className="w-4 h-4" /> Correo institucional
            </label>
            <input
              type="email"
              placeholder="tu.correo@universidad.edu.mx"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none text-purple-900"
            />
          </div>

          <div className="space-y-2">
            <label className="text-purple-900 flex items-center gap-2 font-medium text-sm">
              <Lock className="w-4 h-4" /> Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 pr-12 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none text-purple-900"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 cursor-pointer bg-transparent border-none">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg rounded-xl font-bold mt-6 transition-all transform hover:scale-[1.02] border-none cursor-pointer"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor ingresa correo y contraseña");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, contraseña: password })
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Bienvenido ${data.usuario.nombre}`);
        
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        
        navigate("/inicio");
      } else {
        alert(data.error || "Correo o contraseña incorrectos");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
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
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-purple-800 mb-2 font-medium">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-50 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900"
                />
              </div>

              <div>
                <label className="block text-purple-800 mb-2 font-medium">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-purple-200 focus:border-purple-400 rounded-lg outline-none text-purple-900"
                  />
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
