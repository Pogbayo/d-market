import styles from "./footer.module.css";
import { AiOutlineGlobal } from "react-icons/ai";

export const Footer = () => {
  return (
    <div>
      <footer style={{ color: "black" }}>
        <div className={styles.firstDiv}>
          <p>
            Yes! Send me exclusive offers,unique gift ideas, and personalized
            tips for shopping and selling on Dark.
          </p>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your email address" />
            <button className={styles.footerSubscribeButton}>Subscribe</button>
          </div>
        </div>

        <div className={styles.secondDiv}>
          <AiOutlineGlobal size={40} color="white" />
          <p>Dark is powered by 100% renewable electricity.</p>
        </div>

        <div className={styles.thirdDiv}>
          <section className={styles.sectionOne}>
            <button className={styles.btnOne}>Dark</button>
            <button className={styles.btnTwo}>Download the Dark App</button>
          </section>
          <section className={styles.sectionTwo}>
            <div>
              <p>Shop</p>
              <ul>
                <li>GIft cards</li>
                <li>Dark Registry</li>
                <li>Sitemap</li>
                <li>Dark blog</li>
                <li>Dark United Kingdom</li>
                <li>Dark Germany</li>
                <li>Dark Canada </li>
              </ul>
            </div>
            <div>
              <p>Sell</p>
              <ul>
                <li>Sell on Dark</li>
                <li>Teams</li>
                <li>Forums</li>
                <li>Affiliates and creators</li>
              </ul>
            </div>
            <div>
              <p>About</p>
              <ul>
                <li>Dark, inc</li>
                <li>Policies</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Impact</li>
                <li>Legal imprint</li>
              </ul>
            </div>
            <div>
              <p>Help</p>
              <ul>
                <li>Help center</li>
                <li> Privacy center</li>
              </ul>
            </div>
          </section>
        </div>

        <div className={styles.fourthDiv}>
          <ul>
            <li>Nigeria</li>
            <span></span>
            <li>English (US)</li>
            <span></span>
            <li>₦ (NGN)</li>
          </ul>
          <p>© 2025 Dark, Inc. Te </p>
          <span>
            <ul>
              <li>Terms of use</li>
              <li>Privacy</li>
              <li>Interest-based-ads</li>
              <li>Local shops</li>
              <li>Regions</li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};
