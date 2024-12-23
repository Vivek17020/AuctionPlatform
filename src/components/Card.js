import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css';
import card1 from './assests/images/img3.webp';
import card2 from './assests/images/img1.webp';
import card3 from './assests/images/img2.webp';
import card4 from './assests/_a7faac3a-418d-4b41-a922-497d95a13cda.jpeg';
import card5 from './assests/_e26a7e2d-5118-47de-8785-b6cacdcb0f74.jpeg';

function Card() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='Upcoming-Auction'>
      <p className='Upcoming-Auction-Title'>Upcoming Auction</p>
      <div className='UnderLine'></div>
      <div className='main-container'>
        <div className='sub-container'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='card-container'>
                <div className='image-card-container'>
                  <img src={d.img} alt="" className='image-card' />
                  <p className='AuctionName'>Auction</p>
                </div>
                <div className='product-details'>
                  <p className='product-title'>{d.name}</p>
                  <p className='product-desc'>{d.desc}</p>
                  <button className='bid'>Bid</button>
                  <button className='ProductDetails'>View Details</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Luxury Watch Collection',
    img: card1,
    desc: "A rare collection of luxury watches, perfect for collectors. Explore timepieces from the world's most renowned brands, crafted with precision and style."
  },
  {
    name: 'Vintage Car Auction',
    img: card2,
    desc: "An exclusive auction featuring vintage cars from the 1950s and 1960s. Exlpore and Don’t miss your chance to own a classic car with a rich history."
  },
  {
    name: 'Rare Art Pieces',
    img: card3,
    desc: "Discover timeless art pieces from renowned artists. This auction offers a variety of paintings, sculptures, and prints that will add sophistication to any collection."
  },
  {
    name: 'Antique Jewelry Showcase',
    img: card4,
    desc: "An exquisite selection of antique jewelry. From Victorian-era brooches to Art Deco rings, this auction is a must for jewelry enthusiasts and collectors."
  },
  {
    name: 'Exclusive Wine Collection',
    img: card5,
    desc: "A collection of rare wines, each handpicked for its quality and vintage. Perfect for wine aficionados, this auction features bottles from the finest wineries."
  },
]

export default Card;
