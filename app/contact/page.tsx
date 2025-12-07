"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ContactPage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Reach out to learn more about our programs and opportunities.",
      sendMessage: "Send us a Message",
      fullName: "Full Name",
      fullNamePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      phone: "Phone Number (Optional)",
      phonePlaceholder: "+1 (787) 123-4567",
      subject: "Subject",
      subjectPlaceholder: "What's this about?",
      messageLabel: "Message",
      messagePlaceholder: "Tell us more about your inquiry...",
      submit: "Send Message",
      contactInfo: "Contact Information",
      address: "Office Address",
      companyName: "Al Alcance Puerto Rico",
      sanjuan: "San Juan, PR 00901",
      phoneTitle: "Phone",
      phoneNumber: "+1 (787) 555-0123",
      hours: "Monday - Friday, 9AM - 5PM EST",
      emailTitle: "Email",
      email1: "info@alalcance.org",
      email2: "programs@alalcance.org",
      officeHours: "Office Hours",
      monFri: "Monday - Friday: 9:00 AM - 5:00 PM",
      sat: "Saturday: 10:00 AM - 3:00 PM",
      sun: "Sunday: Closed",
      faq: "Frequently Asked Questions",
      q1: "How do I register for a program?",
      a1: "You can register through our website or contact us directly. Fill out the contact form above and we'll guide you through the registration process.",
      q2: "Are the programs free?",
      a2: "Many of our programs are free or low-cost to ensure accessibility. Contact us for specific pricing information.",
      q3: "How often are workshops held?",
      a3: "We offer workshops regularly throughout the month. Check our workshops page for the latest schedule.",
      q4: "Can I volunteer with Al Alcance?",
      a4: "We welcome volunteers! Contact us to learn about volunteer opportunities in our community.",
    },
    es: {
      title: "Ponte en Contacto",
      subtitle:
        "Nos encantaría saber de ti. Comunícate para obtener más información sobre nuestros programas y oportunidades.",
      sendMessage: "Envíanos un Mensaje",
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Tu nombre",
      email: "Correo Electrónico",
      emailPlaceholder: "tu@correo.com",
      phone: "Número de Teléfono (Opcional)",
      phonePlaceholder: "+1 (787) 123-4567",
      subject: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos más sobre tu consulta...",
      submit: "Enviar Mensaje",
      contactInfo: "Información de Contacto",
      address: "Dirección de la Oficina",
      companyName: "Al Alcance Puerto Rico",
      sanjuan: "San Juan, PR 00901",
      phoneTitle: "Teléfono",
      phoneNumber: "+1 (787) 555-0123",
      hours: "Lunes - Viernes, 9AM - 5PM EST",
      emailTitle: "Correo Electrónico",
      email1: "info@alalcance.org",
      email2: "programs@alalcance.org",
      officeHours: "Horario de Oficina",
      monFri: "Lunes - Viernes: 9:00 AM - 5:00 PM",
      sat: "Sábado: 10:00 AM - 3:00 PM",
      sun: "Domingo: Cerrado",
      faq: "Preguntas Frecuentes",
      q1: "¿Cómo me registro para un programa?",
      a1: "Puedes registrarte a través de nuestro sitio web o contactarnos directamente. Completa el formulario de contacto anterior y te guiaremos en el proceso de registro.",
      q2: "¿Los programas son gratuitos?",
      a2: "Muchos de nuestros programas son gratuitos o de bajo costo para garantizar la accesibilidad. Comunícate con nosotros para obtener información sobre precios específicos.",
      q3: "¿Con qué frecuencia se realizan los talleres?",
      a3: "Ofrecemos talleres regularmente durante todo el mes. Consulta nuestra página de talleres para el horario más reciente.",
      q4: "¿Puedo ser voluntario en Al Alcance?",
      a4: "¡Bienvenemos voluntarios! Comunícate con nosotros para conocer las oportunidades de voluntariado en nuestra comunidad.",
    },
  }

  const t = translations[language]

  const faqItems = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
  ]

  const contactItems = [
    {
      icon: MapPin,
      title: t.address,
      content: [t.companyName, "San Juan, PR 00901", "Puerto Rico"],
    },
    {
      icon: Phone,
      title: t.phoneTitle,
      content: [t.phoneNumber, t.hours],
    },
    {
      icon: Mail,
      title: t.emailTitle,
      content: [t.email1, t.email2],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">{t.sendMessage}</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      {t.fullName}
                    </label>
                    <Input id="name" placeholder={t.fullNamePlaceholder} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      {t.email}
                    </label>
                    <Input id="email" type="email" placeholder={t.emailPlaceholder} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      {t.phone}
                    </label>
                    <Input id="phone" type="tel" placeholder={t.phonePlaceholder} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      {t.subject}
                    </label>
                    <Input id="subject" placeholder={t.subjectPlaceholder} className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      {t.messageLabel}
                    </label>
                    <Textarea id="message" placeholder={t.messagePlaceholder} rows={6} className="w-full" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {t.submit}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">{t.contactInfo}</h2>
                <div className="space-y-8">
                  {contactItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex gap-4">
                        <Icon className="text-primary flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-bold mb-2">{item.title}</h3>
                          <div className="text-muted-foreground space-y-1">
                            {item.content.map((line, idx) => (
                              <p key={idx} className="text-sm">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  <div className="bg-muted/30 rounded-lg p-6 mt-8">
                    <h3 className="font-bold mb-2">{t.officeHours}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{t.monFri}</p>
                      <p>{t.sat}</p>
                      <p>{t.sun}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.faq}</h2>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
