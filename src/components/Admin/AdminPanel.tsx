import { useState } from "react";
import styles from "./adminpanel.module.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: File[];
  quantity: number;
}

const AdminPanel = () => {
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    description: "",
    price: 0,
    images: [],
    quantity: 0,
  });

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
        console.log("Product added successfully!", data);
      } else {
        console.log("Error adding product:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Post deetz</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="Product ID"
          className={styles.input}
        />
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Product Title"
          className={styles.input}
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          className={styles.textarea}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price(NGN)"
          className={styles.input}
        />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Product Quantity"
          className={styles.input}
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className={styles.fileInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
