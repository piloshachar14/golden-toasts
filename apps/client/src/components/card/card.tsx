import styles from './card.module.css';
import { PropsWithChildren } from 'react';

type Props = {
  title: string | undefined;
  stringBorder?: string;
  description?: string;
  date?: Date;
} & PropsWithChildren;
export const Card: React.FC<Props> = ({
  title,
  description,
  stringBorder,
  date,
  children,
}) => {
  const style: Record<string, string> = {};
  if (stringBorder) {
    style['border'] = stringBorder;
  }

  const charOfNewDate = 10;
  const formattedDate = date
    ? date.toString().substring(0, charOfNewDate)
    : null;
  return (
    <div className={styles.card} style={style}>
      <div className={styles.cardHeader}>
        <div className={styles.heading}>{title}</div>
        {children}
      </div>
      <div className={styles.desc}>{description}</div>
      {date && <div className={styles.date}>{formattedDate}</div>}
    </div>
  );
};
