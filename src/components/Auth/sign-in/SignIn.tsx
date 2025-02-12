import { useState } from "react";
import styles from "./signIn.module.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://backend-3zc2.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("User successfully logged in");
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAdmin", JSON.stringify(data.isAdmin));
        setFormData({ email: "", password: "" });
        setError("");
      } else {
        console.error("Error", data.error);
        setError(data.error || "An unexpected error occurred.");
      }

      if (data.token) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };
  setTimeout(() => {
    setError("");
  }, 7000);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="type in your email..."
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="enter password..."
            className={styles.input}
            required
          />
          {isLoading ? (
            <div className={styles.spinner}></div>
          ) : (
            <button className={styles.button} type="submit">
              Sign In
            </button>
          )}
        </form>
        <div style={{ display: "flex", gap: 15 }} className={styles.downPanel}>
          <span style={{ color: "black", fontSize: 15 }}>
            Don't have an account?
          </span>
          <span
            style={{ color: "rgb(16, 137, 211)", cursor: "Pointer" }}
            onClick={() => navigate("/sign-up")}
          >
            Register
          </span>
          <span className={styles.goHome}>
            <FaHome size={25} onClick={() => navigate("/")} />
          </span>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};
