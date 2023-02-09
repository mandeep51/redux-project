import React, { useEffect, useState } from "react";
import './ProductDetail.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Home.css'
import {add} from './CartSlice'
function ProductDetail() {
  const status1=localStorage.getItem('status')
    const dispatch=useDispatch()
  const id = localStorage.getItem("val");
  console.log(id);
  const [product, setState] = useState([]);
  const [status, setStatus] = useState('Not added To Cart');

  useEffect(() => {
    Aos.init({duration:2000})
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);
  return (
    <>
   <div
      className="product" data-aos="fade-up"
      key={product.id}>
      
        <div className="image">
        <img  className="product-image" src={product.image} alt="image" width="200px" height="200px"></img>
        <br />
        <button className="product-btn" onClick={()=>{dispatch(add(product));alert('Item is added to Cart');setStatus("Added To Cart");localStorage.setItem('status','Added to cart')}} >Add To Cart</button>

        </div>
        <div className="detail" data-aos="fade-right">
        <p><b style={{color:'red'}}>{product.title}</b></p>
        <p>
        {product.description}
        </p>
        <p><b>Price:</b>{product.price}<b>$</b></p>
        <p style={{color:'red',border:'1px solid red',padding:'10px'}}><b>{status}</b></p>
        </div>
    </div>
 </>
    );
}

export default ProductDetail;
