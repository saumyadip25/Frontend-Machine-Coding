import { useState, useEffect, useRef } from "react";
import Products from "./components/Products";

const LIMIT = 10;

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const target = useRef(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${
          (page - 1) * LIMIT
        }`
      );
      const data = await response.json();
      setProductsData((prev) => [...prev, ...data.products]);

      // Check if we've reached the end
      if (data.products.length < LIMIT || page * LIMIT >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    const targetElement = target.current;
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [loading, hasMore]);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      <div>
        {productsData.map((data) => {
          return <Products key={data.id} product={data} />;
        })}
      </div>
      <div ref={target} />
      {loading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Loading more products...</h2>
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
          <p>Error: {error}</p>
          <button onClick={retryFetch}>Retry</button>
        </div>
      )}
      {!hasMore && !loading && productsData.length > 0 && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>You've reached the end! No more products to load.</p>
        </div>
      )}
      {/* Intersection target - only render if we have more data */}
      {hasMore && <div ref={target} style={{ height: "20px" }} />}
    </div>
  );
};

export default App;
