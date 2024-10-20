import React from "react";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
        />
      </div>
      <div className="icons">
        <i className="fas fa-user"></i> {/* Profile Icon */}
        <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
      </div>
    </header>
  );
};

export default Header;
