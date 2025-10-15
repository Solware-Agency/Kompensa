import { Slide } from "../Slide";
import { CheckCircle2, Bell, BarChart3, XCircle } from "lucide-react";

export const Slide3Needs = () => {
  const needs = [
    { icon: BarChart3, text: "Comparar emisiones vs cuñas contratadas" },
    { icon: Bell, text: "Notificar cuando hay faltantes" },
    { icon: CheckCircle2, text: "Visualizar estado por anunciante y emisora" },
    { icon: XCircle, text: "Eliminar controles manuales" },
  ];

  return (
    <Slide className="bg-background">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
          <p className="text-sm font-semibold">Lo que necesita KOMPENSA</p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Necesidades de KOMPENSA
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {needs.map((need, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-accent rounded-2xl shadow-soft hover:shadow-medium transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <need.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-lg font-medium text-foreground">{need.text}</p>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-primary rounded-2xl shadow-primary animate-fade-in">
          <p className="text-2xl md:text-3xl font-light text-primary-foreground leading-relaxed">
            "Queremos ahorrar tiempo, evitar errores y tener el control total del cumplimiento."
          </p>
        </div>
      </div>
    </Slide>
  );
};
