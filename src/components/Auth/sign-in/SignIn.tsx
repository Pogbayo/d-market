import { useState } from "react";
import styles from "./signIn.module.css";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
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
        localStorage.setItem("isAdmin", JSON.stringify(data.isAdmin)); // Store admin status
        console.log(data.isAdmin);
        setFormData({ email: "", password: "" });
      } else {
        console.error("Error", data.error);
      }
      if (data.token) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

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
            placeholder="Type in your email..."
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password..."
            className={styles.input}
            required
          />
          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>
        <div style={{ display: "flex", gap: 15 }}>
          <span style={{ color: "black", fontSize: 15 }}>
            Don't have an account?
          </span>
          <span
            style={{ color: "rgb(16, 137, 211)", cursor: "Pointer" }}
            onClick={() => navigate("/sign-up")}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};
