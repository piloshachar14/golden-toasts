import styles from './toastsCard.module.css';
import { Card, EditToast } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { TooltipTitle } from '../tooltip-title/tooltip-title';
import { Toast } from '../../store';
import { useState } from 'react';

type Props = {
  toast: Toast;
  stringBorder?: string;
  isEditable?: boolean;
};

export const ToastsCard: React.FC<Props> = ({
  toast,
  stringBorder,
  isEditable,
}) => {
  const title = toast.user?.fullName ?? '';

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: '31.25rem',
    },
  });
  const { date, fluids, solids, desc } = toast;
  const handleOnEditClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <CustomWidthTooltip
      title={<TooltipTitle fluids={fluids || ''} solids={solids || ''} />}
      placement="top"
    >
      <div>
        <Card.Root stringBorder={stringBorder}>
          <Card.Header title={title}>
            {isEditable && (
              <div className={styles.editButton}>
                <MdEdit onClick={handleOnEditClick} />
                <EditToast
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                  toast={toast}
                />
              </div>
            )}
          </Card.Header>
          <Card.Description desc={desc || ''} />
          <Card.Date date={date || new Date()} />
        </Card.Root>
      </div>
    </CustomWidthTooltip>
  );
};
