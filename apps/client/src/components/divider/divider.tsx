import React, { CSSProperties } from 'react';
import styles from './divider.module.css';
type Props = {
  className: string;
  backgroundcolorClass?: string;
};
export const Divider: React.FC<Props> = ({ className }) => {
  if (className) return <div className={`${className}`} />;
  return <div className={`${styles.divider}`} />;
};
