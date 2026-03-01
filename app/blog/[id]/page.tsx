import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

const VALID_IDS = ['1', '2', '3', '4', '5', '6'];

// Prevent dynamic routes from being created for non-existent blog posts
export const dynamicParams = false;

const blogMetadata: Record<string, { title: string; description: string; category: string }> = {
  '1': {
    title: 'The Future of AI in Web Development: Transforming Digital Experiences',
    description: 'Discover how Artificial Intelligence is revolutionizing web development, from automated code generation to intelligent user experiences. Learn about NLP, Computer Vision, and predictive analytics in modern web development.',
    category: 'AI & Technology',
  },
  '2': {
    title: 'Cloud Migration Success Stories: Real Business Transformations',
    description: 'Explore real-world cloud migration case studies including e-commerce scaling and healthcare HIPAA compliance. Learn best practices for successful cloud adoption and digital transformation.',
    category: 'Cloud Solutions',
  },
  '3': {
    title: 'Mobile-First Design: Creating Apps That Users Love',
    description: 'Master mobile-first design principles for exceptional user experiences. Learn about touch-friendly interfaces, responsive design, performance optimization, and PWA features.',
    category: 'UI/UX Design',
  },
  '4': {
    title: 'Digital Marketing ROI: Measuring What Matters in 2024',
    description: 'Comprehensive guide to measuring digital marketing ROI in 2024. Learn about CAC, CLV, attribution modeling, and advanced analytics techniques for data-driven marketing decisions.',
    category: 'Digital Marketing',
  },
  '5': {
    title: 'Cybersecurity Best Practices for Modern Businesses',
    description: 'Implement comprehensive cybersecurity strategies to protect your business. Learn about NIST framework, Zero Trust architecture, security controls, and incident response planning.',
    category: 'Security',
  },
  '6': {
    title: 'The Rise of Progressive Web Apps: Why PWAs Matter',
    description: 'Learn how Progressive Web Apps combine web and mobile experiences. Explore service workers, app shell architecture, business benefits, and implementation strategies for PWAs.',
    category: 'Web Development',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const meta = blogMetadata[id];

  if (!meta) {
    return {
      title: 'Blog Post Not Found',
      robots: { index: false, follow: false },
    };
  }

  const baseUrl = 'https://notustechnologies.co.in';

  return {
    title: `${meta.title} | Notus Technologies Blog`,
    description: meta.description,
    keywords: [meta.category, 'Notus Technologies', 'Tech Blog', 'IT Company Gurgaon'],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/blog/${id}`,
      siteName: 'Notus Technologies',
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${baseUrl}/blog/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return VALID_IDS.map((id) => ({ id }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!VALID_IDS.includes(id)) {
    notFound();
  }
  return (
    <div className="min-h-screen">
      <Header />
      <BlogPost postId={id} />
      <Footer />
    </div>
  );
}