import { Tooltip } from 'react-tooltip';
import { useState, MouseEvent } from 'react';
import { Category } from '..';
import styles from './record-state.module.css';
import { EmailRounded, DraftsRounded } from '@mui/icons-material';
export const RecordState: React.FC = () => {
  const [recordToasts, setRecordToasts] = useState(0);
  const [currentToasts, setCurrentToasts] = useState(0);
  const [onHover, setOnHover] = useState(false);
  const handleOnHover = () => {
    setOnHover(true);
  };
  const handleOnLeave = () => {
    setOnHover(false);
  };
  return (
    <>
      <div className={styles.record}>
        <div className={styles.recordNum}>
          {currentToasts} / {recordToasts}
        </div>
      </div>
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
    </>
  );
};
