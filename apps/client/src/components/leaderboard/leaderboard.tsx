import styles from './leaderboard.module.css';
import { Category, LeaderboardCard } from '../';
import { LeaderboardRounded } from '@mui/icons-material';
import { Tooltip } from 'react-tooltip';
import { useGetLeadeboardQuery } from '../../store';
import { useEffect, useState } from 'react';

export const Leaderboard: React.FC = () => {
  const { data: leaderboard } = useGetLeadeboardQuery();
  const [names, setNames] = useState<string[]>([]);
  const [happenedToasts, setHappenedToasts] = useState<number[]>([]);
  useEffect(() => {
    if (leaderboard) {
      const leaderboardData = leaderboard.map((entry) => ({
        numOfToasts: entry.allHappendToasts,
        fullUserName: entry.user.fullName,
      }));
      setHappenedToasts(leaderboardData.map((item) => item.numOfToasts));
      setNames(leaderboardData.map((item) => item.fullUserName));
    }
  }, [leaderboard]);

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
        {names[0] && (
          <LeaderboardCard
            numOfToasts={happenedToasts[0]}
            avatarColor="gold"
            className={styles.goldBorderColor}
            dividerClassName={styles.dividerGold}
            fullUserName={names[0]}
          />
        )}
        {names[1] && (
          <LeaderboardCard
            numOfToasts={happenedToasts[1]}
            avatarColor="silver"
            className={styles.silverBorderColor}
            dividerClassName={styles.dividerSilver}
            fullUserName={names[1]}
          />
        )}
        {names[2] && (
          <LeaderboardCard
            numOfToasts={happenedToasts[2]}
            avatarColor="#cd7f32"
            className={styles.bornzeBorderColor}
            dividerClassName={styles.dividerBronze}
            fullUserName={names[2]}
          />
        )}
      </div>
    </Category>
  );
};
