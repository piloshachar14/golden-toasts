import styles from './criminals.module.css';
import { Card, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import {
  Criminal,
  useGetAllRegularCriminalsQuery,
  useGetAllPersonaNonGratasQuery,
} from '../../store';

export const Criminals: React.FC = () => {
  const { data: CriminalsData } = useGetAllRegularCriminalsQuery();
  const { data: PersonaNonGratasData } = useGetAllPersonaNonGratasQuery();
  const displayData = (array: Criminal[]) => {
    return array.map((criminal, index) => (
      <Card
        key={index}
        title={criminal.user.fullName}
        date={criminal.createdAt}
        description="תאריך שבו הפך לפושע"
        stringBorder="0.1rem white solid"
      />
    ));
  };
  return (
    <div className={styles.criminals}>
      <Divider />

      <Category className={styles.criminalsCategory}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <div className={styles.button}>
              <GiPirateFlag
                className={`${styles.regularCriminalsIcon} regularCiminalsIcon`}
              />
              <Tooltip anchorSelect=".regularCiminalsIcon" place="top">
                בני עוולה רגילים
              </Tooltip>
            </div>
          </IconContext.Provider>

          <div className={styles.criminalsGrid}>
            {displayData(CriminalsData ? CriminalsData : [])}
          </div>
        </div>
      </Category>

      <Divider />

      <Category className={styles.personaNonGrataCategory}>
        <div className={styles.criminalsContainer}>
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <div className={styles.button}>
              <GiPirateGrave
                className={`${styles.personaNonGrataIcon} personaNonGrataIcon `}
              />
              <Tooltip anchorSelect=".personaNonGrataIcon" place="top">
                פרסונה נון גרטה לא עלינו
              </Tooltip>
            </div>
          </IconContext.Provider>
          <div className={styles.criminalsGrid}>
            {displayData(PersonaNonGratasData ? PersonaNonGratasData : [])}
          </div>
        </div>
      </Category>
    </div>
  );
};
