function Products() {
  let products = [
    "iPhone 15",
    "Samsung Galaxy S21",
    "Google Pixel 6",
    "OnePlus 9",
    "Xiaomi Mi 11",
  ];

  return (
    <div className="p-5">
      <h2 className="mb-4 text-success">Products List</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item list-group-item-secondary">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
