import React, { CSSProperties } from 'react';
import styles from './divider.module.css';
type Props = {
  className: string;
  backgroundcolor?: string;
};
export const Divider: React.FC<Props> = ({ className, backgroundcolor }) => {
  const style: Record<string, string> = {};
  if (backgroundcolor) {
    style['backgroundColor'] = backgroundcolor;
  }
  return <div className={`${styles.divider} ${className}`} style={style} />;
};
