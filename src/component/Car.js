import React from 'react'
import {Card,Button} from 'react-bootstrap'


const Car = ({cardCar}) =>{
 const getprice = (car) => alert (`you have to pay ${car.name} to buy ${car.price}` )

  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cardCar.imgSrc} />
  <Card.Body>
    <Card.Title>{cardCar.name}</Card.Title>
    <Card.Text>
    {cardCar.price}
    </Card.Text>
    <Button  onClick ={() =>getprice(cardCar)} variant="primary"> buy it ! </Button>
  </Card.Body>
</Card>
    
</div>
    

  )
}

export default Car;

