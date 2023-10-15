export default function ProductCard({ children }) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-left">
            <h3>Raincoat</h3>
            <h1>Spring Sale Offer</h1>
            <div className="card-left-img">
              <img src="images/coat.png" alt="coat" />
            </div>
          </div>
          <div className="card-right">
            <div className="product-info">
              <div className="color">
                <p>Color</p>
                <div className="colors">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="size">
                <p>Size</p>
                <div className="sizes">
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                </div>
              </div>
              <div className="details">
                <div className="sleeve">
                  <p>Sleeve length</p>
                  <p>66 cm</p>
                </div>
                <div className="sleeve-counter counter"></div>
                <div className="chest">
                  <p>Chest</p>
                  <p>102 cm</p>
                </div>
                <div className="chest-counter counter"></div>
              </div>
              <button className="card-btn" type="button">
                Proceed
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
