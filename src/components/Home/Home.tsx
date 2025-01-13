import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";
import { Suggestion } from "../suggestion/Suggestion";
import { Viewedproduct } from "../viewProducts/ViewProduct";
import { Routes, Route } from "react-router-dom";
import { CartList } from "../cartList/CartList";
import { useCart } from "../../lib/usecart";
import { SvgLoader } from "../svg-loader/SvgLoader";
import styles from "./home.module.css"; // Assuming your CSS file is named home.module.css

export const Home = () => {
  const { isLoading } = useCart();

  return (
    <Layout>
      {/* Render loader if loading */}
      {isLoading && <SvgLoader />}

      {/* Apply blur effect when loading */}
      <div className={isLoading ? styles.blurred : ""}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Board />
                <RCV />
                <Discover />
                <RecentlyViewedTwo />
                <AmazingDeals />
                <Editor />
                <FeaturedCategories />
                <Suggestion />
              </>
            }
          />
          <Route path="viewProduct" element={<Viewedproduct />} />
          <Route path="cartlist" element={<CartList />} />
        </Routes>
      </div>
    </Layout>
  );
};
