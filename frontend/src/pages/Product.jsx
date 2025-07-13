import React, { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    const product = {
      productId: "rosy-delight",
      name: "Rosy Delight",
      price: 100,
      quantity: quantity,
    };

    try {
      const res = await fetch("https://flowerdeliverywebsitee-backend.onrender.com/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      console.log("Cart Add Response:", data);

      if (!res.ok) {
        alert(data.message || "Failed to add to cart.");
        return;
      }

      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="product">
      <div className="top">
        <div className="top-bg">
          <img src="/images/pro.jpg" alt="Flower" />
        </div>
        <div className="right">
          <p>
            Fresh Flowers <span>/ Rosy Delight</span>
          </p>
          <h2>Rosy Delight - $100</h2>
          <p>
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance.
          </p>
          <div className="quantity">
            <p>Quantity</p>
            <div className="add">
              <img src="/images/minus.svg" alt="-" onClick={decreaseQty} />
              <p>{quantity}</p>
              <img src="/images/plus.svg" alt="+" onClick={increaseQty} />
            </div>
          </div>
          <button onClick={handleAddToCart}>ADD TO BASKET</button>
        </div>
      </div>

      <div className="like">
        <h1>You may also like…</h1>
      </div>

      <div className="perf">{/* Product cards */}</div>
    </section>
  );
};

export default Product;
