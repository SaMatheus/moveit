import { createContext, useState, ReactNode, useContext } from 'react';

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

export function useLogin(): LoginContextData {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('useLogin deve ser usado como AuthProvider');
  }

  return context;
}

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
