const Menu = () => {
  return (
    <div className="menu">
      <img className="bg" src="./images/menu.png" alt="Menu" />
      <div className="right">
        <div className="upper">
          <p>Shopping Cart</p>
          <img src="./images/close.png" alt="Close" />
        </div>
        <div className="prod">
          <img src="/images/menu1.png" alt="Flower" />
          <div className="text">
            <div className="snow">
              <h4>Rosy Delight</h4>
              <p>Quantity(1)</p>
              <h4>$100</h4>
            </div>
            <p>Remove</p>
          </div>
        </div>
        <div className="sub">
          <p>Subtotal</p>
          <p>$100.00</p>
        </div>
        <div className="gift">
          <textarea placeholder="Gift Message"></textarea>
        </div>
        <div className="ship">
          <h3>
            Shipping & taxes calculated at checkout Free standard shipping
            within Kyiv
          </h3>
        </div>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
};

export default Menu;
