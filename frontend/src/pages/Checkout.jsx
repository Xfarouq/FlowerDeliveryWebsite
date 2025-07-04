const Checkout = () => {
  return (
    <section className="checkout">
      <div className="left">
        <div className="content">
          <div className="prod">
            <img src="/images/checkout.png" alt="Flower" />
            <div className="text">
              <div className="snow">
                <h4>Snowfall</h4>
                <p>Quantity(1)</p>
              </div>
              <p>$100</p>
            </div>
          </div>
          <div className="sub">
            <p>Subtotal</p>
            <p>$100.00</p>
          </div>
          <div className="sub">
            <p>Shipping</p>
            <p>Calculated at next step</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>$100.00</p>
          </div>
          <button>CONTINUE TO PAYMENT</button>
          <h4>
            Secure Checkout <img src="/images/lock.svg" alt="Lock" />
          </h4>
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
};

export default Checkout;
