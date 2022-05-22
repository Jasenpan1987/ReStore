import { useCallback, useEffect, useState } from "react";
import { IProduct } from "../../app/models/Products";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = useCallback(async () => {
    const response = await fetch("http://localhost:5000/api/products");
    const data: IProduct[] = await response.json();
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
}
