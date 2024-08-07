import styles from './user-card.module.css';
import { Card, EditUser } from '..';
import { User } from '../../store';
import { MdEdit } from 'react-icons/md';

type Props = {
  onClick: () => void;
  user: User;
  stringBorder?: string;
};

export const UserCard: React.FC<Props> = ({ user, stringBorder, onClick }) => {
  const { fullName } = user;

  return (
    <div>
      <Card.Root stringBorder={stringBorder}>
        <Card.Header title={fullName}>
          <div className={styles.editButton}>
            <MdEdit onClick={onClick} />
          </div>
        </Card.Header>
      </Card.Root>
    </div>
  );
};
