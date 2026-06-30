import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronDown, Stethoscope, Shield, Globe, Heart, Wheat, Tag, Beaker, FlaskConical, Pill, Syringe, Droplets, Sparkles, TrendingUp, Users, Award, Truck
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { activities, partners } from '../data/products'

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Shield, Globe, Heart, Wheat, Tag, Beaker, FlaskConical, Pill, Syringe, Droplets, Sparkles, TrendingUp, Users, Award, Truck
}

const stats = [
  { value: '5+', label: 'Global Partners', icon: Globe },
  { value: '9', label: 'Product Categories', icon: Beaker },
  { value: '6', label: 'Business Activities', icon: Truck },
  { value: '100%', label: 'Quality Commitment', icon: Award },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Dr Bashir Son's Traders - Veterinary Pharmaceuticals, Feed Additives & Animal Health Solutions. Delivering quality through trusted global partnerships."
        pathname="/"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 dark:bg-secondary-900 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Stethoscope className="w-3.5 h-3.5" />
                Veterinary Pharmaceuticals & Animal Health
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
                Delivering Quality{' '}
                <span className="text-primary-700 dark:text-primary-400">Veterinary</span>{' '}
                Solutions Through Trusted Global Partnerships
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                Import & distribution of veterinary pharmaceuticals, feed additives, and nutritional supplements for poultry and livestock healthcare across Pakistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-lg transition-all hover:scale-[1.02] shadow-lg shadow-primary-700/25"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-700 text-primary-700 dark:text-primary-400 dark:border-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl rotate-3 opacity-20 absolute -top-4 -right-4" />
                <div className="w-80 h-80 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <Stethoscope className="w-20 h-20 mx-auto mb-4 opacity-90" />
                    <p className="text-xl font-bold">Dr Bashir Son's</p>
                    <p className="text-sm opacity-80">Traders</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Business Activities</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions spanning the entire animal health and nutrition value chain.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => {
              const Icon = iconMap[activity.icon] || Stethoscope
              return (
                <ScrollReveal key={activity.title} delay={i * 0.08}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-11 h-11 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5.5 h-5.5 text-primary-700 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{activity.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{activity.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Product Categories</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A comprehensive range of veterinary pharmaceuticals and nutritional solutions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Injectables', icon: Syringe, desc: 'Rapid therapeutic action for livestock and poultry.' },
              { name: 'Oral Solutions', icon: Droplets, desc: 'Easy administration with precise dosing.' },
              { name: 'Soluble Powders', icon: FlaskConical, desc: 'Water-soluble for mass medication.' },
              { name: 'Feed Additives', icon: Wheat, desc: 'Enhance feed quality and nutritional value.' },
              { name: 'Vitamins & Minerals', icon: Sparkles, desc: 'Essential micronutrient supplements.' },
              { name: 'Toxin Binders', icon: Shield, desc: 'Protect against feed contaminants.' },
            ].map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.08}>
                <Link to="/products" className="block group">
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <product.icon className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.desc}</p>
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-lg transition-all hover:scale-[1.02]"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800/50 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Global Network</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">International Manufacturing Partners</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Collaborating with world-leading manufacturers to bring quality veterinary solutions to Pakistan.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.08}>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-gray-100 dark:border-slate-700 text-center hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-10 h-10 mx-auto mb-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary-700 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{partner.name}</h3>
                  <p className="text-xs text-primary-700 dark:text-primary-400 font-medium mb-2">{partner.location}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{partner.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
                <p className="text-primary-100 max-w-xl mx-auto mb-8">
                  Contact us today to discuss your veterinary pharmaceutical and animal nutrition needs. We're here to support your business growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-50 transition-all hover:scale-[1.02]"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
