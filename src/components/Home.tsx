import React, { useLayoutEffect, useEffect, useRef } from 'react';
import '../assets/home.css';
import banner from '../assets/image/banner.jpeg';
import dongchay1 from '../assets/image/dongchay.png';
import dongchay2 from '../assets/image/dongchay2.jpg';
import img1 from '../assets/image/food1.jpg'
import img2 from '../assets/image/food2.jpg'
import img3 from '../assets/image/food3.jpg'
import img4 from '../assets/image/food4.jpg'
import nuocmam from '../assets/image/nuocmam.png'
import bong from '../assets/image/bong.png'
import title from '../assets/image/title.png'
import descrip from '../assets/image/descrip.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  gsap.registerPlugin(ScrollTrigger);

  //hero
  const heroRef = useRef(null);
  const nuocmamRef = useRef(null);
  const bongRef = useRef(null);
  const titleRef = useRef(null);
  const descripRef = useRef(null);

  //review
  const sectionRef = useRef(null);
  const water2Ref = useRef(null);
  const titleRef2 = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // process
  const processRef = useRef(null);
  const quoteRef = useRef(null);
  const textRef = useRef(null);

  //tips
  const productSectionRef = useRef<HTMLDivElement | null>(null);
  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  const productGridRef = useRef<HTMLDivElement | null>(null);

const products= [
  {
    "img": img1,
    "title": "Cá Cơm Than",
    "price": 90000
  },
    {
    "img": img2,
    "title": "Cá Cơm Sọc Tiêu",
    "price": 90000
  },
    {
    "img": img3,
    "title": "Cá Cơm Ruột Đỏ",
    "price": 90000
  },
    {
    "img": img4,
    "title": "Cá Cơm Trắng",
    "price": 90000
  }
]
  // gsap

  //hero
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      opacity: 0,
      duration: 0.8
    })
      .from(nuocmamRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(bongRef.current, {
        opacity: 0,
        duration: 0.6
      }, "-=0.4")
      .from(titleRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.7
      }, "-=0.2")
      .from(descripRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6
      }, "-=0.3");

  }, []);

  //review
  useEffect(() => {
  if (window.innerWidth <= 768) return;
let ctx = gsap.context(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 60%",
      end: "bottom 20%",
      // scrub: 1.2,
      once: true,

      // markers: true
    }
  });
tl.add("startFlow");
    // dòng chảy 1 (background) zoom nhẹ + fade in
tl.fromTo(
  sectionRef.current,
  {
    clipPath: "inset(0 0 100% 0)", // che toàn bộ từ dưới lên
    opacity: 1
  },
  {
    clipPath: "inset(0 0 0% 0)",   // mở dần từ trên xuống dưới
    duration: 2.5,
    ease: "power2.out"
  },
  "startFlow"
);

    // dòng chảy 2 xuất hiện khi gần xong dòng chảy 1
    tl.fromTo(
      water2Ref.current,
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3.5,
        ease: "power3.out"
      },
      "startFlow+=1.2"
    );

    // title
    tl.from(
      titleRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.6
      },
      "startFlow"
    );

    // card 1
tl.from(card1Ref.current, {
        x: 0, 
        opacity: 0,
        duration: 1.8,
      },   "startFlow+=0.4");

    // card 2
tl.from(card2Ref.current, {
        x: 50,
        opacity: 0,
        duration: 1.8
      },   "startFlow+=0.6");

    // card 3
tl.from(card3Ref.current, {
        y: 50,
        opacity: 0,
        duration: 1.8
      },   "startFlow+=0.8");
});

    // Cleanup function: Xoá timeline khi unmount hoặc re-render để tránh lỗi
    return () => ctx.revert();
  }, []);

  //process
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 95%",
        end: "bottom 95%",
        once: true,
      }
    });

    // section fade in nhẹ
    tl.from(processRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.5
    });

    // tiêu đề hiện từ giữa ra
    tl.fromTo(
      quoteRef.current,
      {
        opacity: 0,
        scale: 1
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      }
    );

    // nội dung hiện từng dòng mềm mại
    tl.from(
      textRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5
      },
      "-=0.3"
    );

  }, []);

  //tips
useLayoutEffect(() => {
    // 1. Nếu màn hình nhỏ hoặc section chưa có, dừng lại
    if (window.innerWidth <= 768 || !productSectionRef.current) return;

    // 2. Kiểm tra xem products đã thực sự có data chưa
    // Nếu products là mảng rỗng [], thì chưa có card nào để animate cả
    if (!products || products.length === 0) return;

    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: productSectionRef.current,
          // Đẩy start xuống thấp hơn để dễ test, end ở cuối section
          start: "top 80%", 
          end: "bottom 60%", 
          
          // TẠM THỜI TẮT SCRUB ĐỂ TEST XEM CARD CÓ HIỆN KHÔNG
          // Nếu bạn thích card tự chạy một mạch khi cuộn tới, hãy dùng toggleActions
          toggleActions: "play none none none", 
          // scrub: 1, // Bạn có thể bật lại scrub sau khi đã thấy card xuất hiện
          
        }
      });
      tl.add("startFlow");

      tl.from(productTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7
      },"startFlow");

      tl.from(
        ".product-card", 
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: 0.2, // Giảm stagger xuống một chút để chạy mượt hơn
          duration: 0.8,
          ease: "back.out(1.7)" // Đổi ease một chút để card nảy lên đẹp hơn
        },
        "startFlow-=0.4" // Cho card chạy đè lên lúc title đang hiện
      );

    }, productSectionRef);

    return () => ctx.revert(); 

  }, [products]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" id="home"
       ref={heroRef}
      >
        <img src={banner} alt="" className='banner'/>
      <img src={nuocmam} alt="" className="nuocmam" ref={nuocmamRef} />
      <img src={bong} alt="" className="bong" ref={bongRef} />
      <img src={title} alt="" className="title" ref={titleRef} />
      <img src={descrip} alt="" className="descrip" ref={descripRef} />
      </section>

      {/* Features Section */}
    <section className="features-section" id="story">
      <img 
      src={dongchay1} 
      alt="Dòng chảy 1" 
      className="dongchay1" 
      ref={sectionRef} 
    />
      <img src={dongchay2} alt="" className='dongchay2' ref={water2Ref}/>
      <div className="background-overlay"></div>

      <div className="container custom-container">
        <h2 className="section-title" ref={titleRef2}>Câu Chuyện Nước Mắm Tâm Nhĩ</h2>
        
        <div className="features-layout">
          {/* Đoạn 1: Bên trái (Phía trên) */}
          <div className="feature-card card-top-left" ref={card1Ref}>
            {/* <h3>Di sản trăm năm</h3> */}
            <p>
              Nghề làm nước mắm tại Phan Thiết, tỉnh Bình Thuận nổi tiếng có từ lâu đời, 
              đến nay vẫn được lưu truyền qua nhiều thế hệ và ngày càng phát triển.
            </p>
          </div>

          {/* Đoạn 2: Bên phải (Căn giữa theo chiều dọc) */}
          <div className="feature-card card-right" ref={card2Ref}>
            {/* <h3>Nét đẹp làng nghề</h3> */}
            <p>
              Hình ảnh những chum ủ mắm, sân phơi mắm trở nên quen thuộc 
              và là nét đặc trưng tại những làng nghề nước mắm Phan Thiết.
            </p>
          </div>

          {/* Đoạn 3: Bên trái (Phía dưới) */}
          <div className="feature-card card-bottom-left" ref={card3Ref}>
            {/* <h3>Sứ mệnh "Tâm Nhĩ"</h3> */}
            <p>
              Với mục tiêu đưa nước mắm truyền thống trở thành thương hiệu nổi tiếng rộng rãi 
              nhưng vẫn giữ được nét văn hoá của làng nghề lâu năm, đó cũng chính là lý do 
              thương hiệu nước mắm <strong>“Tâm Nhĩ”</strong> ra đời.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonial */}
    <section className="testimonial" id="qua-trinh" ref={processRef}>
      <div className="container">
        <div className="testimonial-content">
          <div className="quote-icon" ref={quoteRef}>
            Quá trình tạo ra sản phẩm
          </div>

          <p ref={textRef}>
            Nước mắm Tâm Nhĩ đặc biệt là dòng nước mắm được ủ từ cá cơm tươi
            với muối hạt tinh khiết trong thùng gỗ, được đặt dưới nhà tôn kín,
            lên men hoàn toàn tự nhiên. Sau 18-24 tháng sẽ thu được nước cốt đầu
            tiên và đóng chai, không pha chế, không phụ gia và hoá chất độc hại,
            không hương liệu và phẩm màu, màu hổ phách, hậu vị thanh, mùi thơm dịu
            sẽ góp phần vào bữa cơm sum vầy, an toàn của gia đình Việt.
          </p>
        </div>
      </div>
    </section>

    <section className="products" id="bi-quyet" ref={productSectionRef}>
      <div className="container">
        <h2 className="section-title" ref={productTitleRef}>
          Bí quyết món ngon
        </h2>

        <div className="products-grid" ref={productGridRef}>
          {products.map((p, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={p.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}

export default Home;