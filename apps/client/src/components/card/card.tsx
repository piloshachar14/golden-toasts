import { CSSProperties } from 'react';
import styles from './card.module.css';
import { style } from '@mui/system';
type Props = {
  title: string;
  stringBorder?: string;
  desc: string;
  descriptionStyle?: CSSProperties;
  toastsDate?: Date;
  height?: string;
};
export const Card: React.FC<Props> = ({
  title,
  desc,
  stringBorder,
  descriptionStyle,
  toastsDate,
  height,
}) => {
  const style: Record<string, string> = {};
  if (stringBorder) {
    style['border'] = stringBorder;
  }
  if (height) {
    style['height'] = height;
  }

  return (
    <div className={styles.card} style={style}>
      <div className={styles.heading}>{title}</div>
      {toastsDate && <div>{toastsDate.toDateString()}</div>}
      <div className={styles.desc} style={descriptionStyle}>
        {desc}
      </div>
    </div>
  );
};
