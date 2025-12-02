import { useState, useEffect } from 'react'; // <--- 1. Aquí corregimos el import
import { User, Settings, Trash2, LogOut, X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout?: () => void;
  usuario: any; 
}

export function ProfileMenu({ isOpen, onClose, onLogout, usuario }: ProfileMenuProps) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: usuario?.nombre || 'Usuario',
    email: usuario?.correo || 'correo@pendiente',
    career: 'Ingeniería en Sistemas',
    semester: '5',
  });

  // <--- 2. Aquí está el useEffect en el lugar correcto
  useEffect(() => {
    if (usuario) {
      setProfileData((prev) => ({
        ...prev,
        name: usuario.nombre,
        email: usuario.correo,
      }));
    }
  }, [usuario]);

  const careers = [
    'Ingeniería en Sistemas',
    'Ingeniería Industrial',
    'Ingeniería Mecánica',
    'Ingeniería Civil',
    'Arquitectura',
    'Administración',
    'Contabilidad',
    'Derecho',
    'Medicina',
    'Psicología',
    'Diseño Gráfico',
    'Mercadotecnia',
    'Otra',
  ];

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const handleSaveProfile = async () => {
    try {
      const res = await fetch('http://localhost:3001/actualizar', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: usuario.id_usuario, 
          nombre: profileData.name,
          correo: profileData.email
        })
      });

      if (res.ok) {
        const usuarioActualizado = { ...usuario, nombre: profileData.name, correo: profileData.email };
        localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
        
        alert("¡Perfil actualizado!");
        setShowEditProfile(false);
        window.location.reload(); 
      } else {
        alert("No se pudo actualizar");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }
  };

  const handleDeleteProfile = async () => {
    if (!usuario?.id_usuario) return;

    try {
      const res = await fetch(`http://localhost:3001/eliminar/${usuario.id_usuario}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert("Tu perfil ha sido eliminado. ¡Hasta pronto!");
        localStorage.removeItem('usuario');
        window.location.href = '/'; 
      } else {
        alert("Hubo un problema al eliminar el perfil");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      <div className="fixed top-16 right-4 w-80 bg-white rounded-2xl shadow-2xl border border-purple-100 z-50 overflow-hidden">
        {!showEditProfile && !showDeleteConfirm && (
          <>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="mb-1">{profileData.name}</h3>
                  <p className="text-purple-100 text-sm">{profileData.career}</p>
                  <p className="text-purple-100 text-sm">{profileData.semester}° Semestre</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <button
                onClick={() => setShowEditProfile(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 text-purple-900 transition-colors"
              >
                <Settings className="w-5 h-5 text-purple-600" />
                <span>Editar perfil</span>
              </button>

              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                <span>Eliminar perfil</span>
              </button>

              <div className="border-t border-purple-100 my-2"></div>

              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 text-purple-900 transition-colors"
              >
                <LogOut className="w-5 h-5 text-purple-600" />
                <span>Cerrar sesión</span>
              </button>
            </div>
          </>
        )}

        {showEditProfile && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-purple-900">Editar perfil</h3>
              <button
                onClick={() => setShowEditProfile(false)}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name" className="text-purple-900">
                  Nombre completo
                </Label>
                <Input
                  id="edit-name"
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-email" className="text-purple-900">
                  Correo institucional
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-career" className="text-purple-900">
                  Carrera
                </Label>
                <select
                  id="edit-career"
                  value={profileData.career}
                  onChange={(e) => setProfileData({ ...profileData, career: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-purple-900 bg-white"
                >
                  {careers.map((career) => (
                    <option key={career} value={career}>
                      {career}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-semester" className="text-purple-900">
                  Semestre
                </Label>
                <select
                  id="edit-semester"
                  value={profileData.semester}
                  onChange={(e) => setProfileData({ ...profileData, semester: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-purple-900 bg-white"
                >
                  {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}° Semestre
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  onClick={() => setShowEditProfile(false)}
                  className="flex-1 py-2 border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg shadow-md transition-all transform hover:scale-[1.02]"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirm && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-purple-900 mb-2">¿Eliminar perfil?</h3>
              <p className="text-purple-600">
                Esta acción no se puede deshacer. Se eliminarán todos tus datos, matches e historial.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteProfile}
                className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  ); // <--- 3. Y aquí el cierre final que faltaba
}