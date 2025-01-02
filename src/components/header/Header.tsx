import { LuGift } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <div>
      <div className={styles.oga}>
        <header className={styles.header}>
          <div className={styles.upperDiv}>
            <h2 className={styles.logo}>Dark</h2>
            <div className={styles.catSearchDiv}>
              <div className={styles.categoriesDiv}>
                <GiHamburgerMenu size={25} /> <small>categories</small>
              </div>
              <div className={styles.searchDiv}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search for anything"
                />
                <span className={styles.searchIcon}></span>
              </div>
            </div>
            <div className={styles.iconsDiv}>
              <p>Sign in</p>
              <MdFavoriteBorder size={30} />
              <LuGift size={30} />
              <FaOpencart size={30} />
            </div>
          </div>
          <div className={styles.lowerDiv}>
            <span>
              <LuGift />
              <small>Gifts</small>
            </span>
            <span>
              <small>Home improvement Ideas</small>
            </span>
            <span>
              <small>Home Favorites</small>
            </span>
            <span>
              <small>Fashion Finds</small>
            </span>
            <span>
              <small>Registry</small>
            </span>
          </div>
        </header>
      </div>
    </div>
  );
};
