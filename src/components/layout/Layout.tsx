import { ReactNode } from "react";
import styles from "./layout.module.css";
import { LuGift } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className={styles.oga}>
        <header className={styles.header}>
          <div className={styles.upperDiv}>
            <h2 className={styles.logo}>Dark</h2>

            <div className={styles.catSearchDiv}>
              <div className={styles.categoriesDiv}>
                {" "}
                <GiHamburgerMenu size={30} /> <small>categories</small>
              </div>
              <div className={styles.searchDiv}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search for anything"
                />
                <span className={styles.searchIcon}>
                  {/* <IoSearch size={30} /> */}
                </span>
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
      <main>{children} </main>

      <footer style={{ color: "black" }}>
        <div>
          <p>
            Yes! Send me rxclusive offers,unique gift ideas, and personalized
            tips for shopping and selling on Dark.
          </p>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div>
          <div>
            <img src="/public/images/brandLogo.png" alt="" />
            <p>Dark is powered by 100% renewable electricity.</p>
          </div>
        </div>
        <div>
          <section></section>
          <section></section>
        </div>
        <div>
          <ul>
            <li>Nigeria</li>
            <span></span>
            <li>English (US)</li>
            <span></span>
            <li>₦ (NGN)</li>
          </ul>
          <p>© 2025 Etsy, Inc. Te </p>
        </div>
      </footer>
    </div>
  );
};
