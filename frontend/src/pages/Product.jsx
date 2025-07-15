import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ⬅️ to get flower ID from the URL

const Product = () => {
  const { id } = useParams(); // ⬅️ URL param: /product/:id
  const [flower, setFlower] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // 🔁 Fetch flower details from DB
  useEffect(() => {
    const fetchFlower = async () => {
      try {
        const res = await fetch(`https://flowerdeliveryweb-backend.onrender.com/api/flowers/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch flower");

        setFlower(data);
      } catch (err) {
        console.error("Error fetching flower:", err);
      }
    };

    fetchFlower();
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    const product = {
      productId: flower._id,
      name: flower.name,
      price: flower.price,
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

  // ⏳ Loading state
  if (!flower) {
    return <p>Loading product...</p>;
  }

  return (
    <section className="product">
      <div className="top">
        <div className="top-bg">
          <img src={`/uploads/${flower.image}`} alt={flower.name} />
        </div>
        <div className="right">
          <p>
            Fresh Flowers <span>/ {flower.name}</span>
          </p>
          <h2>{flower.name} - ${flower.price}</h2>
          <p>{flower.description}</p>
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

      <div className="perf">{/* Add recommendations here */}</div>
    </section>
  );
};

export default Product;
