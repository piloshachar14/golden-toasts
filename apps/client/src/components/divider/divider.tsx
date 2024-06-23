import React, { CSSProperties } from 'react';
import styles from './divider.module.css';
type Props = {
  style: CSSProperties;
};
export const Divider: React.FC<Props> = ({ style }) => {
  return <div className={styles.divider} style={style} />;
};
