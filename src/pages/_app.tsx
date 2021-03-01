import '../styles/global.css';

import { GetServerSideProps } from 'next';

//CONTEXT
import { CountdownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { LoginProvider } from '../contexts/LoginContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

function MyApp({ Component, pageProps }, props: HomeProps) {
  <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    <LoginProvider>
      <CountdownProvider>
        return <Component {...pageProps} />;
      </CountdownProvider>
    </LoginProvider>
  </ChallengesProvider>;
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

export default MyApp;
