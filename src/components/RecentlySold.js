import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css';
import card1 from './assests/_15a3b574-81ea-45f5-a733-21e57dccddfd.jpeg';
import card2 from './assests/_1bcb8358-8747-4911-9fda-c7532c93e93c.jpeg';
import card3 from './assests/_8dcaede4-91b4-49e0-ad68-fd4a9b028612.jpeg';
import card4 from './assests/_a7faac3a-418d-4b41-a922-497d95a13cda.jpeg';
import card5 from './assests/_e26a7e2d-5118-47de-8785-b6cacdcb0f74.jpeg';

function RecentlySold() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className='Upcoming-Auction'>
      <p className='Upcoming-Auction-Title'>Recently Sold</p>
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
    name: 'Limited Edition Sneakers',
    img: card1,
    desc: "A rare pair of limited edition sneakers recently sold to a collector. These sought-after shoes were part of a limited release and are now a collector’s dream."
  },
  {
    name: 'Vintage Rolex Submariner',
    img: card2,
    desc: "A coveted vintage Rolex Submariner was sold at auction, fetching an impressive price. This watch is a perfect blend of luxury and functionality and considered as rarest."
  },
  {
    name: 'Rare Comic Book Collection',
    img: card3,
    desc: "A collection of rare comic books, including first editions and iconic covers, was recently sold. The collection drew significant interest from comic enthusiasts."
  },
  {
    name: 'Guitar Used by Rock Legend',
    img: card4,
    desc: "A guitar once owned by a rock legend was sold at auction. This iconic instrument was part of a larger collection of memorabilia and reached a high bidding price."
  },
  {
    name: 'Antique Chinese Porcelain Vase',
    img: card5,
    desc: "An exquisite antique Chinese porcelain vase was recently sold for a record price. This piece of art, dating back centuries, found its way into a prestigious collection."
  },
];

export default RecentlySold;
