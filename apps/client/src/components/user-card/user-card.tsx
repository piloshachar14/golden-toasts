import styles from './user-card.module.css';
import { Card } from '..';
import { User } from '../../store';
import { MdEdit } from 'react-icons/md';

type Props = {
  onClick: () => void;
  user: User;
};

export const UserCard: React.FC<Props> = ({ user, onClick }) => {
  const { fullName } = user;

  return (
    <div>
      <Card.Root>
        <Card.Header title={fullName}>
          <div className={styles.editButton}>
            <MdEdit onClick={onClick} />
          </div>
        </Card.Header>
      </Card.Root>
    </div>
  );
};
