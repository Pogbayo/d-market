import { useState, useEffect } from "react";
import styles from "./adminpanel.module.css";
import { useCart } from "../../lib/usecart";
// import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: File[];
  quantity: number;
}

// interface DecodedToken {
//   id: string;
//   isAdmin: boolean;
// }

const AdminPanel = () => {
  const { items } = useCart();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("Token is", token);

  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
    images: [],
    quantity: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setProduct((prevProduct) => ({
        ...prevProduct,
        images: files,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setIsSuccess(false); // Reset success state

    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price.toString());
    formData.append("quantity", product.quantity.toString());

    product.images.forEach((file: File) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.log("Error adding product:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  // Automatically hide success message after 2 seconds
  useEffect(() => {
    // if (token) {
    //   const decodedToken: DecodedToken = jwtDecode(token);
    //   if (!decodedToken.isAdmin) {
    //     navigate("/home");
    //   }
    // }

    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate, token]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Post Product</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="ID"
          className={styles.input}
        />
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder=" name"
          className={styles.input}
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder=" Description"
          className={styles.textarea}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder=" Price(NGN)"
          className={styles.input}
        />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder=" Quantity"
          className={styles.input}
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className={styles.fileInput}
        />{" "}
        <div>
          {items?.map((i) => {
            return (
              <div>
                <p>{i.category.id}</p>
                <p>{i.price}</p>
                hello
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {isSuccess && (
        <div className={styles.successMessage}>
          <div className={styles.checkmark}></div>
          <p>Product added successfully!</p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
