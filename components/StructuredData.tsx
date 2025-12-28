export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Notus Technologies",
    "url": "https://notustechnologies.co.in",
    "logo": "https://notustechnologies.co.in/logo.png",
    "description": "Leading software development company specializing in Android app development, web development, cloud solutions, AI & analytics, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gurgaon", // Update with your actual address
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001", // Update with your postal code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4089",
      "longitude": "77.0378"
    },
    "sameAs": [
      // Add your social media links here
      // "https://www.facebook.com/notustechnologies",
      // "https://www.twitter.com/notustechnologies",
      // "https://www.linkedin.com/company/notustechnologies",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://notustechnologies.co.in/contact"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Notus Technologies",
    "url": "https://notustechnologies.co.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://notustechnologies.co.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Notus Technologies"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android App Development",
            "description": "Professional Android app development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Cloud infrastructure and migration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Analytics",
            "description": "AI solutions and data analytics services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, content strategy, and social media marketing"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

