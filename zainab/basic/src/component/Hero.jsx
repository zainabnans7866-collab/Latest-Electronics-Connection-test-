function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Latest Electronics Collection</h1>

        <p>
          Discover premium gadgets, laptops, smartphones
          and accessories at unbeatable prices.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
          alt="Phone"
        />
      </div>
    </section>
  );
}

export default Hero;