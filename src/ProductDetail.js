import React from 'react'
import Header from './Header'
import Footer from './Footer'
import shirts_data from './api/shirts_data';
import SliderCarousel from './SliderCarousel'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams();
    const product = shirts_data.find((shirt) => shirt.id.toString() === id);

    if (!product) {
        return <h2>Product not found</h2>;
      }
    
    const productImages = [
        product.image,
        product.image,
        product.image,
      ];
  return (
    <>
        <Header/>
        <div className='product-detail-page'>
            <div className='product-detail-container'>
            <div className='carousel'>
                <SliderCarousel className="slider" images={productImages} />
            </div>
            <div className='detail-text'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p id='sizes'>{product.sizes_available}</p>
                <h3>{product.price}</h3>
                <div className='detail-links'>
                    <Link className='link' to={"/"}>Go Home</Link>
                    <Link className='link' to={"/clothing"}>Back to Products</Link>
                    {/* <a href=''>Back to Home</a>
                    <a href=''>Browse more Products</a> */}
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ProductDetail
