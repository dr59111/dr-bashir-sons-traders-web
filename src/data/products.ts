import type { Product, Partner, Activity } from '../types'

export const products: Product[] = [
  {
    id: 'injectables',
    name: 'Injectables',
    category: 'pharmaceutical',
    description: 'High-quality injectable solutions for rapid therapeutic action in livestock and poultry.',
    features: ['Antibiotics', 'Vitamins', 'Anti-inflammatory', 'Hormones'],
    icon: 'Syringe',
  },
  {
    id: 'oral-solutions',
    name: 'Oral Solutions',
    category: 'pharmaceutical',
    description: 'Convenient liquid formulations for easy administration and precise dosing.',
    features: ['Vitamins & Minerals', 'Electrolytes', 'Probiotics', 'Antiparasitics'],
    icon: 'Droplets',
  },
  {
    id: 'soluble-powders',
    name: 'Soluble Powders',
    category: 'pharmaceutical',
    description: 'Water-soluble powders for mass medication via drinking water systems.',
    features: ['Antibiotics', 'Anticoccidials', 'Vitamins', 'Minerals'],
    icon: 'FlaskConical',
  },
  {
    id: 'tablets-boluses',
    name: 'Tablets & Boluses',
    category: 'pharmaceutical',
    description: 'Solid dosage forms for targeted treatment and extended release.',
    features: ['Dewormers', 'Antibiotics', 'Calcium Supplements', 'Rumen Boluses'],
    icon: 'Pill',
  },
  {
    id: 'premixes',
    name: 'Premixes',
    category: 'pharmaceutical',
    description: 'Pre-mixed formulations for consistent feed supplementation.',
    features: ['Vitamin Premixes', 'Mineral Premixes', 'Enzyme Premixes', 'Specialty Additives'],
    icon: 'Beaker',
  },
  {
    id: 'feed-additives',
    name: 'Feed Additives',
    category: 'nutrition',
    description: 'Specialty additives to enhance feed quality, palatability, and nutritional value.',
    features: ['Enzymes', 'Acidifiers', 'Probiotics', 'Prebiotics'],
    icon: 'Wheat',
  },
  {
    id: 'vitamins-minerals',
    name: 'Vitamins & Minerals',
    category: 'nutrition',
    description: 'Essential micronutrient supplements for optimal animal health and productivity.',
    features: ['Multi-Vitamins', 'Trace Minerals', 'Macro Minerals', 'Chelated Minerals'],
    icon: 'Sparkles',
  },
  {
    id: 'toxin-binders',
    name: 'Toxin Binders',
    category: 'nutrition',
    description: 'Advanced mycotoxin binders to protect animal health from feed contaminants.',
    features: ['Mycotoxin Binders', 'Aflatoxin Binders', 'Ochratoxin Binders', 'Broad Spectrum'],
    icon: 'Shield',
  },
  {
    id: 'growth-promoters',
    name: 'Growth Promoters',
    category: 'nutrition',
    description: 'Natural and safe growth enhancement solutions for improved performance.',
    features: ['Probiotics', 'Enzymes', 'Organic Acids', 'Botanical Extracts'],
    icon: 'TrendingUp',
  },
]

export const partners: Partner[] = [
  { name: 'Intermech', location: 'Holland', description: 'Premium pharmaceutical manufacturing and research' },
  { name: 'Henan Muxiang', location: 'China', description: 'Specialized feed additive and veterinary product production' },
  { name: 'ADMIX', location: 'Turkey', description: 'Advanced nutritional supplement formulations' },
  { name: 'Vietnam Manufacturing Partners', location: 'Vietnam', description: 'BIO Product Range manufacturing' },
  { name: 'Hebei Jinfeng Animal Pharmaceutical Co.', location: 'China', description: 'Commercial collaboration and supply discussions' },
]

export const activities: Activity[] = [
  { title: 'Import & Distribution', description: 'Global sourcing and nationwide distribution network ensuring timely delivery of veterinary products.', icon: 'Globe' },
  { title: 'Veterinary Pharmaceuticals', description: 'Comprehensive range of pharmaceutical products for prevention, treatment, and management of animal diseases.', icon: 'Stethoscope' },
  { title: 'Feed Additives', description: 'Innovative additives that enhance feed efficiency, palatability, and nutritional value for optimal growth.', icon: 'Wheat' },
  { title: 'Nutritional Supplements', description: 'Science-backed vitamin, mineral, and specialty supplements for peak animal health and productivity.', icon: 'Heart' },
  { title: 'Poultry & Livestock Healthcare', description: 'Integrated healthcare solutions for commercial poultry and livestock operations across Pakistan.', icon: 'Shield' },
  { title: 'OEM & Private Label Solutions', description: 'Custom manufacturing and branding services for veterinary and nutritional products.', icon: 'Tag' },
]
