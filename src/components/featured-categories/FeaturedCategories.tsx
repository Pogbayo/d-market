import { useCart } from "../../lib/usecart";
import { FeaturedBox } from "./box/FeaturedBox";
import styles from "./featuredCategories.module.css";
export const FeaturedCategories = () => {
  const { fetchedData } = useCart();
  return (
    <div className={styles.container}>
      <FeaturedBox data={fetchedData} />
    </div>
  );
};
