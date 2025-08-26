import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import SolutionsSection from "@/components/solutions-section"
import PartnersSection from "@/components/partners-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
