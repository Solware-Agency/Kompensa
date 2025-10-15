import { useState, useEffect } from "react";
import { Slide1Cover } from "@/components/slides/Slide1Cover";
import { Slide2Problem } from "@/components/slides/Slide2Problem";
import { Slide3Needs } from "@/components/slides/Slide3Needs";
import { Slide4Solution } from "@/components/slides/Slide4Solution";
import { Slide5Timeline } from "@/components/slides/Slide5Timeline";
import { Slide6Includes } from "@/components/slides/Slide6Includes";
import { Slide7Investment } from "@/components/slides/Slide7Investment";
import { Slide8Closing } from "@/components/slides/Slide8Closing";
import { SlideNavigation } from "@/components/SlideNavigation";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1Cover key="slide1" />,
    <Slide2Problem key="slide2" />,
    <Slide3Needs key="slide3" />,
    <Slide4Solution key="slide4" />,
    <Slide5Timeline key="slide5" />,
    <Slide6Includes key="slide6" />,
    <Slide7Investment key="slide7" />,
    <Slide8Closing key="slide8" />,
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  };


  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="transition-all duration-500 ease-in-out">
        {slides[currentSlide]}
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Index;
