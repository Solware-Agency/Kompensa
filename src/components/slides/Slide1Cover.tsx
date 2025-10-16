import { Slide } from "../Slide";
import heroImage from "@/assets/hero-radio-dashboard.jpg";

export const Slide1Cover = () => {
  return (
    <Slide className="bg-gradient-primary relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center text-primary-foreground">
        <div className="mb-8 inline-block px-6 py-2 bg-background/10 rounded-full backdrop-blur-sm">
          <a href="https://www.solware.agency" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline transition-all">Solware Agency</a>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Propuesta de Automatización
        </h1>
        
        <div className="w-32 h-1 bg-primary-foreground mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }} />
        
        <h2 className="text-3xl md:text-4xl font-light mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          KOMPENSA
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Sistema de control automatizado de cuñas radiales
        </p>
        
        <div className="flex items-center justify-center gap-8 text-sm animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            <span>Gonzalo Ramírez</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            <span>{new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </Slide>
  );
};
