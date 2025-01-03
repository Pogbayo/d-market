import React from "react";
import styles from "./rcv.module.css";
const RCV: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <p className={styles.titleText}>Recently Viewed & more</p>
        <p className={styles.titleText}>
          Show more from the <a href="">RedCoopCollectibles</a>shop
        </p>
      </span>
    </div>
  );
};

export default RCV;
