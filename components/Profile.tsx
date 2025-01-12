'use client';

import Image from 'next/image';
import styles from '../app/styles/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            alt="Sarah Parker"
            width={100}
            height={100}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>Sarah Parker</h2>
          <p className={styles.title}>Food Writer & Recipe Developer</p>
        </div>
      </div>
      <p className={styles.description}>
        Hi! I'm Sarah, and I'm passionate about making cooking accessible and enjoyable for everyone.
        After spending 5 years as a restaurant chef, I now share my love for food through simple,
        delicious recipes that you can easily recreate at home. Join me as I explore different
        cuisines, share kitchen tips, and create memories through food!
      </p>
    </div>
  );
}