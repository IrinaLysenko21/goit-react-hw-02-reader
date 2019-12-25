import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text, index }) => (
  <article className={styles.publication}>
    <h2 className={styles.title}>
      {index + 1}. {title}
    </h2>
    <p className={styles.text}>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Publication;
