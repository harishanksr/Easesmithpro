import React from "react";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productName = query.get("product");

  return (
    <div className="thank-you-page">
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
    </div>
  );
};

export default ThankYouPage;
