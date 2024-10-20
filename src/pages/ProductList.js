import React, { useState } from "react";
import Header from "../Components/Header";

import ProductCard from "../components/ProductCard";
import AddToCartModal from "../components/AddToCartModal";
import Pagination from "../components/Pagination";
import products from "../data/products";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartProduct, setCartProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 2;
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleAddToCart = (product) => {
    setCartProduct(product);
    setIsModalOpen(true);
  };

  const handleConfirmAddToCart = () => {
    alert(`${cartProduct.name} added to cart!`);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isModalOpen && (
        <AddToCartModal
          product={cartProduct}
          onClose={handleCloseModal}
          onConfirm={handleConfirmAddToCart}
        />
      )}
    </>
  );
};

export default ProductList;
