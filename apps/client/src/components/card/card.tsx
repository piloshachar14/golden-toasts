import { CSSProperties } from 'react';
import styles from './card.module.css';
import { Divider } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

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
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: 500,
    },
  });
  const charOfNewDate = 10;
  const formattedDate = date
    ? date.toString().substring(0, charOfNewDate)
    : null;
  return (
    <>
      {fluids && solids ? (
        <CustomWidthTooltip
          title={
            <div className={styles.tooltip}>
              <div className={styles.tooltipheader}>:משקאות</div>
              <Divider />
              <div className={styles.tooltiptext}>{fluids}</div>
              <div className={styles.tooltipheader}>:מאכלים</div>
              <Divider />
              <div className={styles.tooltiptext}>{solids}</div>
            </div>
          }
          placement="top"
        >
          <div className={styles.card} style={style}>
            <div className={styles.heading}>{title}</div>
            <div className={styles.desc} style={descriptionStyle}>
              {description}
            </div>
            {date && <div>{formattedDate}</div>}
          </div>
        </CustomWidthTooltip>
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
