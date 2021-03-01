import Head from 'next/head';

import Cookies from 'js-cookie';

import styles from '../styles/pages/Login.module.css';
// HOOKS
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';

export default function Login() {
  const [saveData, setSaveData] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [fetchData, setFetchData] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [fetchError, setFetchError] = useState('');
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

  const fetchGithubAPI = () => {
    fetch(`https://api.github.com/users/${inputValue.toLowerCase()}`)
      .then((response) => {
        if (response.status === 200) {
          setFetchError('');
          setIsValid(true);
          return response.json();
        }
        if (response.status === 404) {
          setIsValid(false);
          return setFetchError('Usuário não encontrado');
        } else {
          setFetchError('Erro:' + response.status);
        }
      })
      .then((json) => setFetchData(json));
  };

  const handleLogin = () => {
    fetchGithubAPI();

    if (isValid) {
      setSaveData(true);
      router.push('/home');
    }
  };

  useEffect(() => {
    if (isValid && saveData) {
      Cookies.set('id', String(fetchData.id));
      Cookies.set('avatar_url', String(fetchData.avatar_url));
      Cookies.set('name', String(fetchData.name));
    }
  }, [fetchGithubAPI]);

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
