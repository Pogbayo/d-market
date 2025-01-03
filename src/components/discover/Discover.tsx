import { RoundedShape } from "../../itemDiv/roundedShape/RoundedShape";
import styles from "./Discover.module.css";

export const Discover = () => {
  return (
    <div className={styles.container}>
      <h2>Discover gifts for every occasion</h2>
      <div className={styles.roundedShapeWrapper}>
        <RoundedShape />
      </div>
    </div>
  );
};
