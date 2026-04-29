import React from 'react';
import '../assets/footer.css'
import logo from '../assets/image/logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Cột 1: Logo và mô tả */}
        <div className="footer-column">
          <div className="footer-logo"><img src={logo} alt="" /></div>
          <p className="footer-description">
            Mang tinh hoa ẩm thực truyền thống vào từng sản phẩm, 
            tạo nên những trải nghiệm độc đáo và khó quên.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className="footer-column">
          <h3 className="footer-title">Liên kết nhanh</h3>
          <ul className="footer-links">
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#products">Sản phẩm</a></li>
            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div className="footer-column">
          <h3 className="footer-title">Hỗ trợ</h3>
          <ul className="footer-links">
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách vận chuyển</a></li>
            <li><a href="#">Hướng dẫn mua hàng</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Bảo mật thông tin</a></li>
          </ul>
        </div>

        {/* Cột 4: Thông tin liên hệ */}
        <div className="footer-column">
          <h3 className="footer-title">Liên hệ</h3>
          <h3 >CÔNG TY TNHH TÂM NHĨ</h3>
          <ul className="footer-contact">
            <li>📍 15 Trường Sa, Ngũ Hành Sơn, Đà Nẵng</li>
            <li>📞 (088) 6474 234</li>
            <li>✉️ tamnhi@gmail.com</li>
          </ul>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fas fa-comment-dots"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Thương hiệu Tâm Nhỉ. Tất cả các quyền được bảo lưu.</p>
          <div className="payment-methods">
            <span>Thanh toán an toàn:</span>
            <span>VnPay</span>
            <span>Momo</span>
            <span>ZaloPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;