import styles from './leaderboard.module.css';
import { useState } from 'react';
import { Category, LeaderboardCard, User } from '../';
import { MdLeaderboard } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { IconContext } from 'react-icons';

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
          className="goldBorderColor"
          dividerClassName="dividerGold"
        />
        <LeaderboardCard
          avatarColor="silver"
          leaderboard={leaderboard}
          className="silverBorderColor"
          dividerClassName="dividerSilver"
        />
        <LeaderboardCard
          avatarColor="#cd7f32"
          leaderboard={leaderboard}
          className="bornzeBorderColor"
          dividerClassName="dividerBronze"
        />

      </div>
    </Category>
  );
};
