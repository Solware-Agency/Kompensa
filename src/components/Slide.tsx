import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export const Slide = ({ children, className = "" }: SlideProps) => {
  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-16 ${className}`}>
      <div className="max-w-6xl w-full animate-fade-in">
        {children}
      </div>
    </div>
  );
};
