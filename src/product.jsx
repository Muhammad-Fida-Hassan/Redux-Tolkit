import React from "react";
import boootstrap from "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from "react-redux"
import { addItem } from "./redux/Slices/cartSlices";

const Product = (props) => {
    const dispatch=useDispatch();
    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img className="card-img-top" src={props.image} alt={props.productName} />
          <div className="card-body">
            <h5 class="card-title">{props.productName}</h5>
            <p class="card-text">Rs. {props.price}/-</p>
            <button
                onClick={() => {
                    dispatch(addItem(props));
                }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      );
}

export default Product;