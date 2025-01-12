'use client';

import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';
import styles from '../app/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <UtensilsCrossed className="inline-block mr-2" size={24} />
          Kitchen Stories
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/recipes" className={styles.navLink}>Recipes</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}