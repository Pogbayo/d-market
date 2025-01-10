import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
// import styles from "./home.module.css";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";

export const Home = () => {
  return (
    <Layout>
      <Board />
      <>
        <RCV />
        <Discover />
        <RecentlyViewedTwo />
        <AmazingDeals />
        <Editor />
        <FeaturedCategories />
      </>
    </Layout>
  );
};
