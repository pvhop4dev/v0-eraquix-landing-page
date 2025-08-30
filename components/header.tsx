"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: newLanguage }))
  }

  const navItems = [
    { name: language === "en" ? "Home" : language === "vi" ? "Trang chủ" : "الرئيسية", href: "#home" },
    { name: language === "en" ? "About" : language === "vi" ? "Giới thiệu" : "حول", href: "#about" },
    { name: language === "en" ? "Products" : language === "vi" ? "Sản phẩm" : "المنتجات", href: "#products" },
    { name: language === "en" ? "Solutions" : language === "vi" ? "Giải pháp" : "الحلول", href: "#solutions" },
    { name: language === "en" ? "Partners" : language === "vi" ? "Đối tác" : "الشركاء", href: "#partners" },
    { name: language === "en" ? "Contact" : language === "vi" ? "Liên hệ" : "اتصل بنا", href: "#contact" },
  ]

  const getLanguageDisplayName = () => {
    switch (language) {
      case "en":
        return "English"
      case "vi":
        return "Tiếng Việt"
      case "ar":
        return "العربية"
      default:
        return "English"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative h-14 w-auto transition-all duration-300 hover:scale-110 hover:rotate-3 border-2 border-primary/20 rounded-xl p-1">
                <img
                  src="/logo_light.webp"
                  alt="Eraquix Logo"
                  className="h-full w-auto dark:hidden"
                />
                <img
                  src="/logo_dark.webp"
                  alt="Eraquix Logo"
                  className="hidden h-full w-auto dark:block"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:bg-accent/80 hover:text-accent-foreground px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="default"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:flex w-11 h-11 items-center justify-center"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="default" className="hidden sm:flex items-center space-x-2 px-4 py-5 h-auto">
                  <Globe className="h-4 w-4" />
                  <span>{getLanguageDisplayName()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <span className={language === "en" ? "font-semibold" : ""}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("vi")}>
                  <span className={language === "vi" ? "font-semibold" : ""}>Tiếng Việt</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
                  <span className={language === "ar" ? "font-semibold" : ""}>العربية</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-bold text-foreground hover:bg-accent/80 hover:text-accent-foreground rounded-lg transition-colors duration-200 my-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile controls section */}
              <div className="pt-2 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center space-x-2 w-full justify-start"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span>
                    {language === "en" ? "Toggle theme" : language === "vi" ? "Đổi giao diện" : "تبديل المظهر"}
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2 w-full justify-start">
                      <Globe className="h-4 w-4" />
                      <span>{getLanguageDisplayName()}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                      <span className={language === "en" ? "font-semibold" : ""}>English</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange("vi")}>
                      <span className={language === "vi" ? "font-semibold" : ""}>Tiếng Việt</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
                      <span className={language === "ar" ? "font-semibold" : ""}>العربية</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
