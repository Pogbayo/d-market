import { HomeImprovement } from "./HomeImprovement/HomeImprovement";
import styles from "./Editor.module.css";
export const Editor = () => {
  return (
    <div className={styles.container}>
      <HomeImprovement />
    </div>
  );
};
