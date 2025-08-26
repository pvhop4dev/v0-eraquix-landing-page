"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const heroSlides = [
    {
      title: "ERAQUIX Solutions",
      subtitle: "Where Vision Meets Insight",
      description:
        "Creating value through technology and understanding. Accompanying businesses on the digital transformation journey.",
      primaryButton: "Learn More",
      secondaryButton: "Watch Demo",
    },
    {
      title: "Digital Innovation",
      subtitle: "Transforming Tomorrow",
      description:
        "Empowering enterprises with cutting-edge technology solutions and strategic insights for sustainable growth.",
      primaryButton: "Our Services",
      secondaryButton: "Case Studies",
    },
    {
      title: "Technology Excellence",
      subtitle: "Beyond Expectations",
      description:
        "Delivering world-class solutions that drive efficiency, innovation, and competitive advantage for your business.",
      primaryButton: "Get Started",
      secondaryButton: "Learn More",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[url('/abstract-technology-network-background.png')] bg-cover bg-center opacity-5"></div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-500 ease-in-out">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)] animate-fade-in-up">
              {heroSlides[currentSlide].title}
              <span className="block text-primary mt-2">{heroSlides[currentSlide].subtitle}</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200">
              <Button size="lg" className="text-lg px-8 py-3 group">
                {heroSlides[currentSlide].primaryButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 group bg-transparent">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {heroSlides[currentSlide].secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
