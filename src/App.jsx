
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AppList from './AppList';
import Carousel from 'react-bootstrap/Carousel';
import car3 from './images/car3.jpeg';
import car2 from './images/car 2.jpeg';
import car1 from './images/car1.jpeg';
import './product.css'
import { useOutletContext, useSearchParams } from 'react-router-dom';

function App() {
  const { search: searchQuery } = useOutletContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || searchQuery || '';

  const[products,setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
     
    <Carousel>
      <Carousel.Item>
      <img src={car3} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={car2} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={car1} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
    </Carousel>
    
       
    <Container>
      <Row>
          {filteredProducts.map((product, index) => ( 
            <Col xs={12} sm={6} md={4} lg={3} key={index}> 
              <AppList productData={product} /> 
            </Col> 
          ))} 
          
      </Row>
    </Container>

    </>
  )
}

export default App
