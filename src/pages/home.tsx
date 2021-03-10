import Head from 'next/head';

import { GetServerSideProps } from 'next';

// STYLES
import styles from '../styles/pages/Home.module.css';

// COMPONENTS
import { ExperienceBar } from '../components/index/ExperienceBar';
import { Profile } from '../components/index/Profile';
import { CompletedChallenges } from '../components/index/CompletedChallenges';
import { CountDown } from '../components/index/CountDown';
import { ChallengeBox } from '../components/index/ChallengeBox';

// CONTEXT
import { CountdownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { NavBar } from '../components/NavBar';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Productiv.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
              <NavBar />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
