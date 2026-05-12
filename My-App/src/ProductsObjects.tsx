function ProductsObjects() {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: 1099,
      description: "Fast A16 chip, excellent camera, and long battery life.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 999,
      description: "Bright OLED screen and smooth performance.",
    },
    {
      id: 3,
      name: "Google Pixel 7",
      price: 599,
      description: "Great camera and clean Android experience.",
    },
    {
      id: 4,
      name: "OnePlus 11",
      price: 699,
      description: "Quick charging and snappy software.",
    },
    {
      id: 5,
      name: "Xiaomi 13",
      price: 749,
      description: "Strong performance with a sharp display.",
    },
  ];

  return (
    <div className="p-5">
      <h2 className="mb-4 text-dark">Products List</h2>
      <ul className="list-group shadow-sm">
        {products.map((product) => (
          <li key={product.id} className="list-group-item p-3 shadow">
            <h5 className="fw-bold text-success">{product.name}</h5>
            <h6 className="text-danger fw-bold mb-2">
              Price: ${product.price}
            </h6>
            <div className="text-dark">{product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsObjects;
