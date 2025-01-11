import { useCart } from "../../lib/usecart";
import styles from "./viewProduct.module.css";
export const Modal = () => {
  const { selectedItem, showModal, recentlyFeaturedData } = useCart();

  if (!showModal || !selectedItem) return null;
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        {recentlyFeaturedData.map((item) => {
          return (
            <>
              <div className={styles.box}>
                <img src={item.images[0]} className={styles.boxImage} />
              </div>
            </>
          );
        })}
      </div>

      <div className={styles.productDiv}>
        <h2 className={styles.Title}>{selectedItem.title}</h2>
        <div className={styles.productDetailDiv}>
          <img src={selectedItem.images[0]} className={styles.mainImage} />
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

            <div className={styles.Category}>
              <h4>Category</h4>
              <p className={styles.categoryName}>
                {selectedItem.category.name || "Electronics"}
              </p>
              <p>Category ID: {selectedItem.category.id || "12345"}</p>
            </div>

            <div className={styles.addToCart}>
              <div className={styles.quantityControl}>
                <button className={styles.decreaseBtn}>-</button>
                <span className={styles.quantity}>1</span>
                <button className={styles.increaseBtn}>+</button>
              </div>
              <button className={styles.cartButton}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
