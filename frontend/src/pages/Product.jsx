const Product = () => {
  return (
    <section className="product">
      <div className="top">
        <img src="/images/pro.jpg" alt="Flower" />
        <div className="right">
          <p>Fresh Flowers / Rosy Delight</p>
          <h2>Rosy Delight - $100</h2>
          <p>
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance. The bouquet is
            accompanied by seasonal foliage which will enhance these sublime
            flowers even
          </p>
          <div className="quantity">
            <p>Quantity</p>
            <div className="add">
                <img src="/images/minus.svg" alt="Minus Sign" />
                <p>1</p>
                <img src="/images/plus.svg" alt="Plus Sign" />
            </div>
          </div>
          <button>ADD TO BASKET</button>
        </div>
      </div>
      <div className="like">
        <h1>You may also like…</h1>
      </div>
      <div className="perf">
        <div className="card">
            <img src="/images/prod1.png" alt="Perfume" />
            <h4>Rattan Grapefruit</h4>
            <p>price $48</p>
        </div>
        <div className="card">
            <img src="/images/prod2.png" alt="Perfume" />
            <h4>Lime & Matcha</h4>
            <p>price $48</p>
        </div>
        <div className="card">
            <img src="/images/prod3.png" alt="Perfume" />
            <h4>Cedar & Lavender</h4>
            <p>price $48</p>
        </div>
        <div className="card">
            <img src="/images/prod4.png" alt="Perfume" />
            <h4>Ocean Mist</h4>
            <p>price $48</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
