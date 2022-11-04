import axios from "axios";
import {useNavigate} from 'react-router-dom';
import React,{ useEffect, useState } from "react";

const CartItems = () =>{
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

 
    const addUserCart = async (e) =>{
        e.preventDefault();
          
        await axios.post("https://fakestoreapi.com/carts" , users)
        navigate("/cart");   // redirect other page
     //   <br></br><button onClick={addUserCart}>Add to Cart</button>
    }
return (
        <form>
               <button onClick={addUserCart} > Add To Cart</button> 

        </form>

)

}

export default CartItems;