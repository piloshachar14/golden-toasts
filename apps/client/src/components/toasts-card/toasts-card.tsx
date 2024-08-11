import styles from './toastsCard.module.css';
import { Card, EditToast } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { TooltipTitle } from '../tooltip-title/tooltip-title';
import { GetToast, useDeleteToastMutation } from '../../store';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';

type Props = {
  toast: GetToast;
  stringBorder?: string;
  isEditable?: boolean;
  deletable?: boolean;
};

export const ToastsCard: React.FC<Props> = ({
  toast,
  stringBorder,
  isEditable,
  deletable,
}) => {
  const title = toast.user?.fullName ?? '';
  const [deleteMutation] = useDeleteToastMutation();
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
  const handleDeleteToasts = (id: string) => {
    deleteMutation(id);
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
              <div className={styles.iconsContainer}>
                <MdEdit
                  className={styles.editButton}
                  onClick={handleOnEditClick}
                />
                {deletable && !toast.hasHappened && (
                  <MdCancel
                    className={styles.editButton}
                    onClick={() => handleDeleteToasts(toast.id)}
                  />
                )}
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
