import styles from "./board.module.css";
export const Board = () => {
  return (
    <div className={styles.container}>
      <section className={styles.imgContainer}>
        <img
          className={styles.imgOne}
          src="/public/images/ecommerce-3640321.jpg"
          alt=""
        />
        <img
          className={styles.imgTwo}
          src="/public/images/online-3964531_1280.jpg"
          alt=""
        />
      </section>

      <button className={styles.shopNow}>Shop now</button>
    </div>
  );
};
