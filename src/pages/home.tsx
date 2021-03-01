import Head from 'next/head';

// STYLES
import styles from '../styles/pages/Home.module.css';

// COMPONENTS
import { ExperienceBar } from '../components/index/ExperienceBar';
import { Profile } from '../components/index/Profile';
import { CompletedChallenges } from '../components/index/CompletedChallenges';
import { CountDown } from '../components/index/CountDown';
import { ChallengeBox } from '../components/index/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Productiv.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
