import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {add} from './CartSlice'
import { useDispatch } from "react-redux";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

function Home() {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [products,setState]=useState([])
    useEffect(()=>{
      Aos.init({duration:2000})

        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setState(data)
        })
          
    },[])
  return (
    <>
     <p style={{margin:'2em',color:'red'}} data-aos="fade-right">
        <b>Buy things Online!</b>
      </p>
      <p style={{margin:'2em',fontSize:'14px'}} data-aos="fade-right">
        <b>If you are looking to buy things online our website is a perfect place to find in.We have all sorts of men and women clothing items that you would like to buy.Visit our website and check it out.</b>
      </p>
    <div className='card'>
       {
  products.map((product)=>{
    return <div  key={product.id} className='card-item' data-aos="fade-up">
        <img className='card-image' src={product.image} alt="image" width="200px" height="200px"></img>
        <p className='card-price'><b>Price</b>:{product.price}$</p>
        <p className='card-title'>{product.title}</p>
        <button className='card-btn' onClick={()=>{navigate("/product");localStorage.setItem('val',product.id)}}>Show More</button>
        <button className='card-btn' onClick={()=>{dispatch(add(product));alert('1 Item is added to Cart')}}>Add to Cart</button>
                </div>
    })
  } 
    </div>
    </>
  )
}

export default Home
