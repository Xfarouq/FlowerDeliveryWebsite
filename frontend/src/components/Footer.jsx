const Footer = () => {
  return (
    <section className="footer">
      <div className="foot reminder">
        <p>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address.
        </p>
        <div className="reminder-input">
          <input type="email" placeholder="Your Email" />
          <button>REMIND</button>
        </div>
      </div>

      <div className="foot contact">
        <h3>Contact Us</h3>
        <p>Address</p>
        <h4>15/4 Khreshchatyk Street, Kyiv</h4>
        <p>Phone</p>
        <h4>+380980099777</h4>
        <p>General Enquiry</p>
        <h4>Kiev.Florist.Studio@gmail.com</h4>
        <p>Follow Us</p>
        <div className="socials">
          <img src="/images/Instagram.svg" alt="Instagram" />
          <img src="/images/Pinterest.svg" alt="Pinterest" />
          <img src="/images/Facebook.svg" alt="Facebook" />
          <img src="/images/Twitter.svg" alt="Twitter" />
          <img src="/images/Telegram.svg" alt="Telegram" />
        </div>
      </div>

      <div className="foot shop">
        <h3>Shop</h3>
        <p>All Products</p>
        <p>Fresh Flowers</p>
        <p>Dried Flowers</p>
        <p>Live Plants</p>
        <p>Designer Vases</p>
        <p>Aroma Candles</p>
        <p>Freshener Diffuser</p>
        <h4>Service</h4>
        <p>Flower Subscription</p>
        <p>Wedding & Event Decor</p>
      </div>

      <div className="foot about">
        <h3>About Us</h3>
        <p>Our Story</p>
        <p>Blog</p>
        <p>Shipping & Returns</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </section>
  );
};

export default Footer;
