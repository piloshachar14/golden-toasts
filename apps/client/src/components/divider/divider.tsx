import React, { CSSProperties } from 'react';
import styles from './divider.module.css';
type Props = {
  className: string;
  style?: CSSProperties;
};
export const Divider: React.FC<Props> = ({ className, style }) => {
  return <div className={`${styles.divider} ${className}`} style={style} />;
};
