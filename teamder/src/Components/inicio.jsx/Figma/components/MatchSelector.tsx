import { useState } from 'react';
import { GraduationCap, Users, Check } from 'lucide-react';
import { Button } from './ui/button';

type MatchType = 'teachers' | 'students' | null;

export function MatchSelector() {
  const [selected, setSelected] = useState<MatchType>(null);

  const handleFindMatch = () => {
    if (selected) {
      console.log('Finding match with:', selected);
      // Aquí iría la lógica para buscar matches
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
      <div className="mb-6">
        <h2 className="text-purple-900 mb-2">¿Con quién quieres hacer match?</h2>
        <p className="text-purple-600">Elige si prefieres conectar con maestros o estudiantes</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Opción Maestros */}
        <button
          onClick={() => setSelected('teachers')}
          className={`relative p-6 rounded-xl border-2 transition-all ${
            selected === 'teachers'
              ? 'border-purple-500 bg-purple-50'
              : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
          }`}
        >
          {selected === 'teachers' && (
            <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
          <div className="flex flex-col items-center text-center gap-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              selected === 'teachers' ? 'bg-purple-200' : 'bg-purple-100'
            }`}>
              <GraduationCap className={`w-8 h-8 ${
                selected === 'teachers' ? 'text-purple-700' : 'text-purple-600'
              }`} />
            </div>
            <div>
              <h3 className={`mb-1 ${
                selected === 'teachers' ? 'text-purple-900' : 'text-purple-800'
              }`}>
                Maestros
              </h3>
              <p className="text-purple-600">
                Expertos que pueden enseñarte y guiarte
              </p>
            </div>
          </div>
        </button>

        {/* Opción Estudiantes */}
        <button
          onClick={() => setSelected('students')}
          className={`relative p-6 rounded-xl border-2 transition-all ${
            selected === 'students'
              ? 'border-purple-500 bg-purple-50'
              : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
          }`}
        >
          {selected === 'students' && (
            <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
          <div className="flex flex-col items-center text-center gap-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              selected === 'students' ? 'bg-purple-200' : 'bg-purple-100'
            }`}>
              <Users className={`w-8 h-8 ${
                selected === 'students' ? 'text-purple-700' : 'text-purple-600'
              }`} />
            </div>
            <div>
              <h3 className={`mb-1 ${
                selected === 'students' ? 'text-purple-900' : 'text-purple-800'
              }`}>
                Estudiantes
              </h3>
              <p className="text-purple-600">
                Compañeros que estudian lo mismo que tú
              </p>
            </div>
          </div>
        </button>
      </div>

      <Button
        onClick={handleFindMatch}
        disabled={!selected}
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Buscar Match
      </Button>

      {selected && (
        <p className="text-center text-purple-600 mt-4">
          Buscarás conexión con {selected === 'teachers' ? 'maestros' : 'estudiantes'}
        </p>
      )}
    </div>
  );
}
