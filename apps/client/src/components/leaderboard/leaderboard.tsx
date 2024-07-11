import styles from './leaderboard.module.css';
import { useState } from 'react';
import { Category, LeaderboardCard } from '../';
import { LeaderboardRounded } from '@mui/icons-material';
import { Tooltip } from 'react-tooltip';
import { User } from '../../types';

export const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  return (
    <Category className={styles.categoryStyle}>
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
        <LeaderboardCard
          avatarColor="gold"
          leaderboard={leaderboard}
          className={styles.goldBorderColor}
          dividerClassName={styles.dividerGold}
        />
        <LeaderboardCard
          avatarColor="silver"
          leaderboard={leaderboard}
          className={styles.silverBorderColor}
          dividerClassName={styles.dividerSilver}
        />
        <LeaderboardCard
          avatarColor="#cd7f32"
          leaderboard={leaderboard}
          className={styles.bornzeBorderColor}
          dividerClassName={styles.dividerBronze}
        />
      </div>
    </Category>
  );
};
