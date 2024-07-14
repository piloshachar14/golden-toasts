import { IoMdAddCircleOutline } from 'react-icons/io';
import styles from './category.module.css';
import React, { PropsWithChildren, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { AddToast } from '..';

type Props = {
  className?: string;
  title?: string;
  toastsbutton?: boolean;
} & PropsWithChildren;
export type CategoryWidth = string;

export const Category: React.FC<Props> = ({
  children,
  className,
  title,
  toastsbutton,
}) => {
  const [isAddToastDialogOpen, setIsAddToastDialogOpe] = useState(false);
  const handleOnButtonClick = () => {
    setIsAddToastDialogOpe(true);
  };
  return (
    <>
      <div className={`${styles.category} ${className}`}>
        {toastsbutton ? (
          <div>
            {title && (
              <h1 className={styles.toastTitle}>
                <IoMdAddCircleOutline
                  className={`${styles.addicon} addicon`}
                  onClick={handleOnButtonClick}
                />
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
      <AddToast
        isAddToastDialogOpen={isAddToastDialogOpen}
        setIsAddToastDialogOpe={setIsAddToastDialogOpe}
      />
    </>
  );
};
