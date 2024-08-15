import styles from './toastsCard.module.css';
import { Card, EditToast } from '..';
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { TooltipTitle } from '../tooltip-title/tooltip-title';
import { GetToast, useDeleteToastMutation } from '../../store';
import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { toast } from 'react-toastify';

type Props = {
  currentToast: GetToast;
  isEditable?: boolean;
  deletable?: boolean;
};

export const ToastsCard: React.FC<Props> = ({
  currentToast,
  isEditable,
  deletable,
}) => {
  const title = currentToast.user?.fullName ?? '';
  const [deleteMutation, { isSuccess }] = useDeleteToastMutation();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: '31.25rem',
    },
  });
  const { date, fluids, solids, desc } = currentToast;
  const handleOnEditClick = () => {
    setIsDialogOpen(true);
  };
  const handleDeleteToasts = (id: string) => {
    deleteMutation(id);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('השתייה נמחקה');
    }
  }, [isSuccess]);

  return (
    <>
      {!isDialogOpen && (
        <CustomWidthTooltip
          title={<TooltipTitle fluids={fluids || ''} solids={solids || ''} />}
          placement="top"
        >
          <div>
            <Card.Root>
              <Card.Header title={title}>
                {isEditable && (
                  <div className={styles.iconsContainer}>
                    <MdEdit
                      className={styles.editButton}
                      onClick={handleOnEditClick}
                    />
                    {deletable && !currentToast.hasHappened && (
                      <MdCancel
                        className={styles.editButton}
                        onClick={() => handleDeleteToasts(currentToast.id)}
                      />
                    )}
                  </div>
                )}
              </Card.Header>
              <Card.Description desc={desc || ''} />
              <Card.Date date={date || new Date()} />
            </Card.Root>
          </div>
        </CustomWidthTooltip>
      )}
      {isEditable && (
        <EditToast
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          toast={currentToast}
        />
      )}
    </>
  );
};
