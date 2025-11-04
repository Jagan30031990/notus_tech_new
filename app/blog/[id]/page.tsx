import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPost from './BlogPost';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen">
      <Header />
      <BlogPost postId={id} />
      <Footer />
    </div>
  );
}