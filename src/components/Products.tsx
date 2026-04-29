import React, { useState } from 'react';
import '../assets/products.css';
import { useNotify } from '../hooks/useNotification';
import img1 from '../assets/image/Asset 14.png'
import img2 from '../assets/image/Asset 15.png'
import img3 from '../assets/image/Asset 17.png'
import img4 from '../assets/image/Asset 18.png'
import img5 from '../assets/image/Asset 16.png'

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const notify = useNotify();
  // Dữ liệu sản phẩm
  const products = [
    
// { id: 6, name: 'Kẹo mận dẻo', category: 'single', type: 'Kẹo', price: 55000, originalPrice: 70000, image: '🍬', badge: '', description: 'Kẹo mận dẻo thơm ngon cho mọi lứa tuổi' },
        {
        id: 1,
        image: img1,
        name: "Cá Cơm Than",
        price: 60000,
        description: "Hương vị chua ngọt tự nhiên, thanh lọc cơ thể",
        category: 'single',
        badge: 'hot'
    },
        {
        id: 2,
        image: img2,
        name: "Cá Cơm Sọc Tiêu",
        description: "Hương vị chua ngọt tự nhiên, thanh lọc cơ thể",
        price: 60000,
        category: 'single',
        badge: 'hot'
    },
        {
        id: 3,
        image: img3,
        name: "Cá Cơm Ruột Đỏ",
        description: "Hương vị chua ngọt tự nhiên, thanh lọc cơ thể",
        price: 60000,
        category: 'single',
        badge: 'hot'
    },
        {
        id: 4,
        image: img4,
        name: "Cá Cơm Trắng",
        description: "Hương vị chua ngọt tự nhiên, thanh lọc cơ thể",
        price: 60000,
        badge: 'hot',
        category: 'single'
    },
    // Combo sản phẩm
    { id: 5, name: 'Combo 4 chai nước mắm', category: 'combo', type: 'Combo', price: 210000, originalPrice: 240000, image: img5, badge: 'Hot', description: 'Set quà biếu sang trọng cho dịp lễ Tết', items: ['Cá Cơm Than (1 chai)', 'Cá Cơm Sọc Tiêu (1 chai)', 'Cá Cơm Ruột Đỏ (1 chai)', 'Cá Cơm Trắng (1 chai)'] },
    //  { id: 12, name: 'Combo Voucher Quà Tặng', category: 'combo', type: 'Combo', price: 500000, originalPrice: 650000, image: '💳', badge: 'Limited', description: 'Phiếu quà tặng linh hoạt cho người thân', items: ['Voucher 500k', 'Hộp quà cao cấp', 'Thiệp chúc mừng'] }
  ];

  // Lọc sản phẩm theo tìm kiếm và danh mục
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const singleProducts = filteredProducts.filter(p => p.category === 'single');
  const comboProducts = filteredProducts.filter(p => p.category === 'combo');

  // Thêm vào giỏ hàng
  const addToCart = () => {
    notify.info('Tính năng đang được phát triển', 'Thông báo');
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Sản phẩm của chúng tôi</h1>
          <p>Những sản phẩm được tuyển chọn kỹ lưỡng từ những quả mận ngon nhất</p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-wrapper">
            <div className="search-box">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-filter">
              <button
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                Tất cả
              </button>
              <button
                className={selectedCategory === 'single' ? 'active' : ''}
                onClick={() => setSelectedCategory('single')}
              >
                Sản phẩm lẻ
              </button>
              <button
                className={selectedCategory === 'combo' ? 'active' : ''}
                onClick={() => setSelectedCategory('combo')}
              >
                Combo
              </button>
            </div>
          </div>
          <div className="result-count">
            Tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm
          </div>
        </div>
      </section>

      {/* Single Products Section */}
      {selectedCategory !== 'combo' && singleProducts.length > 0 && (
        <section className="products-section">
          <div className="container">
            <h2 className="section-title">Sản phẩm lẻ</h2>
            <div className="products-grid">
              {singleProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <img src={product.image} className="product-image"/>
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-price">
                    <span className="current-price">{product.price.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <button className="btn-add-to-cart" onClick={() => addToCart()}>
                    Thêm vào giỏ
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Combo Products Section */}
      {selectedCategory !== 'single' && comboProducts.length > 0 && (
        <section className="products-section combo-section">
          <div className="container">
            <h2 className="section-title">Combo ưu đãi</h2>
            <div className="products-grid">
              {comboProducts.map(product => (
                <div key={product.id} className="product-card combo-card">
                  {product.badge && <div className="product-badge combo-badge">{product.badge}</div>}
                  <img src={product.image} className="product-image"/>
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  {product.items && (
                    <div className="combo-items">
                      <span className="combo-items-title">🎯 Bao gồm:</span>
                      <ul>
                        {product.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="product-price">
                    <span className="current-price">{product.price.toLocaleString('vi-VN')}₫</span>
                  </div>
                  {product.originalPrice && (
                      <span className="old-price">{product.originalPrice.toLocaleString('vi-VN')}₫</span>
                    )}
                  <div className="saving-badge">
                    Tiết kiệm {(product.originalPrice - product.price).toLocaleString('vi-VN')}₫
                  </div>
                  <button className="btn-add-to-cart" onClick={() => addToCart()}>
                    Thêm vào giỏ
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <div className="container">
            <div className="no-results-content">
              <span className="no-results-icon">🔍</span>
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Rất tiếc, không có sản phẩm nào phù hợp với từ khóa "{searchTerm}"</p>
              <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>Xóa bộ lọc</button>
            </div>
          </div>
        </div>
      )}

      {/* Mini Cart Sidebar (Tùy chọn) */}
      {/* {cart.length > 0 && (
        <div className="mini-cart">
          <div className="mini-cart-header">
            <span>🛒 Giỏ hàng</span>
          </div>
          <div className="mini-cart-items">
            {cart.slice(0, 3).map(item => (
              <div key={item.id} className="mini-cart-item">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <span>{(item.price * item.quantity).toLocaleString('vi-VN')}₫</span>
              </div>
            ))}
            {cart.length > 3 && <div className="mini-cart-more">+{cart.length - 3} sản phẩm khác</div>}
          </div>
          <div className="mini-cart-total">
            Tổng: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString('vi-VN')}₫
          </div>
        </div>
      )} */}

    </div>
  );
}

export default Products;