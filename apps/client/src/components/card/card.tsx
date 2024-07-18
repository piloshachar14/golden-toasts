import { CSSProperties } from 'react';
import styles from './card.module.css';
type Props = {
  title: string | undefined;
  stringBorder?: string;
  description: string;
  descriptionStyle?: CSSProperties;
  toastsDate?: Date;
  height?: string;
};
export const Card: React.FC<Props> = ({
  title,
  description,
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
  console.log(toastsDate);
  const formattedDate =
    toastsDate !== undefined ? toastsDate.toString().substring(0, 10) : null;
  return (
    <div className={styles.card} style={style}>
      <div className={styles.heading}>{title}</div>
      {toastsDate && <div>{formattedDate}</div>}
      <div className={styles.desc} style={descriptionStyle}>
        {description}
      </div>
    </div>
  );
};
