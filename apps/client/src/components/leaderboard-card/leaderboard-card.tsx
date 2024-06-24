import styles from './leaderboard-card.module.css';
import Avatar from '@mui/material/Avatar';
import { User, Divider } from '../';
type Props = {
  leaderboard: User[];
  className: string;
  avatarColor: string;
};
export const LeaderboardCard: React.FC<Props> = ({
  leaderboard,
  className,
  avatarColor,
}) => {
  return (
    <div className={`${styles.leaderboardOne} ${styles[className]}`}>
      <div className={styles.avatar}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            top: '18%',
            left: '1em',
          }}
        >
          N
        </Avatar>
      </div>
      <Divider className={styles.divider} backgroundcolor={avatarColor} />
    </div>
  );
};
