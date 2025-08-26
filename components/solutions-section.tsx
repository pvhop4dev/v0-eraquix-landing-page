import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Brain, Network, Database, Smartphone, Cloud, MessageSquare, BarChart3, Cog } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Code,
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
      icon: Brain,
      title: "Artificial Intelligence Solutions",
      description: "Applying AI to optimize processes and content efficiency.",
      features: ["Computer Vision", "Natural Language Processing", "Machine Learning", "Intelligent Automation"],
    },
    {
      icon: Network,
      title: "Internet Of Things Solutions",
      description: "IoT solutions can connect and manage smart devices in your system.",
      features: [
        "Central surveillance system",
        "Smart sensor systems",
        "Analytics and alert system",
        "Device management platform",
      ],
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to meet your business needs and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-8 w-8 text-primary" />
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
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-manrope)]">
            Technologies We Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: Database, name: "Databases" },
              { icon: Cloud, name: "Cloud" },
              { icon: Smartphone, name: "Mobile" },
              { icon: MessageSquare, name: "APIs" },
              { icon: BarChart3, name: "Analytics" },
              { icon: Cog, name: "DevOps" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                  <tech.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
