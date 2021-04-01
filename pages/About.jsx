import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';

function About(props) {
  return (
    <div className={styles.aboutHeader}>
      <h1>The Team</h1>
      <div className={styles.bios}>
        <div className={styles.bio}>
          <Image
            className={styles.image}
            src="/assets/brian.jpeg"
            alt="Picture of the brian"
            width={250}
            height={250}
          />
          <p>Brian Chu</p>
          <div className={styles.handle}>
            <Image
              className={styles.gitLogo}
              src="/assets/github.png"
              alt="github logo"
              width={24}
              height={24}
            />
            <p>@darthchu</p>
          </div>
        </div>
        <div className={styles.bio}>
          <Image
            className={styles.image}
            src="/assets/christopher.png"
            alt="Picture of the christopher"
            width={250}
            height={250}
          />
          <p>Christopher Bosserman</p>
          <div className={styles.handle}>
            <Image
              className={styles.gitLogo}
              src="/assets/github.png"
              alt="github logo"
              width={24}
              height={24}
            />
            <p>@christopherpbosserman</p>
          </div>
        </div>
        <div className={styles.bio}>
          <Image
            className={styles.image}
            src="/assets/greg.png"
            alt="Picture of the greg"
            width={250}
            height={250}
          />
          <p>Greg Levine-Rozenvyn</p>
          <div className={styles.handle}>
            <Image
              className={styles.gitLogo}
              src="/assets/github.png"
              alt="github logo"
              width={24}
              height={24}
            />
            <p>@grishaLR</p>
          </div>
        </div>
        <div className={styles.bio}>
          <Image
            className={styles.image}
            src="/assets/matt.jpeg"
            alt="Picture of the matt"
            width={250}
            height={250}
          />
          <p>Matt Salvador</p>
          <div className={styles.handle}>
            <Image
              className={styles.gitLogo}
              src="/assets/github.png"
              alt="github logo"
              width={24}
              height={24}
            />
            <p>@mjsalvador</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
