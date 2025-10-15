import { Slide } from "../Slide";
import { Database, BarChart, Bell, TrendingUp } from "lucide-react";
import solutionImage from "@/assets/solution-automated.jpg";

export const Slide4Solution = () => {
  const features = [
    "Automatiza el cruce de datos: contratado vs emitido",
    "Muestra panel visual para gestión interna y externa",
    "Envía alertas ante cuñas pendientes",
    "Escalable a reportes, dashboards y gestión por cliente",
  ];

  return (
    <Slide className="bg-gradient-secondary">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
          <p className="text-sm font-semibold">La Solución</p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Nuestra Solución
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="space-y-6">
          <p className="text-xl text-muted-foreground mb-8">
            Diseño de un sistema que:
          </p>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg text-foreground">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-primary">
          <img 
            src={solutionImage} 
            alt="Sistema automatizado" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 bg-card rounded-xl shadow-soft text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <p className="font-semibold text-foreground">Web App centralizada</p>
        </div>
        <div className="p-6 bg-card rounded-xl shadow-soft text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <p className="font-semibold text-foreground">Adaptable y segura</p>
        </div>
        <div className="p-6 bg-card rounded-xl shadow-soft text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <p className="font-semibold text-foreground">Con más control</p>
        </div>
      </div>
      
      <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border-2 border-primary/20">
        <p className="text-2xl font-medium text-foreground">
          🔹 Sin Excel. Sin riesgos. Con más control.
        </p>
      </div>
    </Slide>
  );
};
