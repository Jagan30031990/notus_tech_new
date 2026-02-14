import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

const VALID_IDS = ['1', '2', '3', '4', '5', '6'];

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