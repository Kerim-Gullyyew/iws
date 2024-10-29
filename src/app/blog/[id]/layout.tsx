// app/posts/[id]/layout.tsx

import type { Metadata } from 'next';
import { getPostData } from '../../lib/posts';

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const postData = await getPostData(params.id);

  return {
    title: postData.title, // Dynamic title from post data
    description: postData.description || 'Default description.', // Fallback if not provided
    abstract: postData.abstract || '',
    // Add more metadata fields as needed
  };
}

export default function RootLayout({ children }: LayoutProps) {
  // The layout wraps around the page content
  return <section>{children}</section>;
}
