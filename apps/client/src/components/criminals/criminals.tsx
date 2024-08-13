import styles from './criminals.module.css';
import { CriminalsCard, Category, Divider } from '../';
import { Tooltip } from 'react-tooltip';
import { GiPirateFlag, GiPirateGrave } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import {
  GetCriminal,
  useGetAllCriminalsQuery,
  useLoginMutation,
  useSignUpMutation,
} from '../../store';
import { useEffect, useState } from 'react';

export const Criminals: React.FC = () => {
  const { data: CriminalsData } = useGetAllCriminalsQuery();
  const [regularCriminals, setRegularCriminals] = useState<GetCriminal[]>([]);
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signUpResult',
  });
  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signInResult',
  });
  const [personaNonGrataCriminals, setPersonaNonGrataCriminals] = useState<
    GetCriminal[]
  >([]);
  useEffect(() => {
    if (CriminalsData) {
      const filteredRegularCriminals = CriminalsData.filter(
        (criminal) => !criminal.isPersonaNonGrata
      );
      const filteredPersonaNonGrataCriminals = CriminalsData.filter(
        (criminal) => criminal.isPersonaNonGrata
      );
      setRegularCriminals(filteredRegularCriminals);
      setPersonaNonGrataCriminals(filteredPersonaNonGrataCriminals);
    }
  }, [CriminalsData]);

  const displayData = (criminalsArray: GetCriminal[]) => {
    return criminalsArray.map((criminal, index) => (
      <CriminalsCard
        key={index}
        criminal={criminal}
        description="תאריך שבו הפך לפושע"
        isAdmin={signInData?.isAdmin || signUpData?.isAdmin || false}
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
            {displayData(regularCriminals ?? [])}
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
            {displayData(personaNonGrataCriminals ?? [])}
          </div>
        </div>
      </Category>
    </div>
  );
};
