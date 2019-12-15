import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        onClick={onPrevClick}
        className={prevBtnDisabled ? styles.disabled : styles.btn}
        disabled={prevBtnDisabled}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={onNextClick}
        className={nextBtnDisabled ? styles.disabled : styles.btn}
        disabled={nextBtnDisabled}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
