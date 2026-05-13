import ProductListA from "./ProductListA";
import ProductListB from "./ProductListB";

function App() {
  return (
    <div>
      <h2 className="m-3 mt-5 text-center text-white bg-dark p-2 rounded">
        My Products App
      </h2>
      <ProductListA></ProductListA>
      <ProductListB></ProductListB>
    </div>
  );
}

export default App;
