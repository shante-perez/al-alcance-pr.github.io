"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Image from "next/image"

export default function DemographicsPage() {
  const { language } = useLanguage()
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const translations = {
    en: {
      title: "Participants Demographics",
      subtitle: "Explore our reach across Puerto Rico's municipalities and understand our community impact",
      regionDistribution: "Regional Distribution",
      totalParticipants: "Total Participants",
      activePrograms: "Active Programs",
      municipalities: "Municipalities Served",
      participantsReached: "Participants Reached",
      clickBar: "Click on any bar to explore region details",
      regionName: "Region",
      participants: "Participants",
      programs: "Programs",
      selectRegion: "Select a region from the chart",
      islandWideTitle: "Our Island-Wide Impact",
      regionDetails: "Region Details",
    },
    es: {
      title: "Datos Demográficos de Participantes",
      subtitle: "Explora nuestro alcance en los municipios de Puerto Rico y entiende nuestro impacto comunitario",
      regionDistribution: "Distribución Regional",
      totalParticipants: "Total de Participantes",
      activePrograms: "Programas Activos",
      municipalities: "Municipios Servidos",
      participantsReached: "Participantes Alcanzados",
      clickBar: "Haz clic en cualquier barra para explorar detalles de la región",
      regionName: "Región",
      participants: "Participantes",
      programs: "Programas",
      selectRegion: "Selecciona una región del gráfico",
      islandWideTitle: "Nuestro Impacto en Toda la Isla",
      regionDetails: "Detalles de la Región",
    },
  }

  const t = translations[language]

  const regions = [
    { id: "san-juan", name: "San Juan", percentage: 12, participants: 480, programs: 8 },
    { id: "carolina", name: "Carolina", percentage: 10, participants: 400, programs: 6 },
    { id: "caguas", name: "Caguas", percentage: 9, participants: 360, programs: 5 },
    { id: "bayamon", name: "Bayamón", percentage: 8, participants: 320, programs: 5 },
    { id: "ponce", name: "Ponce", percentage: 7, participants: 280, programs: 4 },
    { id: "mayaguez", name: "Mayagüez", percentage: 6, participants: 240, programs: 3 },
    { id: "arecibo", name: "Arecibo", percentage: 5, participants: 200, programs: 3 },
    { id: "quebradillas", name: "Quebradillas", percentage: 5, participants: 200, programs: 3 },
  ]

  const chartData = regions.map((r) => ({
    name: r.name,
    participants: r.participants,
    id: r.id,
  }))

  const selectedData = regions.find((r) => r.id === selectedRegion)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary via-secondary to-tertiary text-white py-32 md:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Interactive Chart and Image Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              {/* Chart */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-8 border-2 border-tertiary/30 shadow-sm">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">{t.regionDistribution}</h2>

                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e8e4df" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#ffffff",
                          border: "2px solid #235789",
                          borderRadius: "8px",
                        }}
                        formatter={(value) => `${value} ${t.participants}`}
                      />
                      <Bar
                        dataKey="participants"
                        fill="#235789"
                        radius={[8, 8, 0, 0]}
                        onClick={(data: any) => setSelectedRegion(data.id)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                      <Bar dataKey="participants" fill="#679436" radius={[8, 8, 0, 0]} isAnimationActive={false} />
                    </BarChart>
                  </ResponsiveContainer>

                  <p className="text-sm text-muted-foreground mt-6 text-center font-medium">{t.clickBar}</p>
                </div>
              </div>

              {/* Puerto Rico Image */}
              <div className="lg:col-span-1">
                <div className="relative h-96 rounded-xl overflow-hidden border-2 border-tertiary/30 shadow-sm">
                  <Image src="/puerto-rico-silhouette-map.jpg" alt="Puerto Rico Map" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-xl">Puerto Rico</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="bg-card rounded-xl p-8 border-2 border-tertiary/30 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-8">{t.regionDetails}</h3>

              {selectedData ? (
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-tertiary uppercase">{t.regionName}</p>
                    <p className="text-3xl font-bold text-primary">{selectedData.name}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-tertiary uppercase">{t.participants}</p>
                    <p className="text-3xl font-bold text-primary">{selectedData.participants}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-tertiary uppercase">{t.programs}</p>
                    <p className="text-3xl font-bold text-tertiary">{selectedData.programs}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground font-medium">{t.selectRegion}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Overall Statistics */}
        <section className="py-20 bg-tertiary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">{t.islandWideTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 border-2 border-primary/20 text-center">
                <p className="text-sm font-semibold text-tertiary uppercase mb-2">{t.totalParticipants}</p>
                <p className="text-4xl font-bold text-primary">4,000+</p>
              </div>
              <div className="bg-card rounded-xl p-8 border-2 border-secondary/20 text-center">
                <p className="text-sm font-semibold text-tertiary uppercase mb-2">{t.activePrograms}</p>
                <p className="text-4xl font-bold text-secondary">45</p>
              </div>
              <div className="bg-card rounded-xl p-8 border-2 border-tertiary/20 text-center">
                <p className="text-sm font-semibold text-tertiary uppercase mb-2">{t.municipalities}</p>
                <p className="text-4xl font-bold text-tertiary">17</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
