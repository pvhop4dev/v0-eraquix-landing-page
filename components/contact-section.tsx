"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
type Language = 'en' | 'vi' | 'ar';
export default function ContactSection() {
  const [language, setLanguage] = useState<Language>("en")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = localStorage.getItem("language") as Language || "en"
      setLanguage(currentLang)
    }

    handleLanguageChange()
    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  const content = {
    en: {
      title: "Contact",
      subtitle: "Please leave your information and we will contact you as soon as possible.",
      getInTouch: "Get in Touch",
      description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      email: "Email",
      phone: "Phone",
      address: "Address",
      addressValue: "Ho Chi Minh City, Vietnam",
      formTitle: "Send us a message",
      fullNamePlaceholder: "Full Name",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "Enter your phone number",
      messagePlaceholder: "Enter your message",
      sendButton: "Send Information",
    },
    vi: {
      title: "Liên Hệ",
      subtitle: "Vui lòng để lại thông tin và chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
      getInTouch: "Liên Hệ Với Chúng Tôi",
      description:
        "Chúng tôi rất muốn nghe từ bạn. Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất có thể.",
      email: "Email",
      phone: "Điện thoại",
      address: "Địa chỉ",
      addressValue: "Thành phố Hồ Chí Minh, Việt Nam",
      formTitle: "Gửi tin nhắn cho chúng tôi",
      fullNamePlaceholder: "Họ và tên",
      emailPlaceholder: "Nhập email của bạn",
      phonePlaceholder: "Nhập số điện thoại",
      messagePlaceholder: "Nhập tin nhắn của bạn",
      sendButton: "Gửi Thông Tin",
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "يرجى ترك معلوماتك وسنتواصل معك في أقرب وقت ممكن.",
      getInTouch: "تواصل معنا",
      description: "نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      addressValue: "مدينة هو تشي منه، فيتنام",
      formTitle: "أرسل لنا رسالة",
      fullNamePlaceholder: "الاسم الكامل",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      phonePlaceholder: "أدخل رقم هاتفك",
      messagePlaceholder: "أدخل رسالتك",
      sendButton: "إرسال المعلومات",
    },
  }

  const currentContent = content[language as keyof typeof content]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className={`py-20 bg-muted/30 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            {currentContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{currentContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
                {currentContent.getInTouch}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{currentContent.description}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{currentContent.email}</h4>
                  <p className="text-muted-foreground">contact@eraquix.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{currentContent.phone}</h4>
                  <p className="text-muted-foreground">+84 (0) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{currentContent.address}</h4>
                  <p className="text-muted-foreground">{currentContent.addressValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-[family-name:var(--font-manrope)]">
                {currentContent.formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="fullName"
                    placeholder={currentContent.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={currentContent.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={currentContent.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={currentContent.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-lg group">
                  {currentContent.sendButton}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
