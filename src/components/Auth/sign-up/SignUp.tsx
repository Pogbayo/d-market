import React, { useState } from "react";
import styles from "./signUp.module.css";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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
        "https://backend-3zc2.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, isAdmin: false }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("signUpToken", data.token);
        localStorage.setItem("isAdmin", JSON.stringify(data.isAdmin));

        console.log(data.isAdmin);
        setFormData({ name: "", email: "", password: "" });
        navigate("/sign-in");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Register</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isLoading ? (
            <div className={styles.spinner}></div>
          ) : (
            <button className={styles.button} type="submit">
              Sign up
            </button>
          )}

          <div style={{ display: "flex", gap: 15 }}>
            <span style={{ color: "black", fontSize: 15 }}>
              Already have an account?
            </span>
            <span
              style={{ color: "rgb(16, 137, 211)", cursor: "Pointer" }}
              onClick={() => navigate("/sign-in")}
            >
              {" "}
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
