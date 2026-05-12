import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Fetch all products
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Get category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategoryFilter(categoryParam);
    }
  }, [searchParams]);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter((product) => product.category === categoryFilter);
    }

    // Apply price filter
    result = result.filter(
      (product) => product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    // Apply sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      // Keep original order for newest
      result = result.reverse();
    }

    setFilteredProducts(result);
  }, [products, categoryFilter, priceFilter, sortBy]);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceFilter([0, value]);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Shop All</h1>
          <button
            className="toggle-filters-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="products-content">
          {/* Sidebar Filters */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filter-group">
              <h3>Category</h3>
              <select value={categoryFilter} onChange={handleCategoryChange}>
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>

            <div className="filter-group">
              <h3>Price Range</h3>
              <div className="price-filter">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceFilter[1]}
                  onChange={handlePriceChange}
                  className="price-slider"
                />
                <p className="price-label">
                  $0 - ${priceFilter[1]}
                </p>
              </div>
            </div>

            <div className="filter-group">
              <h3>Size</h3>
              <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
                <option value="all">All Sizes</option>
                <option value="xs">Extra Small</option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>

            <button
              className="reset-filters-btn"
              onClick={() => {
                setCategoryFilter('all');
                setPriceFilter([0, 1000]);
                setSizeFilter('all');
              }}
            >
              Reset Filters
            </button>
          </aside>

          {/* Products */}
          <div className="products-main">
            <div className="products-toolbar">
              <p className="product-count">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
              <select value={sortBy} onChange={handleSortChange} className="sort-select">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {loading ? (
              <div className="loading">Loading products...</div>
            ) : filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
