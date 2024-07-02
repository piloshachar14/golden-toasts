import { RecordState } from '../record-state';
import styles from './category.module.css';
import React, { PropsWithChildren, CSSProperties } from 'react';
type Props = {
  style?: CSSProperties;
  title?: string;
  toastsbutton?: boolean;
} & PropsWithChildren;
export type CategoryWidth = string;

export const Category: React.FC<Props> = ({
  children,
  style,
  title,
  toastsbutton,
}) => {
  return (
    <>
      <div className={styles.category} style={style}>
        {toastsbutton ? (
          <div className={styles.toasts}>
            <div className={styles.recordstate}>
              <RecordState />
            </div>
            {title && <h1 className={styles.title}>{title}</h1>}
          </div>
        ) : (
          <div className={styles.title}>
            {title && <h1 className={styles.title}>{title}</h1>}
          </div>
        )}
        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
};
