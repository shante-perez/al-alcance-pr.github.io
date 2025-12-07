import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Workshop2025Page() {
  const workshopDetails = [
    {
      title: "Professional Development",
      duration: "Full Day (8 hours)",
      description: "Career coaching, resume writing, and interview preparation for job seekers.",
      topics: ["Resume Writing", "Interview Skills", "Career Planning"],
    },
    {
      title: "Digital Skills Training",
      duration: "3 Days",
      description: "Introduction to digital literacy, social media, and essential computer skills.",
      topics: ["MS Office Suite", "Google Workspace", "Digital Security"],
    },
    {
      title: "Entrepreneurship Bootcamp",
      duration: "2 Weeks",
      description: "Learn to start and grow your own business with mentoring from experienced entrepreneurs.",
      topics: ["Business Planning", "Financial Management", "Marketing Basics"],
    },
    {
      title: "Leadership Intensive",
      duration: "4 Weeks",
      description: "Develop leadership skills for personal and professional growth.",
      topics: ["Team Management", "Communication", "Strategic Thinking"],
    },
  ]

  const timeline = [
    { month: "January", event: "Kickoff Event & Registration", location: "San Juan" },
    { month: "February", event: "Professional Development Workshops", location: "Multiple Cities" },
    { month: "March", event: "Digital Skills Training Begins", location: "Online & In-Person" },
    { month: "April", event: "Entrepreneurship Bootcamp Starts", location: "San Juan, Caguas" },
    { month: "May", event: "Leadership Intensive Concludes", location: "Hybrid Format" },
    { month: "June", event: "Celebration & Graduation Ceremony", location: "San Juan" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">First Al Alcance 2025 Workshop</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A transformative journey of learning, growth, and empowerment starting January 2025
            </p>
          </div>
        </section>

        {/* Workshop Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Workshop Tracks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our four comprehensive tracks designed to build skills and create opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workshopDetails.map((workshop) => (
                <div
                  key={workshop.title}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <h3 className="text-2xl font-bold text-primary mb-2">{workshop.title}</h3>
                  <p className="text-sm font-semibold text-accent mb-4">{workshop.duration}</p>
                  <p className="text-muted-foreground mb-6">{workshop.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Topics Covered:</p>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">2025 Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.month} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && <div className="w-1 h-12 bg-secondary/30 mt-2" />}
                  </div>
                  <div className="bg-card rounded-lg p-6 border border-border flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.month}</h3>
                    <p className="font-semibold text-secondary mb-1">{item.event}</p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Transform Your Future?</h2>
            <p className="text-lg opacity-90">
              Join us for the First Al Alcance 2025 Workshop and unlock your potential with our comprehensive training
              programs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary-foreground text-secondary font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all"
            >
              Register Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
