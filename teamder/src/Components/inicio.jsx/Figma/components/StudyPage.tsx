import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { BookOpen, Clock, TrendingUp, ArrowLeft, ArrowRight } from 'lucide-react';
import teamderIcon from '../assets/e58fb5c4cd24e4959bbe35209cd23521a37453c0.png';

interface StudyPageProps {
  onBack: () => void;
  onContinue: (data: any) => void;
}

export function StudyPage({ onBack, onContinue }: StudyPageProps) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [schedule, setSchedule] = useState('');

  const levels = [
    { value: 'beginner', label: 'Principiante', description: 'Empezando desde cero' },
    { value: 'intermediate', label: 'Intermedio', description: 'Tengo conocimientos básicos' },
    { value: 'advanced', label: 'Avanzado', description: 'Busco profundizar' },
  ];

  const durations = [
    { value: '30min', label: '30 minutos', icon: Clock },
    { value: '1hour', label: '1 hora', icon: Clock },
    { value: '2hours', label: '2 horas', icon: Clock },
    { value: 'flexible', label: 'Flexible', icon: Clock },
  ];

  const schedules = [
    { value: 'morning', label: 'Mañana', time: '6am - 12pm' },
    { value: 'afternoon', label: 'Tarde', time: '12pm - 6pm' },
    { value: 'evening', label: 'Noche', time: '6pm - 12am' },
    { value: 'flexible', label: 'Flexible', time: 'Cualquier horario' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      subject,
      description,
      level,
      duration,
      schedule,
    };
    onContinue(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      {/* Header con logo */}
      <header className="bg-white border-b border-purple-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img src={teamderIcon} alt="Teamder" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-purple-900">Teamder</h1>
                <p className="text-purple-600">Teamder Industries</p>
              </div>
            </div>
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
          {/* Título de la página */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-purple-900 mb-2">¿Qué quieres estudiar?</h2>
            <p className="text-purple-600">
              Cuéntanos más sobre lo que necesitas para encontrar el match perfecto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Materia o tema */}
            <div className="space-y-3">
              <Label htmlFor="subject" className="text-purple-900">
                Materia o tema específico
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Ej: Cálculo diferencial, React, Historia de México..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                required
              />
            </div>

            {/* Descripción del problema */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-purple-900">
                Describe tu necesidad o problema académico
              </Label>
              <Textarea
                id="description"
                placeholder="Cuéntanos qué dificultades tienes, qué quieres lograr, o en qué necesitas ayuda..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 min-h-[150px] resize-none"
                required
              />
            </div>

            {/* Nivel */}
            <div className="space-y-3">
              <Label className="text-purple-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                ¿Cuál es tu nivel actual?
              </Label>
              <div className="grid md:grid-cols-3 gap-4">
                {levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => setLevel(lvl.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      level === lvl.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <h4
                      className={
                        level === lvl.value ? 'text-purple-900' : 'text-purple-800'
                      }
                    >
                      {lvl.label}
                    </h4>
                    <p className="text-purple-600">{lvl.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Duración de sesión preferida */}
            <div className="space-y-3">
              <Label className="text-purple-900 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Duración de sesión preferida
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {durations.map((dur) => (
                  <button
                    key={dur.value}
                    type="button"
                    onClick={() => setDuration(dur.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      duration === dur.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <dur.icon
                      className={`w-5 h-5 mx-auto mb-2 ${
                        duration === dur.value ? 'text-purple-600' : 'text-purple-500'
                      }`}
                    />
                    <p
                      className={`text-center ${
                        duration === dur.value ? 'text-purple-900' : 'text-purple-700'
                      }`}
                    >
                      {dur.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Horario preferido */}
            <div className="space-y-3">
              <Label className="text-purple-900">Horario preferido</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {schedules.map((sch) => (
                  <button
                    key={sch.value}
                    type="button"
                    onClick={() => setSchedule(sch.value)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      schedule === sch.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
                    }`}
                  >
                    <h4
                      className={
                        schedule === sch.value ? 'text-purple-900' : 'text-purple-800'
                      }
                    >
                      {sch.label}
                    </h4>
                    <p className="text-purple-600">{sch.time}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de continuar */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!subject || !description || !level || !duration || !schedule}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar y buscar matches
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {(!subject || !description || !level || !duration || !schedule) && (
                <p className="text-center text-purple-600 mt-3">
                  Completa todos los campos para continuar
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Información adicional */}
        <div className="mt-6 text-center">
          <p className="text-purple-600">
            💡 Tip: Mientras más detalles nos des, mejor será tu match
          </p>
        </div>
      </main>
    </div>
  );
}