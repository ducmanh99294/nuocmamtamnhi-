import React, { useEffect, useRef, useState } from 'react';
import '../assets/header.css';
import logo from '../assets/image/logo.png';
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const iconRef = useRef(null);
  const menuBtnRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // GSAP
  useEffect(() => {
  const isMobile = window.innerWidth <= 768;

  // nếu mobile thì không chạy animation
  if (isMobile)  {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "50px top",

      onEnter: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0)",
          duration: 0.4
        });

        gsap.to(logoRef.current, {
          scale: 1.2,
          y: 5,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(menuBtnRef.current, {
          opacity: 1,
          x: 40,
          duration: 0.4
        });

        gsap.to(navRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2
        });

        gsap.to(iconRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2
        });
      },

      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          backgroundColor: "#ffffff",
          backdropFilter: "blur(0px)",
          duration: 0.4
        });

        gsap.to(logoRef.current, {
          scale: 1,
          y: 0,
          duration: 0.4
        });

        gsap.to(menuBtnRef.current, {
          opacity: 1,
          x: 40,
          duration: 0.3
        });

        gsap.to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });

        gsap.to(iconRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });

    return () => trigger.kill();
  }

  const trigger = ScrollTrigger.create({
    trigger: document.body,
    start: "80px top",

    onEnter: () => {
      gsap.to(headerRef.current, {
        backgroundColor: "rgba(255,255,255,0)",
        duration: 0.5
      });

      gsap.to(logoRef.current, {
        x: -100,
        y: 25,
        scale: 1.5,
        duration: 0.6,
        ease: "power3.out"
      });

      gsap.to(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3
      });

      gsap.to(iconRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3
      });

      gsap.to(menuBtnRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5
      });
    },

    onLeaveBack: () => {
      gsap.to(headerRef.current, {
        backgroundColor: "#ffffff",
        duration: 0.5
      });

      gsap.to(logoRef.current, {
        x: 0,
        y:0,
        scale: 1,
        duration: 0.6
      });

      gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3
      });

      gsap.to(iconRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3
      });

      gsap.to(menuBtnRef.current, {
        opacity: 0,
        x: -80,
        duration: 0.3
      });
    }
  });

  return () => {
    trigger.kill();
  };
}, []);
  
  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-container">
        <div className="logo" ref={logoRef}>
          <a href="/">
            <img src={logo} alt=""  />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" ref={navRef}>
          <ul>
            <li><a onClick={() => navigate('/')} href="#home">Trang chủ</a></li>
            <li><a onClick={() => navigate('/products')}>Sản phẩm</a></li>
            <li><a onClick={() => navigate('/')} href="#story">Câu chuyện</a></li>
            <li><a onClick={() => navigate('/')} href="#qua-trinh">Quá trình</a></li>
          </ul>
        </nav>

        <div className="header-actions" ref={iconRef}>
          <button className="icon-btn"><i className="fas fa-search"></i></button>
          <button className="icon-btn"><i className="fas fa-shopping-cart"></i></button>
          {/* <button className="btn-primary-small">Đăng nhập</button> */}
        </div>

        {/* Mobile Menu Button */}
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={menuBtnRef}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          <ul>
            <li><a onClick={() => navigate('/')} href="">Trang chủ</a></li>
            <li><a onClick={() => navigate('/products')} href="">Sản phẩm</a></li>
            <li><a onClick={() => navigate('/')} href="#story">Câu chuyện</a></li>
            <li><a onClick={() => navigate('/')} href="#qua-trinh">Quá trình</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;