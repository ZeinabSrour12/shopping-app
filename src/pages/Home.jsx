import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-text">

          <h1>
            Welcome to Our Shopping App 🛒
          </h1>

          <p>
            Discover amazing products with the best prices.
            Shop easily and add your favorite items to your cart.
          </p>

          <Link to="/products">
            <button>
              View Products
            </button>
          </Link>

        </div>


        <div className="hero-image">

          <img 
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="shopping"
          />

        </div>

      </section>


      <section className="features">

        <div>
          <h3>🚚 Fast Delivery</h3>
          <p>Receive your products quickly.</p>
        </div>

        <div>
          <h3>⭐ Quality Products</h3>
          <p>Choose from many products.</p>
        </div>

        <div>
          <h3>🛒 Easy Shopping</h3>
          <p>Add products and manage your cart.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;