import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-manrope)]">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eraquix Solutions is a team of passionate technology experts with a mission to provide advanced technology
            solutions to help businesses optimize operations and enhance business efficiency.
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
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide the most advanced technology solutions for businesses, bringing sustainable value to customers
                  and the community.
                </p>
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
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contribute to the sustainable development of businesses, accompanying them on their digital
                  transformation journey, reaching new heights.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/modern-office-technology-team.png" alt="Eraquix Team" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Expert Team", description: "Experienced professionals dedicated to your success" },
            { icon: Lightbulb, title: "Innovation", description: "Cutting-edge solutions for modern challenges" },
            { icon: Target, title: "Results-Driven", description: "Focused on delivering measurable outcomes" },
            { icon: Eye, title: "Vision", description: "Clear roadmap for digital transformation" },
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-manrope)]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
