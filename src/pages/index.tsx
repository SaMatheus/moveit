import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';
import { useState } from 'react';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [fetchData, setFetchData] = useState(null);
  const [fetchError, setFetchError] = useState('');

  const fetchGithubAPI = () => {
    fetch(`https://api.github.com/users/${inputValue.toLowerCase()}`)
      .then((response) => {
        if (response.status === 200) {
          setFetchError('');
          setIsValid(true);
          return response.json();
        }
        if (response.status === 404) {
          return setFetchError('Usuário não encontrado');
        } else {
          setFetchError('Erro:' + response);
        }
      })
      .then((json) => setFetchData(json));
  };

  const handleClickLogin = () => {
    fetchGithubAPI();
    if (isValid) {
      console.log('Entrou');
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const button = document.getElementById('button');
    const newValue = e.currentTarget.value;

    setInputValue(newValue);

    if (newValue !== '' && isValid) {
      button.style.background = '#4CD62B';
    }
    if (newValue !== '' && !isValid) {
      button.style.background = '#e83f5b';
    } else {
      button.style.background = '#4953b8';
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
            <button id='button' type='button' onClick={handleClickLogin}>
              <img src='/icons/arrow-vector.svg' alt='seta para a direita' />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
