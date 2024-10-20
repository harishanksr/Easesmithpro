import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <img src={product.image} alt={product.name} />
        <div className="actions">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onClose}>Close</button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddToCartModal;
