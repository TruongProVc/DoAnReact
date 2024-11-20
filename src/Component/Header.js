
import React, { useState } from "react";
import '../Assets/Style.css';
import '../Assets/style.min.css';

import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; 
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false); 
  const handleLogout = () => {
    console.log("Đăng xuất");
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleSearch =()=>{
    setSearchOpen(!isSearchOpen);
  };
 

  return (
    <header className="header-section d-none d-xl-block">
      <div className="header-wrapper">
        <div className="header-bottom header-bottom-color--black section-fluid sticky-header sticky-color--black">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                {/* Start Header Logo */}
                <div className="header-logo">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/images/1.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* End Header Logo */}
                {/* Start Header Main Menu */}
                <div className="main-menu menu-color--white menu-hover-color--pink">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <a className="active main-menu-link" href="index.html">
                          Home <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="has-dropdown has-megaitem">
                        <a href="product-details-default.html">
                          Shop <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* End Header Main Menu */}
                {/* Start Header Action Link */}
                <ul className="header-action-link action-color--white action-hover-color--pink">
                  <li>
                    <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                      <FaShoppingCart size={20} color="white" />
                      <span className="item-count">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleSearch}>
                      <FaSearch size={20} color="white" />
                    </a>
                  </li>
                  <li className="user-dropdown">
                    <a href="#" onClick={toggleDropdown} className="user-icon">
                      <img src="/images/user.png" alt="User Avatar" className="user-avatar" />
                    </a>
                    {isDropdownOpen && (
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a href="#profile">Hồ sơ</a>
                          </li>
                          <li>
                            <a href="#" onClick={handleLogout}>Đăng xuất</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
                {/* End Header Action Link */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <div id="search" className={`search-modal ${isSearchOpen ? 'open' : ''}`}>
        <button type="button" className="close" onClick={toggleSearch} style={{color:'black'}}>
          ×
        </button>
        <form>
          <input type="search" placeholder="Tìm kiếm"  />
          <button type="submit" className="btn btn-lg btn-pink">
            <FaSearch size={10}></FaSearch>
          </button>
        </form>
        <div className="product-list">
          <div className="product-item">
            <img
              src="#"     
              alt="Product 1"
            />
            <p className="price">$19.99</p>
            <p className="name">Giày Thể Thao XYZ</p>
          </div>
          <div className="product-item">
            <img
              src="#"
              alt="Product 2"
            />
            <p className="price">$29.99</p>
            <p className="name">Giày Thể Thao XYZ</p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
