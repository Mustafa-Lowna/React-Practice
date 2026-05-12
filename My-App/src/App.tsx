import ProductsInfo from "./ProductInfo";
import ProductsObjects from "./ProductsObjects";
function App() {
  return (
    <div>
      <h1 className="m-3 mt-5 text-center text-white bg-dark">
        My Products App
      </h1>
      <ProductsObjects></ProductsObjects>
      <ProductsInfo></ProductsInfo>
    </div>
  );
}

export default App;
