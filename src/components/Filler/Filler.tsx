import React from 'react';

import styles from './Filler.module.css';

export const Filler: React.FC = () => (
  <div
    tabIndex={-1}
    className={styles.filler}
  />
);
