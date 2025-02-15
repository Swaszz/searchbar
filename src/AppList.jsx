
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function AppList(props) {


  return (
    <>
    <div className='cardtop'>
       <Card className="cardbox"style={{width:'100%', height:'400px'}}>
      <Card.Img variant="top" src={props.productData.image} style={{width:'100%', height:'200px'}} />
      <Card.Body>
     
        <Card.Title className='card-title'>{props.productData.title}</Card.Title>
        
        <Card.Text className='card-price'>
        ${props.productData.price}
        </Card.Text>
        <div className='button'>
        <Link to={`/product-details/${props.productData.id}`}>
        <Button variant="warning">View Item</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
    </div> 
    </>
  )
}

export default AppList