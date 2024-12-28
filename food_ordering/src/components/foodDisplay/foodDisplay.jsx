import React, { useContext } from 'react'
import "./foodDisplay.css"
import { StoreContext } from '../../context/StoredContext'
import FoodIten from '../foodItem/FoodIten'
const foodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>
        Top dishes near you
      </h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
          if(category==='All' || category === item.category){
            return <FoodIten key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default foodDisplay
