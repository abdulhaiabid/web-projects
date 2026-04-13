import React from "react";
import styles from "./App.module.css";
import ProductCard from "./ProductCard";

import productImage1 from "../src/assets/product-images/product-1.jpg";
import productImage2 from "../src/assets/product-images/product-2.jpg";
import productImage3 from "../src/assets/product-images/product-3.jpg";
import productImage4 from "../src/assets/product-images/product-4.jpg";
import productImage5 from "../src/assets/product-images/product-5.jpg";
import productImage6 from "../src/assets/product-images/product-6.jpg";
import productImage7 from "../src/assets/product-images/product-7.jpg";
import productImage8 from "../src/assets/product-images/product-8.jpg";
import productImage9 from "../src/assets/product-images/product-9.jpg";
import productImage10 from "../src/assets/product-images/product-10.jpg";
import productImage11 from "../src/assets/product-images/product-11.jpg";
import productImage12 from "../src/assets/product-images/product-12.jpg";
import productImage13 from "../src/assets/product-images/product-13.jpg";

const App = () => {
  class Card {
    constructor(id, title, description, price, rating, imgReference){
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.rating = rating;
      this.imgReference = imgReference;
    }
  }

  let cards = [
    new Card(
      1,
      "Canon EOS 1200D DSLR",
      "Canon EOS 1200D DSLR with zoom lens and strap, ideal for entry-level photography.",
      "$449",
      4.5,
      productImage1
    ),
    new Card(
      2,
      "Vintage Rangefinder Camera",
      "Classic rangefinder with metallic silver finish and aperture ring, perfect for collectors.",
      "$299",
      2,
      productImage2
    ),
    new Card(
      3,
      "FED-5 Soviet Film Camera",
      "Retro FED-5 camera with Industar-61 lens, a piece of Soviet photographic history.",
      "$189",
      3.0,
      productImage3
    ),
    new Card(
      4,
      "Olympus OM-D Digital Camera",
      "Stylish Olympus OM-D with red strap, combining retro design with modern digital features.",
      "$899",
      4.6,
      productImage4
    ),
    new Card(
      5,
      "Fujifilm X-A3 Mirrorless Camera",
      "Compact Fujifilm X-A3 with sleek silver and black design, ideal for travel photography.",
      "$499",
      4.3,
      productImage5
    ),
    new Card(
      6,
      "Fujifilm X-T200 Mirrorless Camera",
      "Fujifilm X-T200 with bold orange backdrop, great for content creators and vloggers.",
      "$699",
      5,
      productImage6
    ),
    new Card(
      7,
      "Olympus Trip 35 Film Camera",
      "Vintage Olympus Trip 35 with dramatic lighting, a timeless classic for film enthusiasts.",
      "$159",
      3.9,
      productImage7
    ),
    new Card(
      8,
      "Sony Alpha 7 Mirrorless Camera",
      "Sony Alpha 7 with E-mount cover, professional-grade mirrorless camera for serious photographers.",
      "$1,199",
      4.8,
      productImage8
    ),
    new Card(
      9,
      "Canon DSLR with Lens Kit",
      "Canon DSLR with EF-S 24mm and zoom lenses, versatile setup for all shooting conditions.",
      "$749",
      3.5,
      productImage9
    ),
    new Card(
      10,
      "Fujinon XF 35mm Lens",
      "Fujinon Aspherical XF 35mm f/2 lens with dramatic lighting, sharp and weather-resistant.",
      "$399",
      4.7,
      productImage10
    ),
    new Card(
      11,
      "Fujifilm X-T4 Body",
      "Fujifilm X-T4 body with retro styling and manual dials, perfect for advanced shooters.",
      "$1,299",
      4.9,
      productImage11
    ),
    new Card(
      12,
      "Fujifilm X-T4 with Lens",
      "Fujifilm X-T4 paired with XF 18-55mm lens, a high-performance combo for professionals.",
      "$1,599",
      3.9,
      productImage12
    ),
    new Card(
      13,
      "Fujifilm X-T10 Mirrorless Camera",
      "Compact Fujifilm X-T10 with manual dials, great for travel and street photography.",
      "$649",
      4.4,
      productImage13
    )
  ];

  return (
    <section className={styles["products-section"]}>
      <h1 className={styles["main-heading"]}>Camera Products</h1>
      <div className={styles["cards-container"]}>
        {cards.map(card => (
          <ProductCard key={card.id} cardDetails={card}></ProductCard>
        ))}
      </div>
    </section>
  );
}

export default App;