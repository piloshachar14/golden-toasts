import { CSSProperties } from 'react';
import styles from './card.module.css';
type Props = {
  title: string | undefined;
  stringBorder?: string;
  description: string;
  descriptionStyle?: CSSProperties;
  toastsDate?: Date;
  height?: string;
  fluids?: string[];
  solids?: string[];
};
export const Card: React.FC<Props> = ({
  title,
  description,
  stringBorder,
  descriptionStyle,
  toastsDate,
  height,
  fluids,
  solids,
}) => {
  const style: Record<string, string> = {};
  if (stringBorder) {
    style['border'] = stringBorder;
  }
  if (height) {
    style['height'] = height;
  }
  const charOfNewDate = 10;
  const formattedDate = toastsDate
    ? toastsDate.toString().substring(0, charOfNewDate)
    : null;
  return (
    <div className={styles.card} style={style}>
      <div className={styles.heading}>{title}</div>
      {toastsDate && <div>{formattedDate}</div>}
      <div className={styles.desc} style={descriptionStyle}>
        {description}
      </div>
      {fluids && <div> {fluids}</div>}
      {solids && <div>{solids}</div>}
    </div>
  );
};
