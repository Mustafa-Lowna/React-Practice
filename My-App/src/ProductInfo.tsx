import "./ProductInfo.css";

function ProductInfo() {
  let product = {
    name: "iPhone 17 Pro Max",
    price: 1299,
    color: "Silver",
    description:
      "The iPhone 17 Pro Max is Apple's most advanced smartphone, featuring a 6.9-inch Super Retina XDR display, A19 Pro chip, and a powerful camera system with 48MP triple cameras",
  };
  return (
    <div className="card shadow-sm m-3 card-size">
      <img
        className="card-img-top"
        src="https://gulfstore.com/cdn/shop/files/iphone_17_pro_max_white-1_3_1.webp?v=1758802027&width=1500"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title text-dark fw-bold">{product.name}</h5>
        <h6 className="card-subtitle mb-1 text-danger fw-bold">
          Price: ${product.price}
        </h6>
        <div className="mb-2">
          <span className="badge bg-dark">{product.color}</span>
        </div>
        <p className="card-text text-muted">{product.description}</p>
        <a href="#" className="btn btn-dark w-100">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default ProductInfo;
