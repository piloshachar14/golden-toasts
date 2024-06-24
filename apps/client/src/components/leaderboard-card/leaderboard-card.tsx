import styles from './leaderboard-card.module.css';
import Avatar from '@mui/material/Avatar';
import { User, Divider } from '../';
type Props = {
  leaderboard: User[];
  borderColor: string;
};
export const LeaderboardCard: React.FC<Props> = ({
  leaderboard,
  borderColor,
}) => {
  return (
    <div className={styles.leaderboardOne} style={{ borderColor: borderColor }}>
      <div className={styles.avatar}>
        <Avatar
          sx={{
            bgcolor: borderColor,
            top: '18%',
            left: '1em',
          }}
        >
          N
        </Avatar>
      </div>
      <Divider className={styles.divider} backgroundcolor={borderColor} />
    </div>
  );
};
