"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { language, setLanguage } = useLanguage()

  const translations = {
    en: {
      home: "Home",
      about: "About",
      team: "Team",
      programs: "Programs",
      allPrograms: "All Programs",
      ciencia: "Ciencia Al Alcance",
      community: "Community",
      demographics: "Demographics",
      collaborations: "Collaborations",
      donations: "Donations",
      contact: "Contact",
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      team: "Equipo",
      programs: "Programas",
      allPrograms: "Todos los Programas",
      ciencia: "Ciencia Al Alcance",
      community: "Comunidad",
      demographics: "Datos Demográficos",
      collaborations: "Colaboraciones",
      donations: "Donaciones",
      contact: "Contacto",
    },
  }

  const t = translations[language]

  const navItems = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/team", label: t.team },
    {
      label: t.programs,
      submenu: [
        { href: "/programs", label: t.allPrograms },
        { href: "/workshops", label: t.ciencia },
      ],
    },
    {
      label: t.community,
      submenu: [
        { href: "/demographics", label: t.demographics },
        { href: "/collaborations", label: t.collaborations },
      ],
    },
    { href: "/donations", label: t.donations },
    { href: "/contact", label: t.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 py-4">
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src="/logo-icon.png"
                alt="Al Alcance Puerto Rico"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-accent">Al Alcance</h1>
              <p className="text-lg text-tertiary font-semibold">Puerto Rico</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2 text-sm">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {!("submenu" in item) ? (
                  <Link
                    href={item.href}
                    className="px-5 py-2.5 font-medium text-foreground hover:text-primary transition-colors rounded hover:bg-tertiary/10"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="px-5 py-2.5 font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1.5 rounded hover:bg-tertiary/10">
                      {item.label}
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-tertiary/20 hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-tertiary bg-tertiary/5 hover:bg-tertiary/15 transition-colors text-sm font-semibold text-foreground"
              aria-label="Toggle language"
            >
              <Globe size={18} className="text-tertiary" />
              <span className="text-tertiary">{language === "en" ? "ES" : "EN"}</span>
            </button>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {!("submenu" in item) ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-tertiary/10 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-tertiary/10 rounded transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="bg-tertiary/5 rounded">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-8 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-tertiary/10 rounded transition-colors"
                            onClick={() => {
                              setIsOpen(false)
                              setOpenDropdown(null)
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            {/* Mobile language toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-tertiary/10 rounded transition-colors w-full border-2 border-tertiary"
            >
              <Globe size={18} className="text-tertiary" />
              <span className="text-tertiary">{language === "en" ? "Español" : "English"}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
