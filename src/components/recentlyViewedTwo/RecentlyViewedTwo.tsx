import { ReusableComponent } from "./reusable/ReusableSquareComponent";
import { useCart } from "../../lib/usecart";
import styles from "./recentlyviewedtwo.module.css";

export const RecentlyViewedTwo = () => {
  const { fetchedData } = useCart();
  const slicedData = fetchedData?.slice(0, 4) || [];
  const lastDataImageUrl =
    fetchedData && fetchedData[19] ? fetchedData[19].image : null;

  return (
    <div>
      <section className={styles.sec}>
        <div className={styles.threeDivsContainer}>
          <p>Because you recently viewed</p>
          <div>
            <img
              className={fetchedData ? styles.img : styles.shimmer}
              src={`${lastDataImageUrl}`}
              alt=""
            />
            <img
              className={fetchedData ? styles.img : styles.shimmer}
              src={`${lastDataImageUrl}`}
              alt=""
            />
            <img
              className={fetchedData ? styles.img : styles.shimmer}
              src={`${lastDataImageUrl}`}
              alt=""
            />
            <img
              className={fetchedData ? styles.img : styles.shimmer}
              src={`${lastDataImageUrl}`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.container}>
          <div
            className={styles.divOne}
            style={{
              backgroundImage: `url(${lastDataImageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p style={{ color: "red" }}> {slicedData[4]?.price}</p>
          </div>
          <div className={styles.divTwo}>
            <ReusableComponent data={slicedData} />
          </div>
        </div>
      </section>
    </div>
  );
};
