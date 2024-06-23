import { Divider, RecordState, Leaderboard } from '../';
import styles from './record.module.css';

export const Record: React.FC = () => {
  return (
    <div className={styles.recordCategory}>
      <Divider />
      <Leaderboard />
      <Divider />
      <RecordState />
    </div>
  );
};
