import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { BookOpen, FileText } from 'lucide-react';

export function StudyForm() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ subject, description });
    // Aquí iría la lógica para procesar el formulario
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h2 className="text-purple-900">¿Qué quieres estudiar?</h2>
          <p className="text-purple-600">Describe tu tema y necesidades</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Campo de materia/tema */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-purple-900">
            Materia o tema
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="Ej: Matemáticas, Programación, Historia..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
          />
        </div>

        {/* Campo de descripción del problema */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-purple-900">
            Describe tu problema o necesidad
          </Label>
          <Textarea
            id="description"
            placeholder="Cuéntanos qué necesitas aprender o qué dificultades tienes..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 min-h-[120px] resize-none"
          />
        </div>

        {/* Botón de continuar */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md"
        >
          <FileText className="w-4 h-4 mr-2" />
          Continuar
        </Button>
      </form>
    </div>
  );
}
