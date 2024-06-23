import React from "react";

const Highlights = () => {
    return (
      <highlight className="highlight">
        <div className="highlight-top">
          <h1>This weeks specials!</h1>
          <button className="menu-button">Online Menu</button>
        </div>
        <div className="highlight-bottom">
          <div className="highlight-column">
            <img src="/greek salad.jpg" alt="Greek Salad"/>
            <div className="text-container">
              <h2>Greek Salad</h2>
              <h3>$12.99</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <h2>Order a delivery</h2>
          </div>
          <div className="highlight-column">
            <img src="/bruchetta.svg" alt="Bruchetta"/>
            <div className="text-container">
              <h2>Bruchetta</h2>
              <h3>$5.99</h3>
            </div>
            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <h2>Order a delivery</h2>
          </div>
          <div className="highlight-column">
            <img src="/lemon dessert.jpg" alt="Lemon Dessert"/>
            <div className="text-container">
              <h2>Lemon Dessert</h2>
              <h3>$5.00</h3>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <h2>Order a delivery</h2>
          </div>
        </div>
      </highlight>
  );
};

export default Highlights;