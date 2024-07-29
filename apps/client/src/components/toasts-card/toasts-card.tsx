import styles from './toastsCard.module.css';
import { Card } from '..';
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
      title={<TooltipTitle fluids={fluids || ''} solids={solids || ''} />}
      placement="top"
    >
      <div>
        <Card.Root stringBorder={stringBorder}>
          <Card.Header title={title || ''}>
            {isEditable && (
              <div className={styles.editButton}>
                <MdEdit />
              </div>
            )}
          </Card.Header>
          <Card.Description desc={description || ''} />
          <Card.Date date={date || new Date()} />
        </Card.Root>
      </div>
    </CustomWidthTooltip>
  );
};
