import { Link } from 'react-router-dom';
import './CategoriesSection.css';

function CategoriesSection() {
  const categories = [
    {
      id: 'men',
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1617137984142-28ac9d194a0f?w=400&h=400&fit=crop',
    },
    {
      id: 'women',
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1595613191143-f3d5e5f3e3a0?w=400&h=400&fit=crop',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1611591747281-39bda266e70b?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="category-name">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
