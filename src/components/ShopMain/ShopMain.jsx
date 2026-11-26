import { useEffect, useState } from 'react';
import './ShopMain.css';
import ProductCard from './../Products/Products';


function ShopMain({ products: initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch products');
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data.products)) {
          throw new Error('The product response was invalid');
        }

        setProducts(data.products.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price,
          imageUrl: product.thumbnail,
        })));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleAddToCart() {
    setCartCount(count => count + 1);
  }

  return (
    <div className="product-list">
      {loading && <p>Loading products...</p>}

      {error && <p role="status">Could not load products. Showing available sample products.</p>}

      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ShopMain;