import styles from './leaderboard.module.css';
import { useState } from 'react';
import { Category, Divider, User } from '../';
import { LeaderboardRounded } from '@mui/icons-material';
import { Tooltip } from 'react-tooltip';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
export const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  return (
    <Category style={{ border: 'none', height: '50%' }}>
      <div>
        <LeaderboardRounded
          className="leaderboard"
          sx={{
            color: 'blue',
          }}
        />
      </div>
      <Tooltip anchorSelect=".leaderboard" place="top">
        :טבלת מובילים
      </Tooltip>
      <div className={styles.leaderboardTable}>
        <div className={styles.leaderBoardOne}>
          <Avatar
            sx={{
              bgcolor: 'gold',
              top: '25%',
              left: '1em',
            }}
          >
            N
          </Avatar>
          <Divider style={{ height: '100%', width: '0.1em' }} />
        </div>
        <div className={styles.leaderBoardOne}>
          <Avatar
            sx={{
              bgcolor: 'silver',
              top: '25%',
              left: '1em',
            }}
          >
            N
          </Avatar>
          <Divider style={{ height: '100%', width: '0.1em' }} />
        </div>
        <div className={styles.leaderBoardOne}>
          <Avatar
            sx={{
              bgcolor: '#cd7f32',
              top: '25%',
              left: '1em',
            }}
          >
            N
          </Avatar>
          <Divider style={{ height: '100%', width: '0.1em' }} />
        </div>
      </div>
    </Category>
  );
};
