import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../../App.css";
import { NavLink, useParams } from "react-router-dom";
import "./MyCartitems.json"
import SelectedProducts from './SelectedProducts';

let selectedList = []

const ViewEachProduct = () => {

  const [eachProducts, setEachProducts] = useState({
    image: "",
    category: "",
    title: "",
    price: "",
    description: "",
    rating: {
      rate: "",
      count: ""
    }
  });

  const { id } = useParams();

  useEffect(() => {
    getProductsData()
  }, []);

  const getProductsData = async () => {
    const productsJsonData = await axios.get("http://localhost:3002/products/" + id)
    setEachProducts(productsJsonData.data)
  }

  const addToCart = () => {
    console.log(eachProducts)
    selectedList.push(eachProducts)
  }
  console.log(selectedList)

  // console.log(eachProducts)

  return (
    <>
      <div className='container viewProduct'>
        <div className="eachProductimg">
          <img className='card' src={eachProducts.image} alt="" />
        </div>
        <div className="eachproductDetails">
          <h4>{eachProducts.category}</h4>
          <h6>{eachProducts.title}</h6>
          <p>Price: {eachProducts.price}</p>
          <p>Description: {eachProducts.description}</p>
          <p>Rating rate ⭐: {eachProducts.rating.rate}</p>
          <p>Rating count: {eachProducts.rating.count}</p>

          <button className="btn btn-primary mx-2" onClick={addToCart}>Add to cart</button>

          <NavLink to="/products">
            <button className="btn btn-primary">Continue Shopping</button>
          </NavLink>
        </div>
      </div>
      <div >
        <SelectedProducts list={selectedList} title={"Items in Cart"} />
      </div>

    </>
  )
}

export default ViewEachProduct
