import { Slide } from "../Slide";
import { AlertCircle, RefreshCw, Eye, TrendingUp } from "lucide-react";
import problemImage from "@/assets/problem-manual.jpg";

export const Slide2Problem = () => {
  const problems = [
    { icon: RefreshCw, text: "Retrabajo diario en conteo de emisiones" },
    { icon: AlertCircle, text: "Errores humanos frecuentes" },
    { icon: Eye, text: "Falta de visibilidad para cliente y emisoras" },
    { icon: TrendingUp, text: "Dificultad para escalar operaciones" },
  ];

  return (
    <Slide className="bg-gradient-secondary">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full mb-6">
            <p className="text-sm font-semibold">Situación Actual</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            El Problema Actual
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-12 font-light">
            "Hoy, el control de cuñas es manual y propenso a errores."
          </p>
          
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-lg text-card-foreground pt-2">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-primary">
            <img 
              src={problemImage} 
              alt="Proceso manual con errores" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-destructive/20 rounded-full blur-3xl" />
        </div>
      </div>
    </Slide>
  );
};
