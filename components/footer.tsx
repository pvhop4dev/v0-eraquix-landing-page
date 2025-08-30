"use client"

import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [language, setLanguage] = useState("en")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = localStorage.getItem("language") || "en"
      setLanguage(currentLang)
    }

    handleLanguageChange()
    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  const content = {
    en: {
      description:
        "Creating value through technology and understanding. Accompanying businesses on the digital transformation journey.",
      quickLinks: "Quick Links",
      services: "Services",
      contactInfo: "Contact Info",
      links: ["Home", "About", "Products", "Solutions", "Partners", "Contact"],
      servicesList: [
        "Software Development",
        "AI Solutions",
        "IoT Integration",
        "Cloud Services",
        "Digital Transformation",
        "Technical Consulting",
      ],
      copyright: "Eraquix Solutions. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
    },
    vi: {
      description:
        "Tạo ra giá trị thông qua công nghệ và sự hiểu biết. Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.",
      quickLinks: "Liên Kết Nhanh",
      services: "Dịch Vụ",
      contactInfo: "Thông Tin Liên Hệ",
      links: ["Trang chủ", "Giới thiệu", "Sản phẩm", "Giải pháp", "Đối tác", "Liên hệ"],
      servicesList: [
        "Phát triển phần mềm",
        "Giải pháp AI",
        "Tích hợp IoT",
        "Dịch vụ đám mây",
        "Chuyển đổi số",
        "Tư vấn kỹ thuật",
      ],
      copyright: "Eraquix Solutions. Tất cả quyền được bảo lưu.",
      privacyPolicy: "Chính sách bảo mật",
      termsOfService: "Điều khoản dịch vụ",
      cookiePolicy: "Chính sách cookie",
    },
    ar: {
      description: "خلق القيمة من خلال التكنولوجيا والفهم. مرافقة الشركات في رحلة التحول الرقمي.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contactInfo: "معلومات الاتصال",
      links: ["الرئيسية", "حول", "المنتجات", "الحلول", "الشركاء", "اتصل بنا"],
      servicesList: [
        "تطوير البرمجيات",
        "حلول الذكاء الاصطناعي",
        "تكامل إنترنت الأشياء",
        "الخدمات السحابية",
        "التحول الرقمي",
        "الاستشارات التقنية",
      ],
      copyright: "Eraquix Solutions. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <footer className={`bg-card border-t ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center border-2 border-primary/20 rounded-xl p-1">
              <img
                src="/logo_light.webp"
                alt="Eraquix Logo"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/logo_dark.webp"
                alt="Eraquix Logo"
                className="hidden h-10 w-auto dark:block"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-manrope)]">ERAQUIX</h3>
            <p className="text-muted-foreground leading-relaxed">{currentContent.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-[family-name:var(--font-manrope)]">
              {currentContent.quickLinks}
            </h4>
            <ul className="space-y-2">
              {currentContent.links.map((link, index) => (
                <li key={link}>
                  <a
                    href={`#${["home", "about", "products", "solutions", "partners", "contact"][index]}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-[family-name:var(--font-manrope)]">
              {currentContent.services}
            </h4>
            <ul className="space-y-2">
              {currentContent.servicesList.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground font-[family-name:var(--font-manrope)]">
              {currentContent.contactInfo}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contact@eraquix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+84 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {language === "ar"
                    ? "مدينة هو تشي منه، فيتنام"
                    : language === "vi"
                      ? "Thành phố Hồ Chí Minh, Việt Nam"
                      : "Ho Chi Minh City, Vietnam"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {currentContent.copyright}
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {currentContent.privacyPolicy}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {currentContent.termsOfService}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {currentContent.cookiePolicy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
