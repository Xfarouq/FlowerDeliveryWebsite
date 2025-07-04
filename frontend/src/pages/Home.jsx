import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homepage">
      <div className="hero">
        <div className="left">
          <div className="row1">
            <div className="header-text">
              <h1>Kyiv LuxeBouquets</h1>
              <img src="/images/r.png" alt="R Icon" />
            </div>
            <p>
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="row2">
            <img src="/images/img hero.png" alt="Hero" />
            <p>
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-mid">
            <div className="box1">
              <h2>Fresh Flowers</h2>
              <button>
                <Link to="/">
                  Shop now{" "}
                  <img src="/images/arrow-right.png" alt="Arrow-Right" />
                </Link>
              </button>
            </div>
            <div className="box2">
              <img src="/images/card item1.png" alt="Flower" />
            </div>
            <div className="box1">
              <h2>Live Plants</h2>
              <button>
                <Link to="/">
                  Shop now{" "}
                  <img src="/images/arrow-right.png" alt="Arrow-Right" />
                </Link>
              </button>
            </div>
            <div className="box2">
              <img src="/images/card item3.png" alt="Flower" />
            </div>
            <div className="box1">
              <h2>Fresheners</h2>
              <button>
                <Link to="/">
                  Shop now{" "}
                  <img src="/images/arrow-right.png" alt="Arrow-Right" />
                </Link>
              </button>
            </div>
          </div>
          <div className="right-end">
            <div className="box2">
              <img src="/images/card item.png" alt="Flower" />
            </div>
            <div className="box1">
              <h2>Dried Flowers</h2>
              <button>
                <Link to="/">
                  <img src="/images/arrow-left.png" alt="Arrow-Left" />
                  Shop now
                </Link>
              </button>
            </div>
            <div className="box2">
              <img src="/images/card item2.png" alt="Flower" />
            </div>
            <div className="box1">
              <h2>Aroma Candels</h2>
              <button>
                <Link to="/">
                  <img src="/images/arrow-left.png" alt="Arrow-Left" />
                  Shop now
                </Link>
              </button>
            </div>
            <div className="box2">
              <img src="/images/card item4.png" alt="Flower" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>About us</h1>
        <div className="right">
          <p>OUR STORY</p>
          <h2>Kyiv LuxeBouquets</h2>
          <p>
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
          <button>
            <Link to="/">LEARN MORE</Link>
          </button>
        </div>
      </div>
      <div className="why-us">
        <h1>Why choose us ?</h1>
        <div className="right">
          <div className="block">
            <h2>Stylish bouquets by florists</h2>
            <p>
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>
          <div className="block">
            <h2>On-time delivery</h2>
            <p>
              Never miss a moment with our on-time flower delivery service. Our
              couriers will deliver your bouquet personally, without boxes, to
              ensure it arrives in perfect condition. Trust us to deliver your
              thoughtful gift reliably.
            </p>
          </div>
          <div className="block">
            <h2>Safe payment</h2>
            <p>
              You can feel secure when placing an order with us, as we use
              industry-standard security measures to protect your payment
              information. Your transaction will be safe and hassle-free, so you
              can shop with confidence.
            </p>
          </div>
          <div className="block">
            <h2>Subscription by your needs</h2>
            <p>
              With our subscription service tailored to your specific needs, you
              can enjoy the convenience of having beautiful bouquets delivered
              straight to your door at regular intervals. Our flexible service
              is perfect for busy individuals or those who want to ensure they
              always have fresh flowers on hand. You'll save time and money with
              this hassle-free solution to your floral needs.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="left">
          <div className="top">
            <h1>To Contact Us</h1>
            <p>We will call you back</p>
            <div className="buttons">
              <button className="textarea">+380 XX XXX XX XX</button>
              <button>BOOK A CALL</button>
            </div>
          </div>
          <div className="bottom">
            <div className="bt1">
              <h3>Phone</h3>
              <p>
                <img src="/images/phone.png" alt="Phone" />
                +380980099777
              </p>
              <p>
                <img src="/images/phone.png" alt="Phone" />
                +380980099777
              </p>
            </div>
            <div className="bt1">
              <h3>Address</h3>
              <p>opening hours: 8 to 11 p.m.</p>
              <p>
                <img src="/images/location.png" alt="Location" />
                15/4 Khreshchatyk Street, Kyiv{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/images/Right colum.png" alt="Bouquet" />
          <div className="social">
            <h2>Follow us</h2>
            <div className="socials">
              <img src="/images/Instagram.svg" alt="Instagram" />
              <img src="/images/Pinterest.svg" alt="Pinterest" />
              <img src="/images/Facebook.svg" alt="Facebook" />
              <img src="/images/Twitter.svg" alt="Twitter" />
              <img src="/images/Telegram.svg" alt="Telegram" />
            </div>
          </div>
        </div>
      </div>
      <div className="service">
        <h1>Our Service</h1>
        <div className="content">
          <img src="/images/image.png" alt="Person" />
          <div className="text">
            <p>SERVICE</p>
            <h2>Flower Subcriptions</h2>
            <p>
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
            <button>SUBSCRIBE NOW</button>
          </div>
        </div>
        <div className="background">
          <img src="/images/bg.png" alt="Background" />
          <p>SERVICE</p>
          <h3>Wedding & Event Decor</h3>
          <p>
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </p>
          <button>INQUIRE NOW</button>
        </div>
      </div>
      <div className="reviews">
        <img src="/images/google.png" alt="Google" />
        <p>REVIEWS</p>
        <h2>Our Clients say</h2>
        <i>
          “Ordered flowers online and they were the best bouquet! Impressed
          everyone around. Highly recommend this flower shop!”
        </i>
        <p>– Ronald Richards</p>
        <button>READ REVIEWS</button>
      </div>
    </section>
  );
};

export default Home;
