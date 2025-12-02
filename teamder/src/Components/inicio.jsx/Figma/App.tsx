import { DashboardHeader } from './components/DashboardHeader';
import { StudyForm } from './components/StudyForm';
import { MatchSelector } from './components/MatchSelector';
import { Leaderboard } from './components/Leaderboard';
import { TrendingUp, Clock, Star } from 'lucide-react';

// LE CAMBIÉ EL NOMBRE A "Dashboard" PARA QUE NO SE CONFUNDA
export default function Dashboard() {
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
            <div key={index} className="bg-white rounded-xl shadow-md p-5 border border-purple-100">
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

        <div className="grid lg:grid-cols-2 gap-6">
          <div><StudyForm /></div>
          <div><MatchSelector /></div>
        </div>

        <div className="mt-8"><Leaderboard /></div>
      </main>
    </div>
  );
}