import styles from './criminals.module.css';
import { CriminalsCard, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { Criminal, useGetAllCriminalsQuery } from '../../store';

export const Criminals: React.FC = () => {
  const { data: CriminalsData } = useGetAllCriminalsQuery();
  const regularCriminals =
    CriminalsData?.filter((criminal) => !criminal.isPersonaNonGrata) || [];
  const personaNonGrataCriminals =
    CriminalsData?.filter((criminal) => criminal.isPersonaNonGrata) || [];
  const displayData = (criminalsArray: Criminal[]) => {
    return criminalsArray.map((criminal, index) => (
      <CriminalsCard
        key={index}
        criminal={criminal}
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
            {displayData(regularCriminals ? regularCriminals : [])}
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
            {displayData(
              personaNonGrataCriminals ? personaNonGrataCriminals : []
            )}
          </div>
        </div>
      </Category>
    </div>
  );
};
