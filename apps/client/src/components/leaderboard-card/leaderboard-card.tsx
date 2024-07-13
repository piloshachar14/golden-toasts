import styles from './leaderboard-card.module.css';
import Avatar from '@mui/material/Avatar';
import { Divider } from '../';
type Props = {
  className: string;
  avatarColor: string;
  dividerClassName: string;
};
export const LeaderboardCard: React.FC<Props> = ({
  className,
  avatarColor,
  dividerClassName,
}) => {
  return (
    <div className={`${styles.leaderboardOne} ${styles[className]}`}>
      <div className={styles.avatar}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            top: '18%',
            left: '1rem',
          }}
        >
          N
        </Avatar>
      </div>
      <Divider className={dividerClassName} />
    </div>
  );
};
