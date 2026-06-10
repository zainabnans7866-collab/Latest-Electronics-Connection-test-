function Products() {
  const products = [
    {
      name: "iPhone 16",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
      name: "Gaming Laptop",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
      name: "Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      name: "Smart Watch",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    }
  ];

  return (
    <section className="section">
      <h2>Featured Products</h2>

      <div className="grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;