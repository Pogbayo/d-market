import { useCart } from "../../lib/usecart";
import styles from "./viewProduct.module.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { AmazingDeals } from "../amazing-deals/AmazingDeals";
import { Editor } from "../Editor/Editor";
import { Suggestion } from "../suggestion/Suggestion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Viewedproduct = () => {
  const { selectedItem, showModal, recentlyFeaturedData, openModal } =
    useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedItem) {
      navigate("/");
    }
  }, [selectedItem, navigate]);

  if (!showModal || !selectedItem) return null;

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        {recentlyFeaturedData.map((item) => (
          <div className={styles.box} key={item.id}>
            <img
              src={item.images[0]}
              className={styles.boxImage}
              onClick={() => openModal(item)}
            />
          </div>
        ))}
      </div>

      <div className={styles.productDiv}>
        <h2 className={styles.Title}>{selectedItem.title}</h2>
        <div className={styles.productDetailDiv}>
          <div className={styles.mainImageContainer}>
            <GrFormPrevious
              size={50}
              className={`${styles.logo} ${styles.prevLogo}`}
            />
            <img src={selectedItem.images[0]} className={styles.mainImage} />
            <MdNavigateNext
              size={50}
              className={`${styles.logo} ${styles.nextLogo}`}
            />
          </div>

          <div className={styles.categoryDiv}>
            <h3 className={styles.productTitle}>{selectedItem.title}</h3>
            <p className={styles.Description}>
              {selectedItem.description ||
                "This is a premium quality product that meets your needs."}
            </p>
            <div className={styles.Price}>
              Price: <span>USD {selectedItem.price || "99.99"}</span>
            </div>

            <div className={styles.features}>
              <h4>Features</h4>
              <ul>
                <li>High-quality material</li>
                <li>Available in multiple sizes</li>
                <li>Eco-friendly packaging</li>
              </ul>
            </div>

            <div className={styles.addToCart}>
              <div className={styles.quantityControl}>
                <button className={styles.decreaseBtn}>-</button>
                <span className={styles.quantity}>0</span>
                <button className={styles.increaseBtn}>+</button>
              </div>
              <button className={styles.cartButton}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <AmazingDeals />
      <Editor />
      <Suggestion />
    </div>
  );
};
