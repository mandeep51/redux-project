import React, { useEffect } from "react";
import "./Cart.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { remove } from "./CartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
      <p style={{margin:'2em',color:'red'}} data-aos="fade-right">
        <b>Added items will be shown here!</b>
      </p>
      <h4  data-aos="fade-right">
        Total Items Added: <span style={{color:'red'}}>{products.length}</span>
      </h4>
      {products.map((product) => {
        return (
          <div key={product.id} className="cart" data-aos="fade-up">
            <div className="cart-image">
              <img
                src={product.image}
                alt="image"
                width="200px"
                height="200px"
              ></img>
              </div>
            <div className="cart-price">
              <p>
                <b>Price</b>:{product.price}$
              </p>
              
            </div>
           
            <div >
            <button className="cart-btn"
                onClick={() => {
                  dispatch(remove(product.id));
                  alert("Press ok to remove item from cart");
                }}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        );
      })}

    </div>

  );
}

export default Cart;
