import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Globe, Users, Shield, Share2, Zap, Camera, Cpu, Wifi } from "lucide-react"

export default function ProductsSection() {
  const softwareProducts = [
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
  ]

  const iotProducts = [
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
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions designed to transform your business operations and drive digital success.
          </p>
        </div>

        {/* Software Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-manrope)]">
              Software Products
            </h3>
            <Badge variant="secondary" className="text-sm">
              6 Products
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProducts.map((product, index) => (
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
                    Learn More
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
              IoT Products
            </h3>
            <Badge variant="secondary" className="text-sm">
              3 Products
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotProducts.map((product, index) => (
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
                    Learn More
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
