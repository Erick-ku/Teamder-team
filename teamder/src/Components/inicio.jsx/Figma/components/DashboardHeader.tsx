import { useState, useEffect } from 'react'; 
import { Bell, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ProfileMenu } from './ProfileMenu'; 

export function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

 const handleLogout = () => {
    localStorage.removeItem("usuario");

    window.location.href = "/";
  };
  return (
    <header className="bg-white border-b border-purple-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl">T</span>
            </div>
            <div>
              <h1 className="text-purple-900">Teamder</h1>
              <p className="text-purple-400 text-xs">Industries</p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                type="text"
                placeholder="Buscar materias, temas..."
                className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              <Bell className="w-5 h-5" />
            </Button>

            {/* Avatar */}
            <button onClick={() => setMenuOpen(true)}>
              <Avatar className="w-9 h-9 border-2 border-purple-200">
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </button>

            {/* Menú de perfil */}
            <ProfileMenu
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              onLogout={handleLogout}
              usuario={usuario}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
