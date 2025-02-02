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
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

export const Home = () => {
  const { isLoading } = useCart();
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // if (!token) {
  //   navigate("/sign-in");
  // }
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: { exp: number } = jwtDecode(token);
        const timeToExpire = decoded.exp * 1000 - Date.now();
        if (timeToExpire > 0) {
          const logOutTimer = setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/sign-in");
          }, timeToExpire);
          return () => clearTimeout(logOutTimer);
        } else {
          localStorage.removeItem("token");
          navigate("/sign-in");
        }
      } catch (error) {
        console.log("Invalid token", error);
        localStorage.removeItem("token");
        navigate("/sign-in");
      }
    }
  }, [navigate]);
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
