import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart } from "lucide-react"

export default function DonationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Your generosity helps us reach more communities and empower individuals across Puerto Rico
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Monthly Donation */}
              <div className="bg-card rounded-xl p-10 border border-border shadow-sm">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Monthly Donation</h3>
                <p className="text-muted-foreground mb-6">
                  Become a sustaining partner and create lasting impact every month
                </p>
                <button className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Set Up Monthly Gift
                </button>
              </div>

              {/* One-Time Donation */}
              <div className="bg-card rounded-xl p-10 border border-border shadow-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">One-Time Gift</h3>
                <p className="text-muted-foreground mb-6">
                  Make a single contribution to support a specific program or initiative
                </p>
                <button className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Donate Now
                </button>
              </div>

              {/* Corporate Sponsorship */}
              <div className="bg-card rounded-xl p-10 border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Corporate Sponsorship</h3>
                <p className="text-muted-foreground mb-6">
                  Partner with us to create meaningful change in our communities
                </p>
                <button className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
