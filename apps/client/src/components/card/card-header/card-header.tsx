import styles from './card-header.module.css';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
} & PropsWithChildren;

export const CardHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};
