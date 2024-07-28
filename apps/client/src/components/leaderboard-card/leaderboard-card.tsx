import styles from './leaderboard-card.module.css';
import Avatar from '@mui/material/Avatar';
import { Divider } from '../';
type Props = {
  className: string;
  avatarColor: string;
  dividerClassName: string;
  fullUserName: string;
  numOfToasts: number;
};
export const LeaderboardCard: React.FC<Props> = ({
  className,
  avatarColor,
  dividerClassName,
  fullUserName,
  numOfToasts,
}) => {
  const initials = fullUserName
    ? `${fullUserName.split(' ')[0][0]}${fullUserName.split(' ')[1][0]}`
    : '';

  return (
    <div className={`${styles.leaderboardOne} ${className}`}>
      <div className={styles.avatar}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            top: '18%',
            left: '1rem',
          }}
        >
          {initials}
        </Avatar>
      </div>
      <Divider className={dividerClassName} />
      <div className={styles.leaderboardUser}>
        <div className={styles.name}>{fullUserName}</div>
        {numOfToasts && <div>{numOfToasts}:מספר השתיות שבוצעו</div>}
      </div>
    </div>
  );
};
