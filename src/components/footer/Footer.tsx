import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import styles from "./footer.module.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";

export const Footer = () => {
  const location = useLocation(); // Get the current location

  const textarray = [
    {
      title: "A community doing good",
      text: "Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.",
    },
    {
      title: "Support independent creators",
      text: "There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.",
    },
    {
      title: "Peace of mind",
      text: "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
    },
  ];

  return (
    <div>
      {location.pathname === "/home" && (
        <div className={styles.yellowBackground}>
          <p className={styles.mainQstn}>What is Dark</p>
          <a href="" className={styles.link}>
            Read our wonderfully weird story
          </a>
          <div className={styles.boxDiv}>
            {textarray.map((item) => (
              <div className={styles.box} key={item.title}>
                <h3 className={styles.boxTitle}>{item.title}</h3>
                <p className={styles.boxText}>{item.text}</p>
              </div>
            ))}
          </div>
          <h3 className={styles.qstn}>
            Have a question? Well, we’ve got some answers.
          </h3>
          <button className={styles.yellowBackgroundButton}>
            Got to Help Center
          </button>
        </div>
      )}

      <div style={{ color: "black" }} className={styles.footer}>
        <div className={styles.firstDiv}>
          <p>
            Yes! Send me exclusive offers, unique gift ideas, and personalized
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
                <li>Gift cards</li>
                <li>Dark Registry</li>
                <li>Sitemap</li>
                <li>Dark blog</li>
                <li>Dark United Kingdom</li>
                <li>Dark Germany</li>
                <li>Dark Canada</li>
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
                <li>Privacy center</li>
              </ul>
            </div>
          </section>
        </div>

        <div className={styles.fourthDiv}>
          <ul>
            <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <BsGlobeAmericas />
              <span>Nigeria</span>
            </li>
            <li>English (US)</li>
            <li>₦ (NGN)</li>
          </ul>

          <section className={styles.spanTwo}>
            <p>© 2025 Dark, Inc. Te</p>
            <ul>
              <li>Terms of use</li>
              <li>Privacy</li>
              <li>Interest-based-ads</li>
              <li>Local shops</li>
              <li>Regions</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
