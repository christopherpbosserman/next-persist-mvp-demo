import React from 'react';
import Image from 'next/image'
import styles from '../styles/About.module.css';

function About(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.aboutHeader}>The mostJS Team</h1>
        <div className={styles.bios}>
          
          <div className={styles.bio}>
            <div className={styles.image}>
        <Image
          src="/assets/brian.jpeg"
          alt="Picture of the brian"
          width={250}
          height={250}
        />
        <p>Brian Chu</p>
        </div>
        <div className={styles.handle}>
        <Image
          src="/assets/github.png"
          alt="github logo"
          width={32}
          height={32}
        />
        <p>@darthchu</p>
        </div>
          </div>
        <div className={styles.bio}>
        <div className={styles.image}>
        <Image
          src="/assets/christopher.png"
          alt="Picture of the christopher"
          width={250}
          height={250}
        />
        <p>Christopher Bosserman</p>
        </div>
        <div className={styles.handle}>
        <Image
          src="/assets/github.png"
          alt="github logo"
          width={32}
          height={32}
        />
        <p>@christopherpbosserman</p>
        </div>
          </div>
        <div className={styles.bio}>
        <div className={styles.image}>
        <Image
          src="/assets/greg.png"
          alt="Picture of the greg"
          width={250}
          height={250}
        />
        <p>Greg Levine-Rozenvyn</p>
        </div>
        <div className={styles.handle}>
        <Image
          src="/assets/github.png"
          alt="github logo"
          width={32}
          height={32}
        />
        <p>@grishaLR</p>
        </div>
          </div>
        <div className={styles.bio}>
        <div className={styles.image}>
        <Image
          src="/assets/matt.jpeg"
          alt="Picture of the matt"
          width={250}
          height={250}
        />
        <p>Matt Salvador</p>
        </div>
        <div className={styles.handle}>
        <Image
          src="/assets/github.png"
          alt="github logo"
          width={32}
          height={32}
        />
        <p>@mjsalvador</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
