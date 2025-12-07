"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function HomePage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Empowering Communities in Puerto Rico",
      subtitle: "Bringing opportunity and education within reach for everyone",
      explorePrograms: "Explore Programs",
      getInTouch: "Get in Touch",
      whoWeAre: "Who We Are",
      description1:
        "Al Alcance Puerto Rico is a community organization dedicated to bringing education, opportunity, and empowerment within reach for everyone in Puerto Rico.",
      description2:
        "Through our comprehensive programs and workshops, we support personal growth, professional development, and community building.",
      learnMore: "Learn More About Us",
      ourPrograms: "Our Programs",
      education: "Education",
      educationDesc: "Quality learning programs for all ages",
      profDev: "Professional Development",
      profDevDesc: "Career advancement and skill building",
      community: "Community Support",
      communityDesc: "Resources and support for growth",
      ready: "Ready to Make a Difference?",
      readyDesc: "Join our community and explore the opportunities available to you.",
      getStarted: "Get Started Today",
    },
    es: {
      title: "Empoderando Comunidades en Puerto Rico",
      subtitle: "Llevando la oportunidad y la educación al alcance de todos",
      explorePrograms: "Explorar Programas",
      getInTouch: "Ponte en Contacto",
      whoWeAre: "Quiénes Somos",
      description1:
        "Al Alcance Puerto Rico es una organización comunitaria dedicada a llevar educación, oportunidad y empoderamiento al alcance de todos en Puerto Rico.",
      description2:
        "A través de nuestros programas y talleres integrales, apoyamos el crecimiento personal, desarrollo profesional y construcción comunitaria.",
      learnMore: "Aprende Más Sobre Nosotros",
      ourPrograms: "Nuestros Programas",
      education: "Educación",
      educationDesc: "Programas de aprendizaje de calidad para todas las edades",
      profDev: "Desarrollo Profesional",
      profDevDesc: "Avance de carrera y desarrollo de habilidades",
      community: "Apoyo Comunitario",
      communityDesc: "Recursos y apoyo para el crecimiento",
      ready: "¿Listo para Hacer la Diferencia?",
      readyDesc: "Únete a nuestra comunidad y explora las oportunidades disponibles para ti.",
      getStarted: "Comienza Hoy",
    },
  }

  const t = translations[language]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">{t.title}</h1>
              <p className="text-xl md:text-2xl opacity-90 text-balance">{t.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href="/programs">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {t.explorePrograms}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    {t.getInTouch}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">{t.whoWeAre}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.description1}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.description2}</p>
                <Link href="/about">
                  <Button variant="default">{t.learnMore}</Button>
                </Link>
              </div>
              <div className="bg-secondary/20 rounded-lg h-80 flex items-center justify-center">
                <p className="text-muted-foreground text-center">Featured Image</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">{t.ourPrograms}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t.education, description: t.educationDesc },
                { title: t.profDev, description: t.profDevDesc },
                { title: t.community, description: t.communityDesc },
              ].map((program) => (
                <div key={program.title} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link href="/programs">
                    <Button variant="outline" size="sm">
                      {t.learnMore}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold">{t.ready}</h2>
            <p className="text-lg opacity-90">{t.readyDesc}</p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                {t.getStarted}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
