// import React from "react";
import { useNavigate } from "react-router-dom";
import "./featured-products.scss";
import safetyValveIcon from "../../assets/icons/safety-valve.svg";
import leakDetectorIcon from "../../assets/icons/leak-detector.svg";
import pipeWrenchIcon from "../../assets/icons/pipe-wrench.svg";

const products = [
  {
    id: 1,
    name: "Simple",
    price: 79.99,
    image: safetyValveIcon,
    description: "Get Everythin You want",
  },
  {
    id: 2,
    name: "Basic",
    price: 49.99,
    image: leakDetectorIcon,
    description: "WiFi-enabled with smartphone notifications",
  },
  {
    id: 3,
    name: "Professionally low",
    price: 34.99,
    image: pipeWrenchIcon,
    description: "Heavy-duty adjustable wrench for all your Needs",
  },
];

export function FeaturedProducts() {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate("/knobot");
  };

  return (
    <section id="featured" className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">${product.price}</span>
              <button className="buy-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="analyzer-cta">
        <h2>Not sure what you need?</h2>
        <p>
          Let our AI assistant analyze your plumbing issue and recommend the
          right parts
        </p>
        <button className="analyze-button" onClick={handleAnalyzeClick}>
          Talk to KnoBot
        </button>
      </div>
    </section>
  );
}
