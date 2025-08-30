"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Brain, Network, Database, Smartphone, Cloud, MessageSquare, BarChart3, Cog } from "lucide-react"
import { useState, useEffect } from "react"

type Language = 'en' | 'vi' | 'ar'; 
export default function SolutionsSection() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = (localStorage.getItem("language") as Language) || "en"
      setLanguage(currentLang)
    }

    handleLanguageChange()
    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  const content = {
    en: {
      title: "Our Solutions",
      subtitle: "Comprehensive technology solutions tailored to meet your business needs and drive innovation.",
      techTitle: "Technologies We Use",
      learnMore: "Learn More",
      solutions: [
        {
          title: "Software Solutions",
          description:
            "With the latest technologies: Cloud, Microservices, Big Data, Blockchain. Ready for all your needs.",
          features: [
            "Cloud-based applications",
            "Microservices architecture",
            "Big Data analytics",
            "Blockchain integration",
          ],
        },
        {
          title: "Artificial Intelligence Solutions",
          description: "Applying AI to optimize processes and content efficiency.",
          features: ["Computer Vision", "Natural Language Processing", "Machine Learning", "Intelligent Automation"],
        },
        {
          title: "Internet Of Things Solutions",
          description: "IoT solutions can connect and manage smart devices in your system.",
          features: [
            "Central surveillance system",
            "Smart sensor systems",
            "Analytics and alert system",
            "Device management platform",
          ],
        },
      ],
      technologies: [
        { name: "Databases" },
        { name: "Cloud" },
        { name: "Mobile" },
        { name: "APIs" },
        { name: "Analytics" },
        { name: "DevOps" },
      ],
    },
    vi: {
      title: "Giải Pháp Của Chúng Tôi",
      subtitle:
        "Các giải pháp công nghệ toàn diện được thiết kế riêng để đáp ứng nhu cầu kinh doanh và thúc đẩy đổi mới.",
      techTitle: "Công Nghệ Chúng Tôi Sử Dụng",
      learnMore: "Tìm Hiểu Thêm",
      solutions: [
        {
          title: "Giải Pháp Phần Mềm",
          description:
            "Với các công nghệ mới nhất: Cloud, Microservices, Big Data, Blockchain. Sẵn sàng cho mọi nhu cầu của bạn.",
          features: ["Ứng dụng dựa trên Cloud", "Kiến trúc Microservices", "Phân tích Big Data", "Tích hợp Blockchain"],
        },
        {
          title: "Giải Pháp Trí Tuệ Nhân Tạo",
          description: "Ứng dụng AI để tối ưu hóa quy trình và hiệu quả nội dung.",
          features: ["Thị giác máy tính", "Xử lý ngôn ngữ tự nhiên", "Học máy", "Tự động hóa thông minh"],
        },
        {
          title: "Giải Pháp Internet Vạn Vật",
          description: "Giải pháp IoT có thể kết nối và quản lý các thiết bị thông minh trong hệ thống của bạn.",
          features: [
            "Hệ thống giám sát trung tâm",
            "Hệ thống cảm biến thông minh",
            "Hệ thống phân tích và cảnh báo",
            "Nền tảng quản lý thiết bị",
          ],
        },
      ],
      technologies: [
        { name: "Cơ sở dữ liệu" },
        { name: "Đám mây" },
        { name: "Di động" },
        { name: "APIs" },
        { name: "Phân tích" },
        { name: "DevOps" },
      ],
    },
    ar: {
      title: "حلولنا",
      subtitle: "حلول تقنية شاملة مصممة خصيصاً لتلبية احتياجات عملك ودفع الابتكار.",
      techTitle: "التقنيات التي نستخدمها",
      learnMore: "اعرف المزيد",
      solutions: [
        {
          title: "حلول البرمجيات",
          description:
            "مع أحدث التقنيات: السحابة، الخدمات المصغرة، البيانات الضخمة، البلوك تشين. جاهزة لجميع احتياجاتك.",
          features: [
            "تطبيقات قائمة على السحابة",
            "هندسة الخدمات المصغرة",
            "تحليل البيانات الضخمة",
            "تكامل البلوك تشين",
          ],
        },
        {
          title: "حلول الذكاء الاصطناعي",
          description: "تطبيق الذكاء الاصطناعي لتحسين العمليات وكفاءة المحتوى.",
          features: ["الرؤية الحاسوبية", "معالجة اللغة الطبيعية", "التعلم الآلي", "الأتمتة الذكية"],
        },
        {
          title: "حلول إنترنت الأشياء",
          description: "حلول إنترنت الأشياء يمكنها ربط وإدارة الأجهزة الذكية في نظامك.",
          features: ["نظام مراقبة مركزي", "أنظمة أجهزة استشعار ذكية", "نظام التحليل والتنبيه", "منصة إدارة الأجهزة"],
        },
      ],
      technologies: [
        { name: "قواعد البيانات" },
        { name: "السحابة" },
        { name: "الجوال" },
        { name: "واجهات برمجة التطبيقات" },
        { name: "التحليلات" },
        { name: "DevOps" },
      ],
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <section id="solutions" className={`py-20 bg-muted/30 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{currentContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {currentContent.solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  {index === 0 && <Code className="h-8 w-8 text-primary" />}
                  {index === 1 && <Brain className="h-8 w-8 text-primary" />}
                  {index === 2 && <Network className="h-8 w-8 text-primary" />}
                </div>
                <CardTitle className="text-xl font-[family-name:var(--font-manrope)] group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  {currentContent.learnMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-manrope)]">
            {currentContent.techTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: Database },
              { icon: Cloud },
              { icon: Smartphone },
              { icon: MessageSquare },
              { icon: BarChart3 },
              { icon: Cog },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                  <tech.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {currentContent.technologies[index].name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
