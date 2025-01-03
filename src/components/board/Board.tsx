import styles from "./board.module.css";
export const Board = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="/public/images/ecommerce-3640321.jpg"
        alt=""
      />
      <button className={styles.shopNow}> Shop now</button>
    </div>
  );
};
