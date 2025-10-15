import { Slide } from "../Slide";
import { Code, Workflow, BarChart, Bell, GraduationCap, Wrench } from "lucide-react";

export const Slide6Includes = () => {
  const includes = [
    { icon: Code, text: "Desarrollo del sistema a medida" },
    { icon: Workflow, text: "Integración con app de monitoreo existente" },
    { icon: BarChart, text: "Dashboard con control por cliente y emisora" },
    { icon: Bell, text: "Alertas automáticas" },
    { icon: GraduationCap, text: "Capacitación al equipo" },
    { icon: Wrench, text: "Mantenimiento opcional mensual" },
  ];

  return (
    <Slide className="bg-gradient-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <p className="text-sm font-semibold">Alcance del Proyecto</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Lo que Incluye
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {includes.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-gradient-primary rounded-xl flex-shrink-0 shadow-primary">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="pt-2">
                <p className="text-lg font-semibold text-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};
