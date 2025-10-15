import { Slide } from "../Slide";
import { CheckCircle2 } from "lucide-react";

export const Slide8Closing = () => {
  const benefits = [
    "Menos errores",
    "Más control",
    "Operación más ligera",
    "Clientes y radios mejor informados",
  ];

  return (
    <Slide className="bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center text-primary-foreground">
        <div className="mb-12">
          <div className="inline-block px-6 py-3 bg-primary-foreground/10 rounded-full backdrop-blur-sm mb-8">
            <p className="text-sm font-semibold">El Resultado</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 max-w-4xl mx-auto leading-relaxed">
            "En <span className="font-bold text-5xl">3 semanas</span>, KOMPENSA tendrá un sistema propio, simple y escalable para controlar cuñas."
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
              <p className="text-xl font-medium text-left">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="h-1 w-32 bg-primary-foreground/30 mx-auto" />
          
          <p className="text-lg font-light max-w-2xl mx-auto">
            Gracias por su atención. Estamos listos para transformar la gestión de cuñas de KOMPENSA.
          </p>
          
          <div className="pt-8">
            <p className="text-sm font-semibold mb-2">Gonzalo Ramírez</p>
            <p className="text-sm opacity-80">Solware Solutions</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
