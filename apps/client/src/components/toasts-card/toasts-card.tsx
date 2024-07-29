import styles from './toastsCard.module.css';
import { Card, CardDate, CardDescription, CardHeader } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { TooltipTitle } from '../tooltip-title/tooltip-title';

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
        <TooltipTitle
          fluids={fluids ? fluids : ''}
          solids={solids ? solids : ''}
        />
      }
      placement="top"
    >
      <div>
        <Card stringBorder={stringBorder}>
          <CardHeader title={title ? title : ''}>
            {isEditable && (
              <div className={styles.editButton}>
                <MdEdit />
              </div>
            )}
          </CardHeader>
          <CardDescription desc={description ? description : ''} />
          <CardDate date={date ? date : new Date()} />
        </Card>
      </div>
    </CustomWidthTooltip>
  );
};
