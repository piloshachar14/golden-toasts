import styles from './card-root.module.css';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;
export const CardRoot: React.FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
