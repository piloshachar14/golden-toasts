import { CSSProperties } from 'react';
import styles from './card.module.css';
type Props = {
  name: string;
  style?: CSSProperties;
  toasts: string;
};
export const Card: React.FC<Props> = ({ name, toasts }) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>{name}</div>
      <div className={styles.toasts}>{toasts}</div>
    </div>
  );
};
