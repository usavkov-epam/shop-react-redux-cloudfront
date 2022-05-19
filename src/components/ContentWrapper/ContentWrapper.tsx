import React from "react";

import styles from './ContentWrapper.module.css';

interface ContentWrapperProps extends React.PropsWithChildren<{}>{

}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children
}) => {
  return (
    <div
      className={styles.wrapper}
    >
      {children}
    </div>
  );
};
