import Head from 'next/head';
// STYLES
import styles from '../styles/pages/Home.module.css';

// COMPONENTS
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  );
}