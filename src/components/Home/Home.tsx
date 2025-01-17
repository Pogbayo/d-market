import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";
import { Suggestion } from "../suggestion/Suggestion";
import styles from "./home.module.css";
import { useCart } from "../../lib/usecart";
import { SvgLoader } from "../svg-loader/SvgLoader";

export const Home = () => {
  const { isLoading } = useCart();

  return (
    <>
      {isLoading && <SvgLoader />}
      <div className={isLoading ? styles.blurred : ""}>
        <Board />
        <RCV />
        <Discover />
        <RecentlyViewedTwo />
        <AmazingDeals />
        <Editor />
        <FeaturedCategories />
        <Suggestion />
      </div>
    </>
  );
};
