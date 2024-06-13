import { CSSProperties } from 'react';
import styles from './card.module.css';
type Props = {
  title: string;
  stringBorder?: string;
  desc: string;
  descStyle: CSSProperties;
};
export const Card: React.FC<Props> = ({
  title,
  desc,
  stringBorder,
  descStyle,
}) => {
  return (
    <div
      className={styles.card}
      style={stringBorder ? { border: stringBorder } : {}}
    >
      <div className={styles.heading}>{title}</div>
      <div className={styles.desc} style={descStyle}>
        {desc}
      </div>
    </div>
  );
};
