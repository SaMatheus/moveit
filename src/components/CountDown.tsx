import styles from '../styles/components/CountDown.module.css';

// HOOKS
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countDownTimeOut: NodeJS.Timeout; //Isso aqui serve pra gente limpar o delay do setTimeOut continuação na linha 29

export function CountDown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time) / 60;
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut); // essa função clearTimeout reseta o delay do setTimeout
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        // Agente chama o setTimeout como valor do countDownTimeOut e reseta ele na linha 23
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countDownButton}>
          Ciclo encerrado
          <img
            src='/icons/check.svg'
            alt='Um simbolo de check marcando que a contagem chegou a 0 e o objetivo foi concluido'
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
              <img
                src='/icons/close-cicle.svg'
                alt='um X indicando o final da contagem'
                style={{ filter: 'invert(1)' }}
              />
            </button>
          ) : (
            <button
              type='button'
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar um ciclo
              <img
                src='/icons/arrow.svg'
                alt='Uma seta apontada para a direita indicando o Inicio da contagem'
              />
            </button>
          )}
        </>
      )}
    </div>
  );
}
