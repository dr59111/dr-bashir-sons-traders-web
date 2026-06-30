import {
  Stethoscope, Shield, Globe, Award, Building2, FileCheck, Mail, Phone
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { partners } from '../data/products'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Dr Bashir Son's Traders - our mission, global manufacturing partners, and commitment to delivering quality veterinary solutions in Pakistan."
        pathname="/about"
      />

      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">About Us</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Trusted Partner in <span className="text-primary-700 dark:text-primary-400">Animal Health</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Dedicated to improving livestock and poultry health through quality pharmaceuticals, feed additives, and nutritional solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Delivering Excellence in Veterinary Care</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Dr Bashir Son's Traders is a leading importer and distributor of veterinary pharmaceuticals, feed additives, and animal health solutions in Pakistan. Founded with a vision to bridge the gap between global manufacturing excellence and local agricultural needs, we have established strong partnerships with renowned manufacturers across Europe, Asia, and beyond.
                  </p>
                  <p>
                    Our commitment to quality, compliance, and customer satisfaction drives every aspect of our operations. We work closely with poultry and livestock producers, veterinary professionals, and distributors to ensure they have access to the best products that meet international standards.
                  </p>
                  <p>
                    With a focus on innovation and reliability, we continue to expand our product portfolio and manufacturing network to serve the growing needs of Pakistan's animal health sector.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous testing and validation' },
                  { icon: Globe, title: 'Global Sourcing', desc: 'Partners across 4 continents' },
                  { icon: Award, title: 'Industry Expertise', desc: 'Years of market experience' },
                  { icon: Stethoscope, title: 'Veterinary Focus', desc: 'Dedicated animal health solutions' },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 dark:bg-slate-800 rounded-xl p-5 border border-gray-100 dark:border-slate-700">
                    <item.icon className="w-6 h-6 text-primary-700 dark:text-primary-400 mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Compliance</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Legal Status & Registration</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SECP Registration</h3>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Reserved Name</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">DR BASHIR SONS TRADERS (PRIVATE) LIMITED</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Regulator</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Securities and Exchange Commission of Pakistan (SECP)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Governing Law</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Companies Act, 2017</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Current Status</p>
                    <p className="text-sm font-medium text-primary-700 dark:text-primary-400">Name Reserved — Incorporation Pending</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <strong>Note:</strong> The company is currently operating under the marketing name <strong>Dr Bashir Son's Traders</strong> while the formal incorporation process is completed with SECP. The legal name <strong>Dr Bashir Sons Traders (Private) Limited</strong> will be used upon official registration.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-primary-50 dark:bg-primary-900/10 rounded-xl p-8 border border-primary-100 dark:border-primary-900/30 h-full">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To improve animal health and productivity across Pakistan by providing access to world-class veterinary pharmaceuticals, feed additives, and nutritional solutions. We are committed to supporting farmers, veterinarians, and the livestock industry with products that meet the highest international standards of quality and safety.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-secondary-50 dark:bg-secondary-900/10 rounded-xl p-8 border border-secondary-100 dark:border-secondary-900/30 h-full">
                <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-secondary-700 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the most trusted partner in animal health across Pakistan and the region, recognized for our commitment to quality, innovation, and customer success. We envision a future where every livestock and poultry operation has access to the best veterinary solutions, contributing to food security and agricultural prosperity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Global Network</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">International Manufacturing Partners</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We collaborate with leading manufacturers worldwide to bring the best veterinary and nutritional products to Pakistan.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.08}>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 text-center hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{partner.name}</h3>
                  <p className="text-xs text-primary-700 dark:text-primary-400 font-medium mb-2">{partner.location}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{partner.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Have Questions About Our Company?</h2>
              <p className="text-primary-100 max-w-xl mx-auto mb-8">
                We would love to hear from you. Reach out to learn more about our products, partnerships, or business opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:info@drbashirsonstraders.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href="tel:+92-XXX-XXXXXXX"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
