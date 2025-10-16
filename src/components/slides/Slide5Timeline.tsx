import { Slide } from "../Slide";
import { CheckCircle2 } from "lucide-react";

export const Slide5Timeline = () => {
  const timeline = [
    { week: "Semana 1", task: "Diagnóstico y mapeo del flujo actual" },
    { week: "Semana 2-4", task: "Desarrollo del sistema" },
    { week: "Semana 5", task: "Pruebas + Ajustes + Entrega final" },
    { week: "Semana 6", task: "Capacitación a usuarios" },
  ];

  return (
    <Slide className="bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <p className="text-sm font-semibold">Cronograma</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Timeline de Implementación
          </h2>
        </div>
        
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-primary" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative pl-20 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-4 top-2 w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-primary z-10">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                
                <div className="p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.week}</h3>
                  <p className="text-lg text-foreground">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};
