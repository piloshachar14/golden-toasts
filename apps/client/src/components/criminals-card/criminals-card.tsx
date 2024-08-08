import { Card } from '..';
import {
  Criminal,
  useGetUserByIdQuery,
  useEditCriminalMutation,
  useDeleteCriminalMutation,
} from '../../store';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import styles from './criminals-card.module.css';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';

type Props = {
  criminal: Criminal;
  stringBorder?: string;
  description: string;
  isAdmin: boolean;
};

export const CriminalsCard: React.FC<Props> = ({
  criminal,
  stringBorder,
  description,
  isAdmin,
}) => {
  const { data: userData } = useGetUserByIdQuery(criminal.userId);
  const [editCriminal] = useEditCriminalMutation();
  const [deleteCriminal] = useDeleteCriminalMutation();
  const [isPersonaNonGrata, setIsPersonaNonGrata] = useState(
    criminal.isPersonaNonGrata
  );

  const handleOnClick = async () => {
    const updatedUser = {
      ...criminal,
      isPersonaNonGrata: !isPersonaNonGrata,
    };
    setIsPersonaNonGrata(!isPersonaNonGrata);
    await editCriminal(updatedUser);
  };

  return (
    <div>
      <Card.Root stringBorder={stringBorder}>
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
