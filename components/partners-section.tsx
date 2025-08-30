"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

type Language = 'en' | 'vi' | 'ar';

export default function PartnersSection() {
  const [language, setLanguage] = useState<Language>("en")

  const content = {
    en: {
      title: "Our Partners",
      description:
        "We collaborate with industry leaders to deliver exceptional solutions and drive innovation together.",
      partnershipText: "Interested in partnering with us?",
      contactLink: "Get in touch →",
    },
    vi: {
      title: "Đối Tác Của Chúng Tôi",
      description:
        "Chúng tôi hợp tác với các nhà lãnh đạo ngành để cung cấp các giải pháp xuất sắc và thúc đẩy đổi mới cùng nhau.",
      partnershipText: "Quan tâm đến việc hợp tác với chúng tôi?",
      contactLink: "Liên hệ →",
    },
    ar: {
      title: "شركاؤنا",
      description: "نتعاون مع قادة الصناعة لتقديم حلول استثنائية ودفع الابتكار معًا.",
      partnershipText: "مهتم بالشراكة معنا؟",
      contactLink: "تواصل معنا ←",
    },
  }

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

  const infinitePartners = [...partners, ...partners, ...partners]

  const [currentIndex, setCurrentIndex] = useState(partners.length)
  const [itemsPerView, setItemsPerView] = useState(5)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") as Language) || "en"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLanguage = (localStorage.getItem("language") as Language) || "en"
      setLanguage(savedLanguage)
    }

    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

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
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1)
  }

  useEffect(() => {
    if (currentIndex >= partners.length * 2) {
      const timer = setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none"
          setCurrentIndex(partners.length)
          carouselRef.current.offsetHeight
          carouselRef.current.style.transition = "transform 500ms ease-in-out"
        }
      }, 500)
      return () => clearTimeout(timer)
    } else if (currentIndex <= 0) {
      const timer = setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none"
          setCurrentIndex(partners.length)
          carouselRef.current.offsetHeight
          carouselRef.current.style.transition = "transform 500ms ease-in-out"
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, partners.length])

  const currentContent = content[language]

  return (
    <section id="partners" className={`py-20 bg-background ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {currentContent.description}
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
              ref={carouselRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out items-stretch"
              style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
            >
              {infinitePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 text-center group cursor-pointer px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card rounded-lg p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-lg">{partner.name.charAt(0)}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-3 font-[family-name:var(--font-manrope)] text-center">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed flex-1">
                        {partner.description}
                      </p>
                    </div>
                    <div className="flex justify-center mt-auto">
                      <Badge variant="secondary" className="text-xs">
                        {partner.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(partners.length + index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  (currentIndex - partners.length) % partners.length === index
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">{currentContent.partnershipText}</p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {currentContent.contactLink}
          </a>
        </div>
      </div>
    </section>
  )
}
