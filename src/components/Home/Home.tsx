import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
import styles from "./home.module.css";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";
import { Routes, Route } from "react-router-dom";
import { Viewedproduct } from "../viewProducts/ViewProduct";
import { useCart } from "../../lib/usecart";

export const Home = () => {
  const { isLoading } = useCart();

  return (
    <Layout>
      {isLoading && (
        <div className={styles.loaderOverlay}>
          <div className={styles.loader}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  fill="#000000"
                  d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
                ></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  fill="#000000"
                  d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
                ></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path
                  fill="#000000"
                  d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      )}
      <div className={`${isLoading ? styles.blurred : ""}`}>
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
              </>
            }
          />
          <Route path="viewProduct" element={<Viewedproduct />} />
        </Routes>
      </div>
    </Layout>
  );
};
