import React from "react";
import styles from "./rcv.module.css";
import { Products } from "../../itemDiv/products/products";
const RCV: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <p className={styles.titleText}>Recently Viewed & more</p>
        <p className={styles.titleTextTwo}>
          Show more from the <a href="">RedCoopCollectibles</a>shop
        </p>
      </span>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default RCV;
