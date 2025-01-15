import { useNavigate } from "react-router-dom";
import styles from "./welcome.module.css";
import { useEffect } from "react";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.welcomePage}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>Lore</div>
      </div>
      <p className={styles.welcomeMessage}>Welcome to our website!</p>
    </div>
  );
};
