import styles from "./svg.module.css";
export const SvgLoader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#000000"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#000000"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#000000"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>{" "}
      </div>
    </div>
  );
};
