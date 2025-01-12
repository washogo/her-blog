'use client';

import { Instagram, Twitter } from 'lucide-react';
import styles from '../app/styles/Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>© {new Date().getFullYear()} Kitchen Stories. All rights reserved.</div>
        <div className={styles.social}>
          <a
            href="https://instagram.com/kitchenstories"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
          </a>
          <a
            href="https://x.com/kitchenstories"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
          >
            <Image src="/x.svg" alt="X" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
