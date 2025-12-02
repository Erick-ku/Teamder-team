import { useState } from 'react';
import { Trophy, Crown, Medal, Award, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

type Rank = 'diamond' | 'gold' | 'silver' | 'bronze';

interface LeaderboardUser {
  name: string;
  hours: number;
  rank: Rank;
  position: number;
}

const rankColors = {
  diamond: {
    bg: 'from-cyan-400 to-blue-600',
    border: 'border-cyan-400',
    icon: 'text-cyan-400',
    badge: 'bg-gradient-to-r from-cyan-400 to-blue-600',
  },
  gold: {
    bg: 'from-yellow-400 to-yellow-600',
    border: 'border-yellow-400',
    icon: 'text-yellow-400',
    badge: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  },
  silver: {
    bg: 'from-gray-300 to-gray-500',
    border: 'border-gray-400',
    icon: 'text-gray-400',
    badge: 'bg-gradient-to-r from-gray-300 to-gray-500',
  },
  bronze: {
    bg: 'from-orange-400 to-orange-600',
    border: 'border-orange-400',
    icon: 'text-orange-400',
    badge: 'bg-gradient-to-r from-orange-400 to-orange-600',
  },
};

const students: LeaderboardUser[] = [
  { name: 'Jefte', hours: 156, rank: 'diamond', position: 1 },
  { name: 'Niño de diez', hours: 142, rank: 'diamond', position: 2 },
  { name: 'Mr.Table', hours: 138, rank: 'diamond', position: 3 },
  { name: 'Ana Martínez', hours: 98, rank: 'gold', position: 4 },
  { name: 'Luis Hernández', hours: 87, rank: 'gold', position: 5 },
  { name: 'Carmen Silva', hours: 72, rank: 'silver', position: 6 },
  { name: 'Pedro Ramírez', hours: 65, rank: 'silver', position: 7 },
  { name: 'Laura Torres', hours: 48, rank: 'bronze', position: 8 },
];

const teachers: LeaderboardUser[] = [
  { name: 'Jorge Mejía', hours: 284, rank: 'diamond', position: 1 },
  { name: 'Maestra Perla', hours: 267, rank: 'diamond', position: 2 },
  { name: 'Alex', hours: 251, rank: 'diamond', position: 3 },
  { name: 'Roberto García', hours: 189, rank: 'gold', position: 4 },
  { name: 'Isabel Morales', hours: 176, rank: 'gold', position: 5 },
  { name: 'Fernando Cruz', hours: 143, rank: 'silver', position: 6 },
  { name: 'Diana López', hours: 128, rank: 'silver', position: 7 },
  { name: 'Miguel Ángel', hours: 95, rank: 'bronze', position: 8 },
];

function PodiumCard({ user, isLarge }: { user: LeaderboardUser; isLarge?: boolean }) {
  const colors = rankColors[user.rank];
  
  return (
    <div className={`flex flex-col items-center ${isLarge ? 'scale-110' : ''}`}>
      <div className="relative mb-3">
        {user.position === 1 && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Crown className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
        )}
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white border-4 ${colors.border} shadow-xl`}>
          <span className="text-2xl">{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-purple-200">
          <span className="text-purple-900">{user.position}</span>
        </div>
      </div>
      <h3 className="text-purple-900 text-center mb-1">{user.name}</h3>
      <div className={`px-3 py-1 rounded-full text-white ${colors.badge} shadow-md mb-2`}>
        <span className="uppercase text-xs">{user.rank}</span>
      </div>
      <div className="flex items-center gap-1 text-purple-600">
        <Clock className="w-4 h-4" />
        <span>{user.hours}h</span>
      </div>
    </div>
  );
}

function LeaderboardList({ users }: { users: LeaderboardUser[] }) {
  return (
    <div className="space-y-3">
      {users.slice(3).map((user) => {
        const colors = rankColors[user.rank];
        return (
          <div
            key={user.position}
            className="bg-white p-4 rounded-xl border border-purple-200 hover:border-purple-400 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-900">
                {user.position}
              </div>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white shadow-md`}>
                <span>{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <h4 className="text-purple-900">{user.name}</h4>
                <Badge className={`${colors.badge} text-white border-0 text-xs`}>
                  {user.rank}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <Clock className="w-4 h-4" />
              <span>{user.hours}h</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers'>('students');
  
  const currentUsers = activeTab === 'students' ? students : teachers;
  const topThree = currentUsers.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-purple-900 mb-2">Tabla de Clasificación</h2>
        <p className="text-purple-600">Los mejores de Teamder este mes</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'students' | 'teachers')} className="mb-8">
        <TabsList className="grid w-full grid-cols-2 bg-purple-100">
          <TabsTrigger value="students" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
            Estudiantes
          </TabsTrigger>
          <TabsTrigger value="teachers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
            Maestros
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Podium - Top 3 */}
      <div className="mb-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
        <div className="flex items-end justify-center gap-8 mb-6">
          {/* Second Place */}
          <div className="flex-1 max-w-[140px]">
            <PodiumCard user={topThree[1]} />
          </div>
          
          {/* First Place */}
          <div className="flex-1 max-w-[160px]">
            <PodiumCard user={topThree[0]} isLarge />
          </div>
          
          {/* Third Place */}
          <div className="flex-1 max-w-[140px]">
            <PodiumCard user={topThree[2]} />
          </div>
        </div>
      </div>

      {/* Rest of rankings */}
      <div>
        <h3 className="text-purple-900 mb-4">Clasificación completa</h3>
        <LeaderboardList users={currentUsers} />
      </div>

      {/* Rank Legend */}
      <div className="mt-6 pt-6 border-t border-purple-200">
        <p className="text-purple-600 text-center mb-3">Rangos</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {Object.entries(rankColors).map(([rank, colors]) => (
            <div key={rank} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colors.bg}`}></div>
              <span className="text-purple-700 capitalize">{rank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
