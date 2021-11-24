import React from 'react'
import Car from "./Car"

const Cars =({list}) => {

    return (
<div className="car">
{list.map((card,i) =>
<Car cardCar={card} key={i}/>
    )
}

</div>

    )}   
export default Cars;
