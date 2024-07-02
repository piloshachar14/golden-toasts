import { useState } from 'react';
import styles from './record-state.module.css';

export const RecordState: React.FC = () => {
  const [recordToasts, setRecordToasts] = useState(0);
  const [currentToasts, setCurrentToasts] = useState(0);

  return (
    <div className={styles.record}>
      <div className={styles.recordNum}>
        {currentToasts} / {recordToasts}
      </div>
    </div>
  );
};
