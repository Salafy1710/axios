import { useState, useEffect } from "react";
import { requestProducts } from "../axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

function Products() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await requestProducts.get("/products");

      console.log(response.data);
      setProductList(response.data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >

            <h2 className="font-semibold text-sm mb-2">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;