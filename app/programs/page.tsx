import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Youth Education",
      category: "Education",
      description: "Comprehensive educational programs designed for young people to develop academic and life skills.",
      features: ["Academic Support", "Mentorship", "Skill Development"],
    },
    {
      title: "Professional Development",
      category: "Career",
      description: "Career advancement programs helping professionals develop in-demand skills and expand networks.",
      features: ["Job Training", "Career Coaching", "Networking Events"],
    },
    {
      title: "Community Workshops",
      category: "Community",
      description: "Interactive workshops covering various topics to support personal and professional growth.",
      features: ["Interactive Learning", "Expert Speakers", "Hands-on Practice"],
    },
    {
      title: "Digital Literacy",
      category: "Technology",
      description: "Programs designed to bridge the digital divide and provide tech skills for the modern workforce.",
      features: ["Coding", "Web Design", "Digital Tools"],
    },
    {
      title: "Leadership Training",
      category: "Leadership",
      description: "Develop leadership skills and prepare for roles of greater responsibility in your community.",
      features: ["Leadership Skills", "Team Building", "Decision Making"],
    },
    {
      title: "Entrepreneurship",
      category: "Business",
      description: "Support for aspiring entrepreneurs to start and grow their own businesses.",
      features: ["Business Planning", "Funding Guidance", "Mentorship"],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive programs designed to empower and support your growth
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div key={program.title} className="bg-card rounded-lg p-8 border border-border shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                    <span className="bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="default" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg opacity-90">Contact us to learn how you can participate in our programs</p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
