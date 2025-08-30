"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutSection() {
  type LanguageKey = 'en' | 'vi' | 'ar';
  const [language, setLanguage] = useState<LanguageKey>('en')

  const content = {
    en: {
      title: "About Us",
      description:
        "Eraquix Solutions is a team of passionate technology experts with a mission to provide advanced technology solutions to help businesses optimize operations and enhance business efficiency.",
      mission: {
        title: "Our Mission",
        description:
          "Provide the most advanced technology solutions for businesses, bringing sustainable value to customers and the community.",
      },
      vision: {
        title: "Our Vision",
        description:
          "Contribute to the sustainable development of businesses, accompanying them on their digital transformation journey, reaching new heights.",
      },
      features: [
        { title: "Expert Team", description: "Experienced professionals dedicated to your success" },
        { title: "Innovation", description: "Cutting-edge solutions for modern challenges" },
        { title: "Results-Driven", description: "Focused on delivering measurable outcomes" },
        { title: "Vision", description: "Clear roadmap for digital transformation" },
      ],
    },
    vi: {
      title: "Về Chúng Tôi",
      description:
        "Eraquix Solutions là đội ngũ các chuyên gia công nghệ đầy đam mê với sứ mệnh cung cấp các giải pháp công nghệ tiên tiến giúp doanh nghiệp tối ưu hóa hoạt động và nâng cao hiệu quả kinh doanh.",
      mission: {
        title: "Sứ Mệnh",
        description:
          "Cung cấp các giải pháp công nghệ tiên tiến nhất cho doanh nghiệp, mang lại giá trị bền vững cho khách hàng và cộng đồng.",
      },
      vision: {
        title: "Tầm Nhìn",
        description:
          "Góp phần phát triển bền vững của doanh nghiệp, đồng hành cùng họ trong hành trình chuyển đổi số, vươn tới những tầm cao mới.",
      },
      features: [
        { title: "Đội Ngũ Chuyên Gia", description: "Các chuyên gia giàu kinh nghiệm tận tâm với thành công của bạn" },
        { title: "Đổi Mới", description: "Giải pháp tiên tiến cho những thách thức hiện đại" },
        { title: "Hướng Kết Quả", description: "Tập trung vào việc cung cấp kết quả có thể đo lường được" },
        { title: "Tầm Nhìn", description: "Lộ trình rõ ràng cho chuyển đổi số" },
      ],
    },
    ar: {
      title: "من نحن",
      description:
        "إيراكويكس سوليوشنز هو فريق من خبراء التكنولوجيا المتحمسين مع مهمة توفير حلول تكنولوجية متقدمة لمساعدة الشركات على تحسين العمليات وتعزيز كفاءة الأعمال.",
      mission: {
        title: "مهمتنا",
        description: "توفير أحدث الحلول التكنولوجية للشركات، وتقديم قيمة مستدامة للعملاء والمجتمع.",
      },
      vision: {
        title: "رؤيتنا",
        description: "المساهمة في التنمية المستدامة للشركات، ومرافقتها في رحلة التحول الرقمي، والوصول إلى آفاق جديدة.",
      },
      features: [
        { title: "فريق خبراء", description: "محترفون ذوو خبرة مكرسون لنجاحك" },
        { title: "الابتكار", description: "حلول متطورة للتحديات الحديثة" },
        { title: "موجه للنتائج", description: "يركز على تقديم نتائج قابلة للقياس" },
        { title: "الرؤية", description: "خارطة طريق واضحة للتحول الرقمي" },
      ],
    },
  }

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") as LanguageKey) || "en"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLanguage = (localStorage.getItem("language") as LanguageKey) || "en"
      setLanguage(savedLanguage)
    }

    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  const currentContent = content[language]

  return (
    <section id="about" className={`py-20 bg-muted/30 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-manrope)]">
                  {currentContent.mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{currentContent.mission.description}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-manrope)]">
                  {currentContent.vision.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{currentContent.vision.description}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-office-technology-team.png"
              alt="Eraquix Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[Users, Lightbulb, Target, Eye].map((Icon, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-manrope)]">
                  {currentContent.features[index].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentContent.features[index].description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
