import { type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  pathname?: string
  children?: ReactNode
}

export default function SEO({ title, description, pathname = '', children }: SEOProps) {
  const baseUrl = 'https://drbashirsonstraders.com'
  const url = `${baseUrl}${pathname}`
  const fullTitle = `${title} | Dr Bashir Son's Traders`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  )
}
