import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Stethoscope
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Dr Bashir Son's Traders. Contact us for veterinary pharmaceuticals, feed additives, and animal health solutions."
        pathname="/contact"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Contact <span className="text-primary-700 dark:text-primary-400">Us</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have questions about our products or want to discuss a partnership? We are here to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mail, title: 'Email', value: 'info@drbashirsonstraders.com', href: 'mailto:info@drbashirsonstraders.com' },
              { icon: Phone, title: 'Phone', value: '+92-XXX-XXXXXXX', href: 'tel:+92-XXX-XXXXXXX' },
              { icon: MapPin, title: 'Location', value: 'Pakistan', href: '#' },
              { icon: Clock, title: 'Business Hours', value: 'Mon - Sat: 9AM - 6PM', href: '#' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <a
                  href={item.href}
                  className="block bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-11 h-11 mx-auto mb-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Your message has been sent. We will get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name *</label>
                        <input
                          type="text" id="name" name="name" required
                          value={formState.name} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address *</label>
                        <input
                          type="email" id="email" name="email" required
                          value={formState.email} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company</label>
                        <input
                          type="text" id="company" name="company"
                          value={formState.company} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone</label>
                        <input
                          type="tel" id="phone" name="phone"
                          value={formState.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                          placeholder="+92-XXX-XXXXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject *</label>
                      <select
                        id="subject" name="subject" required
                        value={formState.subject} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="oem">OEM / Private Label</option>
                        <option value="distributor">Become a Distributor</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message *</label>
                      <textarea
                        id="message" name="message" required rows={4}
                        value={formState.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-lg transition-all hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info side */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Can We Help?</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Whether you are looking for specific veterinary products, interested in becoming a distributor, or exploring OEM opportunities, our team is ready to assist you.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Stethoscope, title: 'Product Inquiries', desc: 'Learn about our full range of veterinary pharmaceuticals and nutritional solutions.' },
                      { icon: MessageSquare, title: 'Partnership', desc: 'Explore distribution partnerships and collaboration opportunities.' },
                      { icon: Mail, title: 'OEM & Private Label', desc: 'Custom manufacturing and branding solutions for your business.' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700">
                        <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-700 rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="space-y-2 text-sm text-primary-100">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
