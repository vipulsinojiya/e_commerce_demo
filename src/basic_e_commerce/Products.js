import axios from "axios";
import {useNavigate} from 'react-router-dom';
import styles from "./cart.module.css";
import CartItems from './CartItems'

import React,{ useEffect, useState } from "react";
import { Link , NavLink} from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

/*  const addUserCart = async (e) =>{
    e.preventDefault();
      
    await axios.post("https://fakestoreapi.com/carts" , users)
    navigate("/cart");   // redirect other page
    <br></br><button onClick={addUserCart}>Add to Cart</button>
}
*/
    return(
        <div>
            <div  className={styles.main_image}>
              <img src="https://picsum.photos/200/300" alt="slider img" />
            </div> 
            
            <h2 className="text-center">Product List</h2>
            <table className="table border shadow">
                <tbody >
                {users.map((val,index) => {
                     console.log(index.id);
                            return( 
                                <tr style={{"text-align": "center"}}> 
                                    <td key={index.id}>{val.title} <CartItems /></td>
                                    
                                </tr> 
                                )      
                        })}
                </tbody>
            </table>
       </div>
    )
}
export default Products;