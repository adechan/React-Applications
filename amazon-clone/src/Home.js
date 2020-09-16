import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id={12321343}
          title="Infinity Love Heart Pendant Necklace Birthstone Crystal Jewelry Gifts for Women"
          price={39.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61kymtIzJrL._AC_SX385._SX._UX._SY._UY_.jpg"
        />

        <Product
          id={12321342}
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7)"
          price={2399.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX466_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={12321341}
          title="Apple iPhone 8, 64GB, Space Gray"
          price={260.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81F-QC1N5WL._AC_SY606_.jpg"
        />

        <Product
          id={12321344}
          title="925 Sterling Silver Adjustable Bracelet"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71IAlI9qi6L._AC_UY395_.jpg"
        />

        <Product
          id={12321341}
          title="Turtle Animal Swimming in the Blue Ocean Canvas Painting"
          price={43.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/616HWEbrXIL._AC_SY355_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={12321341}
          title="Impala Rollerskates Girl's Impala Quad Skate (Big Kid/Adult) Pink/Yellow 8"
          price={229.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81x3F0CmcbL._AC_SX522_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
