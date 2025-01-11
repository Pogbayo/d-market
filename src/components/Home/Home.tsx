import { Board } from "../board/Board";
import { Discover } from "../discover/Discover";
import { Layout } from "../layout/Layout";
import RCV from "../recently-viewed/RCV";
import { RecentlyViewedTwo } from "../recentlyViewedTwo/RecentlyViewedTwo";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { FeaturedCategories } from "../featured-categories/FeaturedCategories";
import { Editor } from "../Editor/Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Modal } from "../Modal/ViewProduct";

export const Home = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <>
                <Board />
                <RCV />
                <Discover />
                <RecentlyViewedTwo />
                <AmazingDeals />
                <Editor />
                <FeaturedCategories />
              </>
            </Layout>
          }
        />
        {/* Route without Layout */}
        <Route path="viewProduct" element={<Modal />} />
      </Routes>
    </Router>
  );
};
