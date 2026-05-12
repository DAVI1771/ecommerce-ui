# LUXE - Modern Fashion E-Commerce UI

A professional, modern fashion e-commerce user interface built with React, featuring a responsive design, cart management, and product filtering capabilities.

## 🎯 Features

### Pages
- **Home Page**: Full-width hero banner, featured products grid, category showcase, and newsletter signup
- **Products Page**: Responsive product grid with filters (category, price range, size) and sorting options (price, newest)
- **Product Detail Page**: Large product image, detailed information, size/quantity selectors, and related products
- **Cart Page**: Shopping cart with item management, quantity control, and order summary with totals

### Technical Highlights
- ✅ React functional components with hooks
- ✅ Context API for cart state management
- ✅ React Router for seamless navigation
- ✅ LocalStorage persistence for cart data
- ✅ Real product data from fakestoreapi.com
- ✅ Mobile-first responsive design
- ✅ CSS Modules for component styling
- ✅ Zero CSS frameworks - pure CSS
- ✅ Smooth hover effects and transitions
- ✅ Accessible and semantic HTML

## 🎨 Design System

### Color Palette
- **Primary Black**: #000000
- **Primary White**: #FFFFFF
- **Accent Gold**: #D4AF37 (luxury accent)
- **Light Gray**: #F5F5F5 (backgrounds)
- **Text Primary**: #000000
- **Text Secondary**: #666666

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- Clean, minimal aesthetic with professional appearance

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: Below 768px

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Navigation header with cart badge
│   ├── Footer.jsx       # Company footer with links
│   ├── ProductCard.jsx  # Product display card component
│   ├── HeroSection.jsx  # Hero banner with CTA
│   ├── CategoriesSection.jsx  # Category showcase
│   └── NewsletterSection.jsx   # Email signup form
├── pages/               # Page components
│   ├── HomePage.jsx     # Landing page
│   ├── ProductsPage.jsx # Product listing with filters
│   ├── ProductPage.jsx  # Product detail view
│   └── CartPage.jsx     # Shopping cart
├── context/             # State management
│   └── CartContext.jsx  # Cart state with localStorage
├── hooks/               # Custom React hooks
│   └── useCart.js       # Cart context consumer hook
├── styles/              # Global and component styles
│   ├── index.css        # Global styles
│   └── *.css            # Component-specific styles
├── App.jsx              # Main app with routing
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecommerce-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## 🔄 State Management

### Cart Context
The application uses React Context API to manage cart state globally:

```javascript
// Add item to cart
addToCart(product, quantity, size)

// Remove item from cart
removeFromCart(productId, size)

// Update quantity
updateQuantity(productId, quantity, size)

// Get cart totals
getTotalPrice()  // Returns total price
getTotalItems()  // Returns total items count
```

**LocalStorage Persistence**: Cart data is automatically saved to localStorage and restored on page load.

## 🎯 Component Hierarchy

```
App
├── Header
│   └── Navigation with Cart Badge
├── Router
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── ProductGrid
│   │   ├── CategoriesSection
│   │   └── NewsletterSection
│   ├── ProductsPage
│   │   ├── FiltersSidebar
│   │   └── ProductGrid
│   ├── ProductPage
│   │   ├── ProductImage
│   │   ├── ProductInfo
│   │   ├── SizeSelector
│   │   ├── QuantitySelector
│   │   └── RelatedProducts
│   └── CartPage
│       ├── CartItems
│       └── OrderSummary
└── Footer
```

## 🎨 Key Design Decisions

1. **Mobile-First Approach**: Styles start with mobile and scale up
2. **No CSS Frameworks**: Pure CSS for full control and minimal bundle
3. **Component Reusability**: Shared components like ProductCard across pages
4. **Context over Redux**: Simpler state management for this scale
5. **Responsive Images**: Proper aspect ratios and object-fit for different screen sizes
6. **Smooth Transitions**: 0.3s ease transitions on all interactive elements

## 📱 Responsive Features

- **Header**: Sticky navigation that adapts to screen size
- **Product Grid**: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Filters**: Sidebar on desktop, collapsible on mobile
- **Cart**: Full layout on desktop, optimized single column on mobile
- **Hero Section**: Scales from 500px (desktop) to 300px (mobile)

## 🔗 API Integration

Products are fetched from [fakestoreapi.com](https://fakestoreapi.com):
- `/products` - Get all products
- `/products/{id}` - Get product details
- `/products?limit=n` - Get limited products

## 🚀 Performance Optimizations

- Lazy component loading via React Router
- Efficient re-renders with React hooks
- CSS minification in production build
- Image optimization with object-fit
- LocalStorage caching for cart data

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## 🔐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Future Enhancements

- [ ] User authentication
- [ ] Checkout functionality
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Product search
- [ ] Size guide
- [ ] Live chat support
- [ ] Payment integration
- [ ] Email notifications
Modern React e-commerce UI with cart and product pages
