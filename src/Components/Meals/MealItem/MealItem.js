import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  //to render two decimals 
  const price = `${props.price.toFixed(2)}€`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <p className={classes.description}>{props.description}</p>
        </div>
        <div>
          <p className={classes.price}>{price}</p>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
          
      </div>
    </li>
  );
};

export default MealItem;
