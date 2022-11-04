import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

const Home = () => {

  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


    return(
        <div>
            <div  className={styles.main_image}>
              <img src="https://picsum.photos/200/300" alt="slider img" />
            </div>  

            <h2 className="text-center">List of categories</h2>
            
            <table className="table border shadow ">
                <tbody >
                {users.map((val,index) => {
                            return( 
                                <tr style={{"text-align": "center"}}>
                                  <td key={index.id}>{val.category}</td>
                                </tr> 
                                )       
                        })}
                </tbody>
            </table>
       </div>
    )
}

export default Home;