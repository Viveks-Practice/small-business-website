import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import "./ProductsPage.css";
import almond_croissant_img from "./images/almond-croissant.png";
import artisan_sourdough_img from "./images/artisan-sourdough-bread.png";
import chocolate_chip_cookie_img from "./images/chocolate-chip-cookie.png";
import blueberry_muffin_img from "./images/blueberry-muffin.png";
import cinnamon_roll_img from "./images/cinnamon-roll.png";
import french_baguette_img from "./images/french-baguette.png";
import lemon_drizzle_img from "./images/lemon-drizzle-cake.png";
import vegan_banana_bread_img from "./images/vegan-banana-bread.png";
import raspberry_tart_img from "./images/raspberry-tart.png";
import pumpkinspiceloaf_img from "./images/pumpkin-spice-loaf.png";
import { initialProducts } from "./ProductsData";

// Sample product data (you will fill this with your own product data)

function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddProductModal(false);
  };

  return (
    <div>
      <button
        className="add-product-btn"
        onClick={() => setShowAddProductModal(true)}
      >
        + Add Product
      </button>
      <div className="product-grid">
        {products.map((product) => (
          // Wrap the entire card content in a Link component
          <Link to={`/products/${product.id}`} className="product-item-link">
            <div key={product.id} className="product-item">
              <h3 className="product-title">{product.title}</h3>
              <img
                src={product.imgUrl}
                alt={product.title}
                className="product-image"
              />
              <p className="product-price">{product.price}</p>
              {/* Remove the "More Details" button as it's no longer necessary */}
            </div>
          </Link>
        ))}
      </div>
      {showAddProductModal && (
        <AddProductModal
          onSubmit={handleAddProduct}
          onClose={() => setShowAddProductModal(false)}
        />
      )}
    </div>
  );
}

export default ProductsPage;
