import React from 'react';

const Donation = () => {
  const handleDonation = (amount) => {
    alert(`Thank you for your donation of €${amount}!`);
    // Here to integrate with a payment gateway API to process the payment
  };

  return (
    <div>
      <h2>Support Our Village</h2>
      <button onClick={() => handleDonation(1)}>Donate €1</button>
      <button onClick={() => handleDonation(5)}>Donate €5</button>
      <button onClick={() => handleDonation(10)}>Donate €10</button>
    </div>
  );
};

export default Donation;
