"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function PartnersSection() {
  const partners = [
    { name: "Beko Jyobi", category: "Technology", description: "Leading technology solutions provider" },
    { name: "VNPT", category: "Telecommunications", description: "Vietnam's largest telecom operator" },
    { name: "Veterinary", category: "Healthcare", description: "Advanced veterinary care solutions" },
    { name: "ETCorp", category: "Enterprise", description: "Enterprise technology consulting" },
    { name: "Pharmaceutical", category: "Healthcare", description: "Innovative pharmaceutical solutions" },
    { name: "TechViet", category: "Technology", description: "Vietnamese technology innovation" },
    { name: "MedCare", category: "Healthcare", description: "Comprehensive healthcare systems" },
    { name: "DataFlow", category: "Analytics", description: "Big data and analytics platform" },
    { name: "CloudTech", category: "Cloud Services", description: "Cloud infrastructure solutions" },
    { name: "AI Solutions", category: "Artificial Intelligence", description: "AI-powered business solutions" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 768) setItemsPerView(2)
      else if (window.innerWidth < 1024) setItemsPerView(3)
      else setItemsPerView(5)
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - itemsPerView + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [partners.length, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, partners.length - itemsPerView + 1)) % Math.max(1, partners.length - itemsPerView + 1),
    )
  }

  const visiblePartners = partners.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation together.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border shadow-lg hover:shadow-xl transition-all duration-300 -translate-x-4"
            aria-label="Previous partners"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border shadow-lg hover:shadow-xl transition-all duration-300 translate-x-4"
            aria-label="Next partners"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Partners Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-center group cursor-pointer"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 mx-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-lg">{partner.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-manrope)]">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 min-h-[2.5rem]">{partner.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {partner.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, partners.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to partner group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Interested in partnering with us?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}
