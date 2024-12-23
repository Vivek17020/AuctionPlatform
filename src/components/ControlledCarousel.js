import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import vt_image1 from './assests/v1.jpeg'
import vt_image2 from './assests/Visa-launches-NFT-auction-inspired-by-iconic-footballers-ahead-of-World-Cup-Qatar-2022.jpeg.jpg'
import vt_image3 from './assests/Auction 2.jpeg.jpg'
import vt_image4 from './assests/webpc-passthru.webp'
import vt_image5 from './assests/sixty99Million.png'
import vt_image6 from './assests/art-exhibition-art-auction-painting.jpg'
import vt_image7 from './assests/Commercial-Real-Estate-Auctions.jpeg.jpg'

import './ControlledCarousel.css';


function ControlledCarousel() {
    let imagetext = "passes";
    return (

        <div className='carousel'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img className="image" src={vt_image5} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        {/* <h3>BHU VishwaNath Temple</h3> */}
                        <h3>"Peace cannot be kept by force; it can only be achieved by understanding"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="image" src={vt_image3} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        <h3>"We are the same in the End"</h3>
                        <p>Shree Kashi Vishwanath Temple</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="image" src={vt_image7} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        <h3>"In the end, all that matters is how much love we shared and the memories we created."</h3>
                        <p>Meenakshi Temple</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className='image' src={vt_image6} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        <h3>"We cannot Take anything with us in the End"</h3>
                        <p>Kedarnath Temple</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className='image' src={vt_image2} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        <h3>"Both Heaven and Hell is present here."</h3>
                        <p>Golden Temple</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className='image' src={vt_image4} alt={imagetext} />
                    <Carousel.Caption className='caroCaption'>
                        <h3>"Whether it's 10 pointer or 6 pointer, all will lead to Manikarnika."</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default ControlledCarousel