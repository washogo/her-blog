'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import styles from './styles/BlogList.module.css';
import type { Blog } from '@/types/blog';
import Profile from '@/components/Profile';

// Mock data - replace with actual MicroCMS fetch
const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Easy Weekend Brunch Ideas',
    content: 'Start your weekend right with these delicious and simple brunch recipes...',
    publishedAt: '2024-03-20T12:00:00.000Z',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
      width: 800,
      height: 600,
    },
  },
  {
    id: '2',
    title: 'My Go-To Pasta Sauce Recipe',
    content: 'A classic Italian tomato sauce that will elevate any pasta dish...',
    publishedAt: '2024-03-19T12:00:00.000Z',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
      width: 800,
      height: 600,
    },
  },
  {
    id: '3',
    title: 'Seasonal Spring Salads',
    content: 'Fresh, vibrant salads featuring the best spring produce...',
    publishedAt: '2024-03-18T12:00:00.000Z',
    thumbnail: {
      url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
      width: 800,
      height: 600,
    },
  },
];

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Replace with actual MicroCMS fetch
    setBlogs(mockBlogs);
  }, []);

  return (
    <div className={styles.container}>
      <Profile />
      <h1 className={styles.heading}>Latest Recipes & Stories</h1>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className={styles.card}>
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
              <div className={styles.content}>
                <h2 className={styles.title}>{blog.title}</h2>
                <time className={styles.date}>
                  {format(new Date(blog.publishedAt), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}