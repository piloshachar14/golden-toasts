import { CSSProperties } from 'react';
import styles from './card.module.css';
import { Divider } from '..';
import { Tooltip } from '@mui/material';

type Props = {
  title: string | undefined;
  stringBorder?: string;
  description?: string;
  descriptionStyle?: CSSProperties;
  date?: Date;
  height?: string;
  fluids?: string;
  solids?: string;
};
export const Card: React.FC<Props> = ({
  title,
  description,
  stringBorder,
  descriptionStyle,
  date,
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
  const formattedDate = date
    ? date.toString().substring(0, charOfNewDate)
    : null;
  return (
    <>
      {fluids && solids ? (
        <Tooltip
          title={
            <div>
              <div>:משקאות</div>
              <Divider />
              <div>{fluids}</div>
              <Divider />
              <div>:מאכלים</div>
              <Divider />
              <div>{solids}</div>
            </div>
          }
        >
          <div className={styles.card} style={style}>
            <div className={styles.heading}>{title}</div>
            <div className={styles.desc} style={descriptionStyle}>
              {description}
            </div>
            {date && <div>{formattedDate}</div>}
          </div>
        </Tooltip>
      ) : (
        <div className={styles.card} style={style}>
          <div className={styles.heading}>{title}</div>
          <div className={styles.desc} style={descriptionStyle}>
            {description}
          </div>
          {date && <div>{formattedDate}</div>}
        </div>
      )}
    </>
  );
};
