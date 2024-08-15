import { Card } from '..';
import {
  GetCriminal,
  useGetUserByIdQuery,
  useEditCriminalMutation,
  useDeleteCriminalMutation,
} from '../../store';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import styles from './criminals-card.module.css';
import { MdCancel } from 'react-icons/md';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

type Props = {
  criminal: GetCriminal;
  description: string;
  isAdmin: boolean;
};

export const CriminalsCard: React.FC<Props> = ({
  criminal,
  description,
  isAdmin,
}) => {
  const { data: userData } = useGetUserByIdQuery(criminal.userId);
  const [editCriminal, { isSuccess: isEditCriminal }] =
    useEditCriminalMutation();
  const [deleteCriminal, { isSuccess: isDeleteCriminal }] =
    useDeleteCriminalMutation();

  const handleOnClick = async () => {
    const updatedUser = {
      ...criminal,
      isPersonaNonGrata: !criminal.isPersonaNonGrata,
    };
    await editCriminal(updatedUser);
  };
  useEffect(() => {
    if (isDeleteCriminal) {
      toast.success('פושע נמחק');
    }
    if (isEditCriminal) {
      toast.success('פושע התעדכן');
    }
  }, [isDeleteCriminal, isEditCriminal]);
  return (
    <div>
      <Card.Root>
        <Card.Header title={userData?.fullName || ''}>
          {isAdmin &&
            (criminal.isPersonaNonGrata ? (
              <div className={styles.buttonContainer}>
                <div className={styles.editButton}>
                  <GiPirateFlag onClick={handleOnClick} />
                </div>
                <div className={styles.editButton}>
                  <MdCancel onClick={() => deleteCriminal(criminal.id)} />
                </div>
              </div>
            ) : (
              <div className={styles.buttonContainer}>
                <div className={styles.editButton}>
                  <GiPirateGrave onClick={handleOnClick} />
                </div>
                <div className={styles.editButton}>
                  <MdCancel onClick={() => deleteCriminal(criminal.id)} />
                </div>
              </div>
            ))}
        </Card.Header>
        <Card.Description desc={description || ''} />
        <Card.Date date={criminal.createdAt || new Date()} />
      </Card.Root>
    </div>
  );
};
