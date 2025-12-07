import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CollaborationsPage() {
  const collaborators = [
    {
      name: "Puerto Rico Department of Education",
      category: "Government",
      description: "Supporting educational initiatives and policy development across Puerto Rico.",
    },
    {
      name: "University of Puerto Rico",
      category: "Academic",
      description: "Partnering on research, mentorship programs, and student internships.",
    },
    {
      name: "Caribbean Community Fund",
      category: "Nonprofit",
      description: "Co-funding community development programs and grassroots initiatives.",
    },
    {
      name: "Tech Innovation Hub PR",
      category: "Technology",
      description: "Collaborating on digital literacy and technology skills training.",
    },
    {
      name: "San Juan Chamber of Commerce",
      category: "Business",
      description: "Connecting participants with job opportunities and business mentors.",
    },
    {
      name: "Puerto Rico Youth Foundation",
      category: "Nonprofit",
      description: "Joint programs focused on youth empowerment and leadership development.",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Government: "bg-blue-100 text-blue-800",
      Academic: "bg-green-100 text-green-800",
      Nonprofit: "bg-purple-100 text-purple-800",
      Technology: "bg-orange-100 text-orange-800",
      Business: "bg-indigo-100 text-indigo-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Collaborations</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Partnering with leading organizations to expand our impact across Puerto Rico
            </p>
          </div>
        </section>

        {/* Collaborators Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {collaborators.map((collaborator) => (
                <div
                  key={collaborator.name}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary flex-1">{collaborator.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(collaborator.category)} whitespace-nowrap ml-2`}
                    >
                      {collaborator.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{collaborator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold">Interested in Collaborating?</h2>
            <p className="text-lg opacity-90">
              We're always looking for partners who share our vision of empowering communities through education and
              opportunity.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-foreground text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
