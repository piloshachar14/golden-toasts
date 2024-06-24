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
  const style: Record<string, string> = {};
  if (borderColor) {
    style['borderColor'] = borderColor;
  }
  return (
    <div className={styles.leaderBoardOne} style={style}>
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
      <Divider
        style={{ height: '100%', width: '0.1em', backgroundColor: borderColor }}
      />
    </div>
  );
};
