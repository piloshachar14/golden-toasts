import styles from './card.module.css';
import { PropsWithChildren } from 'react';
import { CardDate, CardDescription, CardHeader } from '..';

type Props = {
  stringBorder?: string;
} & PropsWithChildren;
export const Card: React.FC<Props> = ({ stringBorder, children }) => {
  const style: Record<string, string> = {};
  if (stringBorder) {
    style['border'] = stringBorder;
  }

  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
};
