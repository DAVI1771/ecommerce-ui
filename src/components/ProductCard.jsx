import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './ProductCard.css';

function ProductCard({ product, showAddToCart = true }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        {showAddToCart && (
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add
          </button>
        )}
      </div>
      
      <div className="product-info">
        <h5 className="product-name">{product.title}</h5>
        <p className="product-category">{product.category || 'Fashion'}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
