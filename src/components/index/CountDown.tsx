import styles from '../../styles/components/index/CountDown.module.css';

// HOOKS
import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountDownContext';

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
