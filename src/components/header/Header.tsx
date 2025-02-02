import { useState, useEffect } from "react";
import { LuGift } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import styles from "./header.module.css";
import { useCart } from "../../lib/usecart";
import { useLocation, useNavigate } from "react-router-dom";
// import { SvgLoader } from "../svg-loader/SvgLoader";

export const Header = () => {
  const { searchQuery, setSearchQuery, fetchedData, cartCount, setIsLoading } =
    useCart();
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const filteredData = fetchedData?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const token = localStorage.getItem("token");

  const handleClickOutside = (event: MouseEvent) => {
    if (
      event.target &&
      !(event.target as Element).closest(`.${styles.searchDiv}`) &&
      event.target &&
      !(event.target as Element).closest(`.${styles.resultsBox}`)
    ) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchQuery]);

  const location = useLocation();
  if (location.pathname === "/sign-up" || location.pathname === "/sign-in") {
    return null;
  }

  const handleLoadingEffect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("cartlist");
    }, 2000);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    console.log("successful logout");
    navigate("/sign-in");
  };

  return (
    <div>
      <div className={styles.oga}>
        <header className={styles.header}>
          <div className={styles.upperDiv}>
            <h2 className={styles.logo} onClick={() => navigate("/")}>
              Lore{" "}
            </h2>
            <div className={styles.catSearchDiv}>
              <div className={styles.categoriesDiv}>
                <GiHamburgerMenu size={25} />{" "}
                <small style={{ fontWeight: 100, fontSize: 14 }}>
                  categories
                </small>
              </div>
              <div className={styles.searchDiv}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className={styles.searchIcon}></span>

                {showResults &&
                  searchQuery &&
                  (filteredData ?? []).length > 0 && (
                    <div className={styles.resultsBox}>
                      {filteredData?.map((item) => (
                        <div key={item.id} className={styles.resultItem}>
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                {showResults &&
                  searchQuery &&
                  (filteredData ?? []).length === 0 && (
                    <div className={styles.resultsBox}>
                      <p className={styles.noResults}>No results found</p>
                    </div>
                  )}
              </div>
            </div>
            <div className={styles.iconsDiv}>
              <p
                style={{ fontWeight: 100, fontSize: 14, cursor: "pointer" }}
                onClick={handleLogOut}
              >
                {token ? "Log Out" : ""}
              </p>
              <MdFavoriteBorder size={30} />
              <LuGift size={30} />
              <div style={{ position: "relative" }}>
                <FaOpencart size={30} onClick={handleLoadingEffect} />
                <span className={styles.cartCount}>{cartCount}</span>
              </div>
            </div>
          </div>
          <div className={styles.lowerDiv}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                justifyContent: "center",
              }}
            >
              <LuGift size={20} />
              <small>Gifts</small>
            </span>
            <span>
              <small style={{ fontWeight: 100, fontSize: 14 }}>
                Home improvement Ideas
              </small>
            </span>
            <span>
              <small style={{ fontWeight: 100, fontSize: 14 }}>
                Home Favorites
              </small>
            </span>
            <span>
              <small style={{ fontWeight: 100, fontSize: 14 }}>
                Fashion Finds
              </small>
            </span>
            <span>
              <small style={{ fontWeight: 100, fontSize: 14 }}>Registry</small>
            </span>
          </div>
        </header>
      </div>
    </div>
  );
};
