import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
// import styles from "./home.module.css";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Modal } from "../Modal/ViewProduct";

export const Home = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path={"/"}
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
          <Route path={"viewProduct"} element={<Modal />} />
        </Routes>
      </Layout>
    </Router>
  );
};
