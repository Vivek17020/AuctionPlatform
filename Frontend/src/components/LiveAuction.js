import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css';
import card1 from './assests/_15a3b574-81ea-45f5-a733-21e57dccddfd.jpeg';
import card2 from './assests/images/img1.webp';
import card3 from './assests/images/img2.webp';
import card4 from './assests/_a7faac3a-418d-4b41-a922-497d95a13cda.jpeg';
import card5 from './assests/_e26a7e2d-5118-47de-8785-b6cacdcb0f74.jpeg';

function LiveAuction() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='Upcoming-Auction'>
      <p className='Upcoming-Auction-Title'>Ongoing Auction</p>
      <div className='UnderLine'></div>
      <div className='main-container'>
        <div className='sub-container'>
          <Slider {...settings}>
            {data.map((d) => (
              <div className='card-container' key={d.name}>
                <div className='image-card-container'>
                  <img src={d.img} alt="" className='image-card' />
                  <p className='AuctionName'>Auction</p>
                </div>
                <div className='product-details'>
                  <p className='product-title'>{d.name}</p>
                  <p className='product-desc'>{d.desc}</p>
                  <button className='bid' onClick={() => window.location.href = 'https://embed-crossmint.vercel.app/'}>Bid</button>
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
    name: 'Luxury Timepiece Auction',
    img: card1,
    desc: "A collection of rare and valuable timepieces. Bid now to own a piece of horological history with watches from the finest brands.Don't miss this opportunity."
  },
  {
    name: 'Vintage Car Collection',
    img: card2,
    desc: "Exclusive vintage cars from the 1960s and 1970s are up for auction. Explore and Get your hands on these timeless classics that are a symbol of elegance."
  },
  {
    name: 'Rare Art Auction',
    img: card3,
    desc: "A carefully curated selection of rare artworks by renowned artists. From classic paintings to contemporary sculptures, these pieces are sure to add value to any collection."
  },
  {
    name: 'Antique Furniture Auction',
    img: card4,
    desc: "An exquisite collection of antique furniture, ranging from Victorian-era pieces to mid-century modern designs. Perfect for collectors and interior enthusiasts."
  },
  {
    name: 'Exclusive Wine Auction',
    img: card5,
    desc: "Bid on rare bottles of wine, including vintage reds and whites from top wineries around the world. An ideal auction for connoisseurs looking to expand their collection."
  },
];

export default LiveAuction;
