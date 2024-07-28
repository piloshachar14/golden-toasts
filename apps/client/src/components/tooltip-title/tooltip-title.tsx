import { Divider } from '..';
import styles from './tooltip-title.module.css';
type Props = {
  fluids: string;
  solids: string;
};
export const TooltipTitle: React.FC<Props> = ({ fluids, solids }) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipheader}>:משקאות</div>
      <Divider />
      <div className={styles.tooltiptext}>{fluids}</div>
      <div className={styles.spacer}> </div>
      <div className={styles.tooltipheader}>:מאכלים</div>
      <Divider />
      <div className={styles.tooltiptext}>{solids}</div>
    </div>
  );
};
