import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    // Fetch product details
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // Fetch related products from same category
        return fetch(`https://fakestoreapi.com/products?limit=4`);
      })
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.filter((p) => p.id !== parseInt(id)));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="container">
        {/* Product Details */}
        <div className="product-detail">
          <div className="product-image-section">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-breadcrumb">
              <a href="/">Home</a> / <a href="/products">Products</a> / {product.title}
            </div>

            <h1>{product.title}</h1>

            <div className="product-category">
              <p>{product.category}</p>
            </div>

            <div className="product-price">
              <h2>${product.price.toFixed(2)}</h2>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {/* Size Selector */}
            <div className="size-selector">
              <h3>Select Size</h3>
              <div className="sizes">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <h3>Quantity</h3>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Product Info */}
            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">SKU:</span>
                <span>{product.id}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span>{product.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>You May Also Like</h2>
            <div className="related-grid">
              {relatedProducts.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
