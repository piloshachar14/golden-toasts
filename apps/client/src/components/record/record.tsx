import { Divider, Leaderboard } from '../';
import styles from './record.module.css';
import { useGetRecordPeiodQuery, useGetToastInPeriodQuery } from '../../store';
import { Tooltip } from 'react-tooltip';

export const Record: React.FC = () => {
  const { data: periodToasts } = useGetToastInPeriodQuery();
  const { data: recordToasts } = useGetRecordPeiodQuery();
  return (
    <div className={styles.recordCategory}>
      <Divider />
      <Leaderboard />
      <div className={styles.record}>
        <span className="periodToasts">{periodToasts || '0'}</span>/
        <span className="recordToasts">{recordToasts || '0'}</span>
      </div>
      <Tooltip anchorSelect=".periodToasts" place="top">
        מצב שתיות נוכחי בתקופה
      </Tooltip>
      <Tooltip anchorSelect=".recordToasts" place="top">
        שיא שתיות נוכחי
      </Tooltip>
    </div>
  );
};
