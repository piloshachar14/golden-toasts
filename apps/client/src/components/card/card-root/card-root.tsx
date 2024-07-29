import { CardDate, CardDescription, CardHeader } from '..';
import styles from './card-root.module.css';
import { PropsWithChildren } from 'react';

type Props = {
  stringBorder?: string;
} & PropsWithChildren;
export const CardRoot: React.FC<Props> = ({ stringBorder, children }) => {
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
