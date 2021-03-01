import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';
// HOOKS
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useLogin } from '../contexts/LoginContext';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const { fetchError, isValid, fetchGithubAPI } = useLogin();
  const router = useRouter();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const button = document.getElementById('button');
    const newValue = e.currentTarget.value;

    setInputValue(newValue);

    if (newValue !== '') {
      button.style.background = '#4CD62B';
    } else {
      button.style.background = '#4953b8';
    }
  };

  const handleLogin = () => {
    fetchGithubAPI(inputValue);
    if (isValid) {
      router.push('/home');
    }
  };

  return (
    <div className={styles.container}>
      <img src='/background.png' alt='' />
      <Head>
        <title>Login | Productiv.it</title>
      </Head>
      <section>
        <img src='/login-logo.svg' alt='logomarca' />
        <div className={styles.content}>
          <h1>Bem-vindo</h1>
          <div className={styles.githubContent}>
            <img src='/icons/github.svg' alt='icone do github' />
            <p>Faça login com seu Github para começar</p>
          </div>
          <div className={styles.button}>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
            />
            <button id='button' type='button' onClick={handleLogin}>
              <img src='/icons/arrow-vector.svg' alt='seta para a direita' />
            </button>
          </div>
          {fetchError && <span>{fetchError}</span>}
        </div>
      </section>
    </div>
  );
}
