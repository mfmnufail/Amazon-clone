import React from 'react'
import "./Home.css"
import Product from "./Product"


function Home() {
    return (
        <div className="home">
            <img className = "home__image" src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5220._CB408289997_.jpg" alt=""/>
          
          <div className="home__row">
          <Product
          id = {1}
          title= "Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
          price = {5.67}
          rating= {5}
          image = "https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
          
          />
          <Product
          id = {2}
          title= "AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
          price = {50}
          rating= {4}
          image = "https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
          />
          </div>

          <div className="home__row">
          <Product
          id = {3}
          title= "Nulaxy Bluetooth Car FM Transmitter Audio Adapter Receiver Wireless Hands Free Car Kit W 1.44 Inch Display - KM18 Black"
          price = {20}
          rating= {3}
          image = "https://images-na.ssl-images-amazon.com/images/I/61tWHX0mwNL._AC_SL1250_.jpg"
          />
          <Product
          id = {4}
          title= "AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 21 Inch, Black"
          price = {50}
          rating= {2}
          image = "https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
          />
          <Product
          id = {5}
          title= "Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
          price = {80}
          rating= {1}
          image = "https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SL1500_.jpg"
          />
          </div>

          <div className="home__row">
          <Product
          id = {6}
          title= "LG 49WL95C-W 49-Inch Curved 32: 9 Ultrawide Dqhd IPS with HDR10 and USB Type-C,49 Inch Curved - 32:9 DQHD Resolution"
          price = {1200}
          rating= {5}
          image = "https://images-na.ssl-images-amazon.com/images/I/612yBrnxozL._AC_SL1400_.jpg"
          />
          </div>
          

        </div>
    )
}

export default Home
