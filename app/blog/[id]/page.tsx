'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import styles from '../../styles/BlogDetail.module.css';
import type { Blog } from '@/types/blog';

// Mock data - replace with actual MicroCMS fetch
const mockBlogs: Record<string, Blog> = {
  '1': {
    id: '1',
    title: 'Getting Started with Next.js',
    content: `
      Next.js is a powerful framework for building React applications. It provides 
      features like server-side rendering, static site generation, and more out of the box.

      ## Why Next.js?

      Next.js simplifies the development process by providing:
      - Automatic routing
      - API routes
      - Built-in CSS and Sass support
      - Code splitting and bundling
      - And much more!
    `,
    publishedAt: '2024-03-20T12:00:00.000Z',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      width: 800,
      height: 600,
    },
  },
};

export default function BlogDetail({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // Replace with actual MicroCMS fetch
    setBlog(mockBlogs[params.id]);
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={20} />
          Back to Blog List
        </Link>
        <h1 className={styles.title}>{blog.title}</h1>
        <time className={styles.date}>
          {format(new Date(blog.publishedAt), 'MMMM d, yyyy')}
        </time>
      </div>

      {blog.thumbnail && (
        <div className={styles.thumbnail}>
          <Image
            src={blog.thumbnail.url}
            alt={blog.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }}
      />
    </article>
  );
}