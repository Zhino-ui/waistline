import React,{useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import shirts_data from './api/shirts_data'
import { Link } from 'react-router-dom'

const Clothing = () => {
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [shirtsPerPage] = useState(8);
  const [currentCategoryShirts, setCurrentCategoryShirts] = useState([]);

  useEffect(() => {
    const filteredShirts = shirts_data.filter(
      (shirt) => category === 'all' || shirt.category.toLowerCase().includes(category)
    );
    setCurrentCategoryShirts(filteredShirts);
    setCurrentPage(1); // Reset pagination when category changes
  }, [category]);

  const indexOfLastShirt = currentPage * shirtsPerPage;
  const indexOfFirstShirt = indexOfLastShirt - shirtsPerPage;
  const currentShirts = currentCategoryShirts.slice(indexOfFirstShirt, indexOfLastShirt);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className='clothing'>
      <Header/>
      <div className='shirts-container'>
        <div className='shirt-links'>
          <a href='#' onClick={() => handleCategoryChange('all')} className={category === 'all' ? 'active' : ''}>All</a>
          <a href='#' onClick={() => handleCategoryChange('short sleeves')} className={category === 'short sleeves' ? 'active' : ''}>Short Sleeves</a>
          <a href='#' onClick={() => handleCategoryChange('long sleeves')} className={category === 'long sleeves' ? 'active' : ''}>Long Sleeves</a>
          <a href='#' onClick={() => handleCategoryChange('shorts')} className={category === 'shorts' ? 'active' : ''}>Shorts</a>
          <a href='#' onClick={() => handleCategoryChange('trousers')} className={category === 'trousers' ? 'active' : ''}>Trousers</a>
          <a href='#' onClick={() => handleCategoryChange('kaftan')} className={category === 'kaftan' ? 'active' : ''}>Kaftan</a>
        </div>
        <div className='shirts-content'>
          <div className='shirt-advert'>
            <h1>We have the perfect gift for you!</h1>
            <p id='hidden'>What sets us apart is our dedication to quality, craftsmanship, and sustainability.<br/> We collaborate with talented designers and prioritize ethically sourced materials to create fashion-forward garments that you can feel good about wearing.</p> 
            <hr/>
            <img src='/images/ad.jpg' alt='advert1'/>
          </div>
          <div className='shirt-lists'>
            <div className='shirts-display'>
            {currentShirts.map((shirt) => (
              <div key={shirt.id} className='content-container'>
                <img src={shirt.image} alt={shirt.name} />
                <div className='content-text'>
                  <div className='content-heading'>
                    <h3>{shirt.name}</h3>
                    <p>{shirt.price}</p>
                  </div>
                  {/* <p>{shirt.sizes_available}</p> */}
                  <div className='content-price'>
                    <button>{shirt.category}</button>
                    <Link to={`/clothing/${shirt.id}`} id='details'>more...</Link>
                    
                  </div>
                </div>
              </div>
            ))}
            </div>
            {currentCategoryShirts.length > shirtsPerPage && (
              <div className='pagination'>
                <ul>
                  {Array.from({ length: Math.ceil(shirts_data.length / shirtsPerPage) }, (_, index) => (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? 'active' : ''}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Clothing
