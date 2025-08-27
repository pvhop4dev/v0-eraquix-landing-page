"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [language, setLanguage] = useState("en")

  const heroSlides = {
    en: [
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
    ],
    vi: [
      {
        title: "ERAQUIX Solutions",
        subtitle: "Nơi Tầm Nhìn Gặp Gỡ Hiểu Biết",
        description:
          "Tạo ra giá trị thông qua công nghệ và sự hiểu biết. Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.",
        primaryButton: "Tìm Hiểu Thêm",
        secondaryButton: "Xem Demo",
      },
      {
        title: "Đổi Mới Số",
        subtitle: "Biến Đổi Tương Lai",
        description:
          "Trao quyền cho doanh nghiệp với các giải pháp công nghệ tiên tiến và thông tin chiến lược để phát triển bền vững.",
        primaryButton: "Dịch Vụ",
        secondaryButton: "Nghiên Cứu Điển Hình",
      },
      {
        title: "Xuất Sắc Công Nghệ",
        subtitle: "Vượt Mong Đợi",
        description:
          "Cung cấp các giải pháp đẳng cấp thế giới thúc đẩy hiệu quả, đổi mới và lợi thế cạnh tranh cho doanh nghiệp của bạn.",
        primaryButton: "Bắt Đầu",
        secondaryButton: "Tìm Hiểu Thêm",
      },
    ],
    ar: [
      {
        title: "حلول إيراكويكس",
        subtitle: "حيث تلتقي الرؤية بالبصيرة",
        description: "خلق القيمة من خلال التكنولوجيا والفهم. مرافقة الشركات في رحلة التحول الرقمي.",
        primaryButton: "اعرف المزيد",
        secondaryButton: "شاهد العرض",
      },
      {
        title: "الابتكار الرقمي",
        subtitle: "تحويل الغد",
        description: "تمكين المؤسسات بحلول تكنولوجية متطورة ورؤى استراتيجية للنمو المستدام.",
        primaryButton: "خدماتنا",
        secondaryButton: "دراسات الحالة",
      },
      {
        title: "التميز التكنولوجي",
        subtitle: "فوق التوقعات",
        description: "تقديم حلول عالمية المستوى تدفع الكفاءة والابتكار والميزة التنافسية لعملك.",
        primaryButton: "ابدأ الآن",
        secondaryButton: "اعرف المزيد",
      },
    ],
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }

    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides[language].length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides, language])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides[language].length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides[language].length) % heroSlides[language].length)
  }

  const currentSlideData = heroSlides[language][currentSlide]

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${language === "ar" ? "rtl" : "ltr"}`}
    >
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
              {currentSlideData.title}
              <span className="block text-primary mt-2">{currentSlideData.subtitle}</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200">
              <Button size="lg" className="text-lg px-8 py-3 group">
                {currentSlideData.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 group bg-transparent">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {currentSlideData.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides[language].map((_, index) => (
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
