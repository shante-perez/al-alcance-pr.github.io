"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { ChevronDown } from "lucide-react"

export default function TeamPage() {
  const { language } = useLanguage()
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  const translations = {
    en: {
      ourTeam: "Our Team",
      dedication: "Dedicated professionals committed to empowering our community",
      culture: "Our Culture",
      cultureDesc:
        "Our team is united by a shared commitment to making a positive impact in Puerto Rico. We believe in collaboration, continuous learning, and creating an inclusive environment where everyone can thrive. Together, we're building a community where education and opportunity are truly within reach.",
      learnMore: "Learn more about",
      testimonials: {
        "María García":
          "I'm here because education is the key to unlocking opportunity for every child in Puerto Rico. My 15 years in community development have shown me the power of accessible science education.",
        "Carlos López":
          "Innovation in education transforms lives. I'm passionate about creating programs that make science tangible and exciting for our students.",
        "Ana Rodríguez":
          "Building genuine connections within our communities is what drives me. Every participant we serve represents a family's future.",
        "José Martínez":
          "Technical skills are essential, but mentorship is transformative. I'm committed to guiding the next generation of problem-solvers.",
        "Luna Díaz":
          "Behind every successful program is seamless coordination. I ensure our operations run smoothly so our team can focus on impact.",
        "Roberto Santos":
          "I believe in meeting people where they are. Outreach isn't just about numbers—it's about building relationships with our community.",
      },
      testimonialES: {
        "María García":
          "Estoy aquí porque la educación es la clave para desbloquear oportunidades para cada niño en Puerto Rico. Mis 15 años en desarrollo comunitario me han mostrado el poder de la educación científica accesible.",
        "Carlos López":
          "La innovación en la educación transforma vidas. Me apasiona crear programas que hagan la ciencia tangible y emocionante para nuestros estudiantes.",
        "Ana Rodríguez":
          "Construir conexiones genuinas dentro de nuestras comunidades es lo que me impulsa. Cada participante que servimos representa el futuro de una familia.",
        "José Martínez":
          "Las habilidades técnicas son esenciales, pero la mentoría es transformadora. Me comprometo a guiar a la próxima generación de solucionadores de problemas.",
        "Luna Díaz":
          "Detrás de cada programa exitoso hay una coordinación sin fisuras. Aseguro que nuestras operaciones funcionen sin problemas para que nuestro equipo se enfoque en el impacto.",
        "Roberto Santos":
          "Creo en encontrar a las personas donde están. El alcance no es solo sobre números, es sobre construir relaciones con nuestra comunidad.",
      },
    },
    es: {
      ourTeam: "Nuestro Equipo",
      dedication: "Profesionales dedicados comprometidos con empoderamiento comunitario",
      culture: "Nuestra Cultura",
      cultureDesc:
        "Nuestro equipo está unido por un compromiso compartido de hacer un impacto positivo en Puerto Rico. Creemos en la colaboración, el aprendizaje continuo y la creación de un ambiente inclusivo donde todos puedan prosperar. Juntos, estamos construyendo una comunidad donde la educación y la oportunidad están realmente al alcance.",
      learnMore: "Aprende más sobre",
      testimonials: {
        "María García":
          "Estoy aquí porque la educación es la clave para desbloquear oportunidades para cada niño en Puerto Rico. Mis 15 años en desarrollo comunitario me han mostrado el poder de la educación científica accesible.",
        "Carlos López":
          "La innovación en la educación transforma vidas. Me apasiona crear programas que hagan la ciencia tangible y emocionante para nuestros estudiantes.",
        "Ana Rodríguez":
          "Construir conexiones genuinas dentro de nuestras comunidades es lo que me impulsa. Cada participante que servimos representa el futuro de una familia.",
        "José Martínez":
          "Las habilidades técnicas son esenciales, pero la mentoría es transformadora. Me comprometo a guiar a la próxima generación de solucionadores de problemas.",
        "Luna Díaz":
          "Detrás de cada programa exitoso hay una coordinación sin fisuras. Aseguro que nuestras operaciones funcionen sin problemas para que nuestro equipo se enfoque en el impacto.",
        "Roberto Santos":
          "Creo en encontrar a las personas donde están. El alcance no es solo sobre números, es sobre construir relaciones con nuestra comunidad.",
      },
    },
  }

  const t = translations[language]

  const teamMembers = [
    {
      name: "María García",
      role: language === "en" ? "Executive Director" : "Directora Ejecutiva",
      bio:
        language === "en"
          ? "Visionary leader dedicated to community empowerment with 15+ years of experience."
          : "Líder visionaria dedicada al empoderamiento comunitario con más de 15 años de experiencia.",
      image: "/professional-woman-executive-director-puerto-rico.jpg",
    },
    {
      name: "Carlos López",
      role: language === "en" ? "Program Director" : "Director de Programas",
      bio:
        language === "en"
          ? "Passionate educator committed to innovative program development and delivery."
          : "Educador apasionado comprometido con el desarrollo e implementación innovadora de programas.",
      image: "/professional-man-program-director.jpg",
    },
    {
      name: "Ana Rodríguez",
      role: language === "en" ? "Community Coordinator" : "Coordinadora Comunitaria",
      bio:
        language === "en"
          ? "Dedicated to building strong community connections and supporting participants."
          : "Dedicada a construir conexiones comunitarias sólidas y apoyar a los participantes.",
      image: "/professional-woman-community-coordinator.jpg",
    },
    {
      name: "José Martínez",
      role: language === "en" ? "Workshop Facilitator" : "Facilitador de Talleres",
      bio:
        language === "en"
          ? "Experienced trainer skilled in professional development and technical skills."
          : "Capacitador experimentado experto en desarrollo profesional y habilidades técnicas.",
      image: "/professional-man-workshop-facilitator.jpg",
    },
    {
      name: "Luna Díaz",
      role: language === "en" ? "Operations Manager" : "Gerente de Operaciones",
      bio:
        language === "en"
          ? "Ensures smooth operations and efficient resource management across programs."
          : "Asegura operaciones fluidas y gestión eficiente de recursos en todos los programas.",
      image: "/operations-manager-woman.png",
    },
    {
      name: "Roberto Santos",
      role: language === "en" ? "Outreach Specialist" : "Especialista en Alcance",
      bio:
        language === "en"
          ? "Connects with community members and expands Al Alcance's reach and impact."
          : "Se conecta con miembros de la comunidad y expande el alcance e impacto de Al Alcance.",
      image: "/professional-man-outreach-specialist.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary via-tertiary to-accent text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.ourTeam}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{t.dedication}</p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-lg overflow-hidden border-2 border-tertiary/30 shadow-md hover:shadow-lg hover:border-tertiary/60 transition-all cursor-pointer"
                  onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                >
                  <div className="relative h-64 w-full bg-muted overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-tertiary mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

                    <button className="flex items-center justify-center gap-2 mx-auto text-sm font-semibold text-primary hover:text-tertiary transition-colors">
                      <span>{t.learnMore}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedMember === member.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedMember === member.name && (
                      <div className="mt-6 pt-6 border-t-2 border-tertiary/20 bg-secondary/10 rounded-lg p-4 animate-in fade-in duration-300">
                        <p className="text-sm text-foreground leading-relaxed italic">
                          {(t.testimonials as Record<string, string>)[member.name] ||
                            (t.testimonialES as Record<string, string>)[member.name]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-tertiary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold text-primary">{t.culture}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.cultureDesc}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
