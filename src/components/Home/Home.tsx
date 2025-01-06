import { useState, useEffect } from "react";
import { useCart } from "../../lib/usecart";
import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
import styles from "./home.module.css";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { fetchedData } = useCart();
  useEffect(() => {
    if (fetchedData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Board />
      {isLoading ? (
        <>
          <div className={styles.skeletonLoader}>
            <div className={styles.shimmer}></div>
          </div>
          <div className={styles.skeletonLoader}>
            <div className={styles.shimmer}></div>
          </div>
          <div className={styles.skeletonLoader}>
            <div className={styles.shimmer}></div>
          </div>
        </>
      ) : (
        <>
          <RCV />
          <Discover />
          <RecentlyViewedTwo />
          <AmazingDeals />
        </>
      )}
    </Layout>
  );
};
