import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RjNPEQAPAm1BNM2Z7kUGbokyDaOwqGrkCTI6Nj9DFTnK5x0JdKkMudXyqdrUqgnZlO3NiDkbF130gvcd2qUTjth00Z1paMHwK");

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:4000/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch cart.");
        }

        const items = Array.isArray(data.items) ? data.items : [];
        setCartItems(items);
      } catch (err) {
        console.error("Cart fetch error:", err.message);
        alert("Error loading cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    console.log("📦 Sending cartItems to backend:", cartItems);

    try {
      const res = await fetch("http://localhost:4000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (!res.ok || !data.id) {
        throw new Error(data.message || "Stripe session creation failed.");
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error("❌ Checkout error:", err.message);
      alert("Payment initiation failed.");
    }
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);
    return acc + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);

  return (
    <section className="checkout">
      <div className="left">
        <h2>Checkout</h2>
        {loading ? (
          <p>Loading cart...</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="prod">
                <p>{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>${item.price}</p>
              </div>
            ))}
            <div className="total">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button onClick={handleCheckout}>Continue to Payment</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Checkout;
