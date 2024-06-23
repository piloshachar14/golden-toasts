import { useState, MouseEvent } from 'react';
import { Tooltip } from 'react-tooltip';
import { Card, Category, Divider, User } from '../';
import styles from './record.module.css';
import {
  LeaderboardRounded,
  EmailRounded,
  DraftsRounded,
} from '@mui/icons-material';

export const Record: React.FC = () => {
  const [onHover, setOnHover] = useState(false);
  const handleOnHover = (event: MouseEvent<HTMLDivElement>) => {
    setOnHover(true);
  };
  const handleOnLeave = (event: MouseEvent<HTMLDivElement>) => {
    setOnHover(false);
  };
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [currentToasts, setCurrentToasts] = useState(0);
  const [recordToasts, setRecordToasts] = useState(0);
  return (
    <div className={styles.recordCategory}>
      <Divider />
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

        <div className={styles.record}>
          <div className={styles.recordNum}>
            {currentToasts} / {recordToasts}
          </div>
        </div>
      </Category>
      <Divider />
      <Category style={{ border: 'none' }}>
        <div
          className="addToast"
          onMouseOver={handleOnHover}
          onMouseLeave={handleOnLeave}
        >
          {!onHover ? (
            <EmailRounded
              sx={{
                color: 'blue',
              }}
            />
          ) : (
            <DraftsRounded
              sx={{
                color: 'blue',
              }}
            />
          )}
        </div>
        <div className={styles.recordContainer}>
          <Tooltip anchorSelect=".addToast" place="top">
            !רוצים להמנות כאנשים טובים? לחצו על הכתפור למטה והצטרפו למאבק
          </Tooltip>
        </div>
      </Category>
    </div>
  );
};
