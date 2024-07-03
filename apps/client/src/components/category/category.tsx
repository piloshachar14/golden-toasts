import { IoMdAddCircleOutline } from 'react-icons/io';
import styles from './category.module.css';
import React, { PropsWithChildren, CSSProperties } from 'react';
import { Tooltip } from 'react-tooltip';

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
          <div>
            {title && (
              <h1 className={styles.toastTitle}>
                <IoMdAddCircleOutline className={`${styles.addicon} addicon`} />
                {title}
              </h1>
            )}
          </div>
        ) : (
          <div className={styles.title}>
            {title && <h1 className={styles.title}>{title}</h1>}
          </div>
        )}
        <div className={styles.children}>{children}</div>
      </div>
      <Tooltip anchorSelect=".addicon" place="top">
        רוצים לעזור למאמץ? הוסיפו פה שתייה כפרה עליכם
      </Tooltip>
    </>
  );
};
