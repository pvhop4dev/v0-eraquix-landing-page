"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Globe, Users, Shield, Share2, Zap, Camera, Cpu, Wifi } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProductsSection() {
  const [language, setLanguage] = useState("en")

  const content = {
    en: {
      title: "Our Products",
      description: "Innovative solutions designed to transform your business operations and drive digital success.",
      softwareTitle: "Software Products",
      iotTitle: "IoT Products",
      learnMore: "Learn More",
      productsCount: "Products",
    },
    vi: {
      title: "Sản Phẩm Của Chúng Tôi",
      description: "Các giải pháp đổi mới được thiết kế để chuyển đổi hoạt động kinh doanh và thúc đẩy thành công số.",
      softwareTitle: "Sản Phẩm Phần Mềm",
      iotTitle: "Sản Phẩm IoT",
      learnMore: "Tìm Hiểu Thêm",
      productsCount: "Sản Phẩm",
    },
    ar: {
      title: "منتجاتنا",
      description: "حلول مبتكرة مصممة لتحويل عمليات عملك ودفع النجاح الرقمي.",
      softwareTitle: "منتجات البرمجيات",
      iotTitle: "منتجات إنترنت الأشياء",
      learnMore: "اعرف المزيد",
      productsCount: "منتجات",
    },
  }

  const softwareProducts = {
    en: [
      {
        icon: Database,
        name: "Era-Tutor",
        description: "A platform connecting tutors and students quickly and efficiently.",
        category: "Education",
      },
      {
        icon: Globe,
        name: "Eraquix Blog",
        description: "A blog built to technology knowledge sharing and technical experience.",
        category: "Content",
      },
      {
        icon: Users,
        name: "Era-HRM",
        description: "Elevated human resource management system with AI technology.",
        category: "HR Management",
      },
      {
        icon: Shield,
        name: "Era-Security",
        description: "Smart security monitoring solution with AI technology.",
        category: "Security",
      },
      {
        icon: Share2,
        name: "Era-Share",
        description: "A platform for sharing learning materials for everyone.",
        category: "Education",
      },
      {
        icon: Zap,
        name: "Era-Lang",
        description: "Smart language learning software with AI technology.",
        category: "Education",
      },
    ],
    vi: [
      {
        icon: Database,
        name: "Era-Tutor",
        description: "Nền tảng kết nối gia sư và học sinh nhanh chóng và hiệu quả.",
        category: "Giáo dục",
      },
      {
        icon: Globe,
        name: "Eraquix Blog",
        description: "Blog được xây dựng để chia sẻ kiến thức công nghệ và kinh nghiệm kỹ thuật.",
        category: "Nội dung",
      },
      {
        icon: Users,
        name: "Era-HRM",
        description: "Hệ thống quản lý nhân sự nâng cao với công nghệ AI.",
        category: "Quản lý HR",
      },
      {
        icon: Shield,
        name: "Era-Security",
        description: "Giải pháp giám sát bảo mật thông minh với công nghệ AI.",
        category: "Bảo mật",
      },
      {
        icon: Share2,
        name: "Era-Share",
        description: "Nền tảng chia sẻ tài liệu học tập cho mọi người.",
        category: "Giáo dục",
      },
      {
        icon: Zap,
        name: "Era-Lang",
        description: "Phần mềm học ngôn ngữ thông minh với công nghệ AI.",
        category: "Giáo dục",
      },
    ],
    ar: [
      {
        icon: Database,
        name: "Era-Tutor",
        description: "منصة تربط المعلمين والطلاب بسرعة وكفاءة.",
        category: "التعليم",
      },
      {
        icon: Globe,
        name: "Eraquix Blog",
        description: "مدونة مبنية لمشاركة المعرفة التقنية والخبرة الفنية.",
        category: "المحتوى",
      },
      {
        icon: Users,
        name: "Era-HRM",
        description: "نظام إدارة الموارد البشرية المتقدم بتقنية الذكاء الاصطناعي.",
        category: "إدارة الموارد البشرية",
      },
      {
        icon: Shield,
        name: "Era-Security",
        description: "حل مراقبة الأمان الذكي بتقنية الذكاء الاصطناعي.",
        category: "الأمان",
      },
      {
        icon: Share2,
        name: "Era-Share",
        description: "منصة لمشاركة المواد التعليمية للجميع.",
        category: "التعليم",
      },
      {
        icon: Zap,
        name: "Era-Lang",
        description: "برنامج تعلم اللغة الذكي بتقنية الذكاء الاصطناعي.",
        category: "التعليم",
      },
    ],
  }

  const iotProducts = {
    en: [
      {
        icon: Camera,
        name: "IP Camera Product",
        description: "Wi-Fi camera for convenient and efficient security monitoring.",
        category: "Security",
      },
      {
        icon: Cpu,
        name: "Synchronized Camera System",
        description: "Ensures security, reliable and environmentally.",
        category: "Security",
      },
      {
        icon: Wifi,
        name: "Smart Sensor Products",
        description: "Monitor air environmental factors intelligently and efficiently.",
        category: "IoT",
      },
    ],
    vi: [
      {
        icon: Camera,
        name: "Sản Phẩm Camera IP",
        description: "Camera Wi-Fi để giám sát bảo mật thuận tiện và hiệu quả.",
        category: "Bảo mật",
      },
      {
        icon: Cpu,
        name: "Hệ Thống Camera Đồng Bộ",
        description: "Đảm bảo bảo mật, đáng tin cậy và thân thiện với môi trường.",
        category: "Bảo mật",
      },
      {
        icon: Wifi,
        name: "Sản Phẩm Cảm Biến Thông Minh",
        description: "Giám sát các yếu tố môi trường không khí một cách thông minh và hiệu quả.",
        category: "IoT",
      },
    ],
    ar: [
      {
        icon: Camera,
        name: "منتج كاميرا IP",
        description: "كاميرا واي فاي لمراقبة الأمان المريحة والفعالة.",
        category: "الأمان",
      },
      {
        icon: Cpu,
        name: "نظام الكاميرا المتزامن",
        description: "يضمن الأمان والموثوقية والصداقة البيئية.",
        category: "الأمان",
      },
      {
        icon: Wifi,
        name: "منتجات الاستشعار الذكية",
        description: "مراقبة عوامل البيئة الهوائية بذكاء وكفاءة.",
        category: "إنترنت الأشياء",
      },
    ],
  }

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

  const currentContent = content[language]
  const currentSoftwareProducts = softwareProducts[language]
  const currentIotProducts = iotProducts[language]

  return (
    <section id="products" className={`py-20 bg-background ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>
        </div>

        {/* Software Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-manrope)]">
              {currentContent.softwareTitle}
            </h3>
            <Badge variant="secondary" className="text-sm">
              6 {currentContent.productsCount}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSoftwareProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-manrope)]">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    {currentContent.learnMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* IoT Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-manrope)]">
              {currentContent.iotTitle}
            </h3>
            <Badge variant="secondary" className="text-sm">
              3 {currentContent.productsCount}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentIotProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <product.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-lg font-[family-name:var(--font-manrope)]">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    {currentContent.learnMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
