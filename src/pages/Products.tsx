import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Syringe, Droplets, FlaskConical, Pill, Beaker, Wheat, Sparkles, Shield, TrendingUp, Filter, Search, ArrowRight, X
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { products } from '../data/products'

const iconMap: Record<string, React.ElementType> = {
  Syringe, Droplets, FlaskConical, Pill, Beaker, Wheat, Sparkles, Shield, TrendingUp
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'pharmaceutical', label: 'Pharmaceuticals' },
  { id: 'nutrition', label: 'Nutrition' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <>
      <SEO
        title="Products"
        description="Explore our comprehensive range of veterinary pharmaceuticals, feed additives, nutritional supplements, and animal health solutions."
        pathname="/products"
      />

      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary-700 dark:text-primary-400 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Product <span className="text-primary-700 dark:text-primary-400">Categories</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                A comprehensive range of veterinary pharmaceuticals and nutritional solutions sourced from trusted global manufacturers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sticky top-16 lg:top-20 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <Filter className="w-4 h-4 text-gray-400 shrink-0 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-700 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, i) => {
                const Icon = iconMap[product.icon] || Beaker
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    layout
                  >
                    <div className="bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden group">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Icon className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            product.category === 'pharmaceutical'
                              ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {product.category === 'pharmaceutical' ? 'Pharmaceutical' : 'Nutrition'}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{product.description}</p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Features:</p>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-2.5 py-1 bg-white dark:bg-slate-700 rounded-md text-xs text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-slate-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-4 border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800/50">
                        <span className="text-sm font-medium text-primary-700 dark:text-primary-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No products found</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery('') }}
                className="mt-4 px-4 py-2 bg-primary-700 text-white rounded-lg text-sm font-medium hover:bg-primary-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
