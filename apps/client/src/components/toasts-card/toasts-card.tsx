import styles from './toastsCard.module.css';
import { Card } from '..';
import { Divider } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { MdEdit } from 'react-icons/md';

type Props = {
  title: string | undefined;
  description?: string;
  date?: Date;
  fluids?: string;
  solids?: string;
  stringBorder?: string;
  height?: string;
  isEditable?: boolean;
};

export const ToastsCard: React.FC<Props> = ({
  title,
  description,
  date,
  fluids,
  solids,
  stringBorder,
  isEditable,
}) => {
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: '31.25rem',
    },
  });

  return (
    <CustomWidthTooltip
      title={
        <div className={styles.tooltip}>
          <div className={styles.tooltipheader}>:משקאות</div>
          <Divider />
          <div className={styles.tooltiptext}>{fluids}</div>
          <div className={styles.spacer}> </div>
          <div className={styles.tooltipheader}>:מאכלים</div>
          <Divider />
          <div className={styles.tooltiptext}>{solids}</div>
        </div>
      }
      placement="top"
    >
      <div>
        <Card
          title={title}
          description={description}
          date={date}
          stringBorder={stringBorder}
        >
          {isEditable && (
            <div className={styles.editButton}>
              <MdEdit />
            </div>
          )}
        </Card>
      </div>
    </CustomWidthTooltip>
  );
};
