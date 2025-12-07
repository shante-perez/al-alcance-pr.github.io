"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function AboutPage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "About Al Alcance",
      subtitle: "Dedicated to bringing education and opportunity within reach for every member of our community",
      mission: "Our Mission",
      missionText:
        "To empower individuals and communities in Puerto Rico by providing accessible education, professional development, and resources that foster growth, opportunity, and positive change.",
      vision: "Our Vision",
      visionText:
        "A Puerto Rico where every individual has access to the tools, knowledge, and support needed to achieve their full potential and contribute to a thriving community.",
      values: "Our Core Values",
      accessibility: "Accessibility",
      accessibilityDesc: "Ensuring opportunity is within reach for all",
      excellence: "Excellence",
      excellenceDesc: "Delivering quality education and support",
      communityVal: "Community",
      communityValDesc: "Building stronger connections and collaboration",
      growth: "Growth",
      growthDesc: "Fostering continuous learning and development",
      respect: "Respect",
      respectDesc: "Honoring diversity and individual dignity",
      impact: "Impact",
      impactDesc: "Creating meaningful and lasting change",
      join: "Join Our Community",
      joinDesc: "Learn more about how we can support your growth",
      explore: "Explore Programs",
    },
    es: {
      title: "Acerca de Al Alcance",
      subtitle: "Dedicados a llevar la educación y la oportunidad al alcance de cada miembro de nuestra comunidad",
      mission: "Nuestra Misión",
      missionText:
        "Empoderar a individuos y comunidades en Puerto Rico proporcionando educación accesible, desarrollo profesional y recursos que fomenten el crecimiento, la oportunidad y el cambio positivo.",
      vision: "Nuestra Visión",
      visionText:
        "Un Puerto Rico donde cada individuo tenga acceso a las herramientas, conocimientos y apoyo necesarios para alcanzar su máximo potencial y contribuir a una comunidad próspera.",
      values: "Nuestros Valores Fundamentales",
      accessibility: "Accesibilidad",
      accessibilityDesc: "Asegurar que la oportunidad esté al alcance de todos",
      excellence: "Excelencia",
      excellenceDesc: "Entregando educación y apoyo de calidad",
      communityVal: "Comunidad",
      communityValDesc: "Construir conexiones más fuertes y colaboración",
      growth: "Crecimiento",
      growthDesc: "Fomentar el aprendizaje y desarrollo continuo",
      respect: "Respeto",
      respectDesc: "Honrar la diversidad y la dignidad individual",
      impact: "Impacto",
      impactDesc: "Crear cambios significativos y duraderos",
      join: "Únete a Nuestra Comunidad",
      joinDesc: "Aprende cómo podemos apoyar tu crecimiento",
      explore: "Explorar Programas",
    },
  }

  const t = translations[language]

  const values = [
    { title: t.accessibility, description: t.accessibilityDesc },
    { title: t.excellence, description: t.excellenceDesc },
    { title: t.communityVal, description: t.communityValDesc },
    { title: t.growth, description: t.growthDesc },
    { title: t.respect, description: t.respectDesc },
    { title: t.impact, description: t.impactDesc },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">{t.mission}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.missionText}</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">{t.vision}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.visionText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">{t.values}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-lg p-6 border border-border text-center">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center space-y-6">
          <h2 className="text-3xl font-bold">{t.join}</h2>
          <p className="text-lg opacity-90">{t.joinDesc}</p>
          <Link href="/programs">
            <Button variant="secondary" size="lg">
              {t.explore}
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
