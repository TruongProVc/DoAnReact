import React from 'react';


const products = [
  {
    id: 1,
    image: '/images/products/xe1.png',
    title: 'Giant xanh',
    price: '$75.00 - $85.00',
    discountPrice: null,
    tag: 'sale',
    stars: 4,
  },
  {
    id: 2,
    image: '/images/products/xe2.png',
    title: 'Giant đỏ',
    price: '$80.00',
    discountPrice: '$89.00',
    tag: 'sale',
    stars: 4,
  },
  {
    id: 3,
    image: '/images/products/xe3.png',
    title: 'Cras neque metus',
    price: '$60.00',
    discountPrice: '$70.00',
    tag: 'sale',
    stars: 4,
  },
  {
    id: 4,
    image: '/images/products/xe1.png',
    title: 'Donec eu libero ac',
    price: '$74',
    discountPrice: null,
    tag: null,
    stars: 4,
  },
  
];

const Content2 = () => {
  return (
    <div className="product-default-slider-section section-top-gap-100 section-fluid">
      {/* Section Content */}
      <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content-gap">
                <div className="secton-content">
                  <h3 className="section-title">XE ĐẠP ĐUA (ROAD)</h3>
                  <p>Xe đạp chuyên đi với tốc độ cao </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Slider */}
      <div className="product-wrapper" data-aos="fade-up" data-aos-delay={200}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="product-slider-default-2rows default-slider-nav-arrow">
                <div className="swiper-container product-default-slider-4grid-2row">
                  <div className="swiper-wrapper">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="product-default-single-item product-color--pink swiper-slide"
                      >
                        <div className="image-box">
                          <a href="product-details-default.html" className="image-link">
                            <img src={product.image} alt={product.title} />
                          </a>
                          {product.tag && <div className="tag"><span>{product.tag}</span></div>}
                          <div className="action-link">
                            <div className="action-link-left">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">
                                Add to Cart
                              </a>
                            </div>
                            <div className="action-link-right">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview">
                                <i className="icon-magnifier" />
                              </a>
                              <a href="wishlist.html">
                                <i className="icon-heart" />
                              </a>
                              <a href="compare.html">
                                <i className="icon-shuffle" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <a href="product-details-default.html">{product.title}</a>
                            </h6>
                            <ul className="review-star">
                              {[...Array(5)].map((_, i) => (
                                <li key={i} className={i < product.stars ? 'fill' : 'empty'}>
                                  <i className="ion-android-star" />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              {product.discountPrice && <del>{product.discountPrice}</del>}{' '}
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation buttons (if needed) */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Content2;
