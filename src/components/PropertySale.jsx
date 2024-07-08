import React from 'react';

const PropertySale = () => {
  const handlePurchase = () => {
    alert('Thank you for purchasing a property for €1!');
    // Integrate with a payment gateway API here to process the purchase
  };

  return (
    <div className="property-sale-container">
      <h2>Purchase Property for €1</h2>
      <button onClick={handlePurchase}>Buy Now for €1</button>
    </div>
  );
};

export default PropertySale;
