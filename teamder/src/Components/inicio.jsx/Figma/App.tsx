import { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { StudyForm } from './components/StudyForm';
import { MatchSelector } from './components/MatchSelector';
import { Leaderboard } from './components/Leaderboard';
import { Login } from './components/Login';
import { ForgotPassword } from './components/ForgotPassword';
import { SignUp } from './components/SignUp';
import { TrendingUp, Clock, Star } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<'login' | 'forgot-password' | 'signup'>('login');

  // Si no está autenticado, mostrar las pantallas de autenticación
  if (!isAuthenticated) {
    if (currentView === 'forgot-password') {
      return <ForgotPassword onBack={() => setCurrentView('login')} />;
    }
    
    if (currentView === 'signup') {
      return <SignUp onBack={() => setCurrentView('login')} />;
    }
    
    return (
      <Login 
        onLogin={() => setIsAuthenticated(true)} 
        onForgotPassword={() => setCurrentView('forgot-password')}
        onSignUp={() => setCurrentView('signup')}
      />
    );
  }

  // Mock data para las estadísticas
  const stats = [
    { icon: TrendingUp, label: 'Matches activos', value: '12', color: 'purple' },
    { icon: Clock, label: 'Horas estudiadas', value: '48', color: 'purple' },
    { icon: Star, label: 'Calificación', value: '4.8', color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bienvenida */}
        <div className="mb-8">
          <h1 className="text-purple-900 mb-2">¡Hola de nuevo! 👋</h1>
          <p className="text-purple-600">
            Encuentra el match perfecto para tus necesidades de estudio
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 border border-purple-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-purple-600">{stat.label}</p>
                  <p className="text-purple-900 text-2xl">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Formulario de especificaciones */}
          <div>
            <StudyForm />
          </div>

          {/* Selector de match */}
          <div>
            <MatchSelector />
          </div>
        </div>

        {/* Tabla de clasificación */}
        <div className="mt-8">
          <Leaderboard />
        </div>

        {/* Sección de matches recientes o sugerencias */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
            <h2 className="text-purple-900 mb-4">Matches sugeridos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Ana García', role: 'Maestra', subject: 'Matemáticas', rating: 4.9 },
                { name: 'Carlos López', role: 'Estudiante', subject: 'Programación', rating: 4.7 },
                { name: 'María Rodríguez', role: 'Maestra', subject: 'Física', rating: 5.0 },
              ].map((match, index) => (
                <div
                  key={index}
                  className="p-4 border border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                      {match.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-purple-900">{match.name}</h3>
                      <p className="text-purple-600">{match.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600">{match.subject}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-purple-900">{match.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}