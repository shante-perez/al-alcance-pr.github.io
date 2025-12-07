import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function WorkshopsPage() {
  const workshops = [
    {
      title: "Web Development Fundamentals",
      date: "January 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "San Juan, PR",
      description: "Learn the basics of HTML, CSS, and JavaScript to start your web development journey.",
      attendees: 24,
    },
    {
      title: "Professional Communication Skills",
      date: "January 22, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual",
      description: "Master effective communication techniques for workplace success and personal growth.",
      attendees: 18,
    },
    {
      title: "Digital Marketing Essentials",
      date: "January 29, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "San Juan, PR",
      description: "Discover modern marketing strategies and tools to grow your business online.",
      attendees: 32,
    },
    {
      title: "Data Analysis Basics",
      date: "February 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "San Juan, PR",
      description: "Introduction to data analysis tools and techniques for informed decision-making.",
      attendees: 16,
    },
    {
      title: "Small Business Management",
      date: "February 12, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual",
      description: "Essential strategies for managing and growing a successful small business.",
      attendees: 28,
    },
    {
      title: "Personal Branding Workshop",
      date: "February 19, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "San Juan, PR",
      description: "Build and establish your professional brand in the digital age.",
      attendees: 22,
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-accent text-accent-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Workshops</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Interactive learning experiences to develop new skills and advance your career
            </p>
          </div>
        </section>

        {/* Workshops List */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {workshops.map((workshop, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">{workshop.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{workshop.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar size={18} className="text-primary" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock size={18} className="text-primary" />
                          <span>{workshop.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin size={18} className="text-primary" />
                          <span>{workshop.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">{workshop.attendees} people registered</p>
                    </div>

                    <Link href="/contact">
                      <Button variant="default" className="w-full md:w-auto">
                        Register Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">Don't Miss Our Workshops</h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to stay updated on new workshop announcements and special events.
            </p>
            <Link href="/contact">
              <Button variant="default" size="lg">
                Subscribe for Updates
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
