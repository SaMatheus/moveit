import { createContext, useState, ReactNode } from 'react';

interface LoginContextData {
  fetchError: string;
  fetchData: [];
  isValid: boolean;
  fetchGithubAPI: (value: string) => void;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
  const [isValid, setIsValid] = useState(false);
  const [fetchData, setFetchData] = useState(null);
  const [fetchError, setFetchError] = useState('');

  const fetchGithubAPI = (value) => {
    fetch(`https://api.github.com/users/${value.toLowerCase()}`)
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

  return (
    <LoginContext.Provider
      value={{
        fetchError,
        fetchData,
        isValid,
        fetchGithubAPI,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
