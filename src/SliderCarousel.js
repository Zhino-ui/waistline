import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const images = [
//   'https://i.pinimg.com/originals/8c/b7/df/8cb7df0e69b0b8a5507c65a8ac09cbb7.jpg',
//   'https://i.pinimg.com/originals/9c/77/2e/9c772eb83d9a0f6607695f1f56ea9c4b.jpg',
//   'https://i.pinimg.com/originals/92/d2/4b/92d24b7a4b5e809304a358f2e1fa2b45.jpg',
// ];

const SliderCarousel = ({images}) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      };

    
      return (
        <div className="product-carousel">
          <Slider {...settings} >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Product ${index}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    


export default SliderCarousel;
