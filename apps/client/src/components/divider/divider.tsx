import React, { CSSProperties } from 'react';
import styles from './divider.module.css';
type Props = {
  className: string;
};
export const Divider: React.FC<Props> = ({ className }) => {
  return <div className={`${styles.divider} ${className}`} />;
};
