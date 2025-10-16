import { Slide } from "../Slide";
import { DollarSign, Calendar, Shield } from "lucide-react";

export const Slide7Investment = () => {
  return (
    <Slide className="bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <p className="text-sm font-semibold">Propuesta Económica</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Inversión y Condiciones
          </h2>
        </div>
        
        <div className="space-y-8">
          {/* Implementación */}
          <div className="p-8 bg-gradient-accent rounded-2xl shadow-medium border-2 border-primary/20 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary rounded-full">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Implementación</h3>
                <p className="text-muted-foreground">Desarrollo completo del sistema</p>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-primary mb-2">$2,000 USD</p>
              <p className="text-muted-foreground">Pago en 2 partes</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg">
                <p className="text-lg"><span className="font-bold text-primary">50%</span> al iniciar</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <p className="text-lg"><span className="font-bold text-primary">50%</span> al entregar</p>
              </div>
            </div>
          </div>
          
          {/* Soporte */}
          <div className="p-8 bg-card rounded-2xl shadow-soft animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary rounded-full">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Soporte Mensual Fijo</h3>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold text-foreground">$200 USD<span className="text-lg font-normal text-muted-foreground">/mes</span></p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-foreground mb-3">Incluye:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Mantenimiento preventivo del sistema</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Corrección de errores y bugs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Actualizaciones de seguridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Soporte técnico prioritario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Monitoreo del rendimiento del sistema</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Vigencia */}
          <div className="p-8 bg-card rounded-2xl shadow-soft animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent rounded-full">
                <Calendar className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Vigencia de la Propuesta</h3>
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground">60 días</p>
          </div>
          
          <div className="text-center p-6 bg-muted/50 rounded-xl">
            <p className="text-sm italic text-muted-foreground">
              *Posibilidad de pago en cuotas según necesidad
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
