import styles from './record-state.module.css';
import { useGetToastInPeriodQuery, useGetRecordPeiodQuery } from '../../store';

export const RecordState: React.FC = () => {
  const { data: periodToasts } = useGetToastInPeriodQuery();
  const { data: recordToasts } = useGetRecordPeiodQuery();

  return (
    <button className={styles.record}>
      <div className={styles.recordNum}>
        {recordToasts && periodToasts
          ? `${periodToasts} / ${recordToasts}`
          : '0/0'}
      </div>
    </button>
  );
};
