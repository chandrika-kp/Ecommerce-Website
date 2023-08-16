import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../../App.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';


let categorylist = []

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProductsData()
  }, []);

  const getProductsData = async () => {
    const productsJsonData = await axios.get("http://localhost:3002/products")
    console.log(productsJsonData.data)
    setProducts(productsJsonData.data)

    for (let posts = 0; posts < products.length; posts++) {
      const eachData = products[posts]
      for (let keys in eachData) {
        let eachCategory = eachData['category']
        categorylist.push(eachCategory)
      }
    }
    console.log(categorylist)
    let categorySet = new Set(categorylist)
    const categoriesarray = [...categorySet]
    console.log(categoriesarray)
    setCategories(categoriesarray)
  }

  return (
    <div className='MainDiv'>
      <div className="Filter">
        <h1>Filter</h1>
        <h6>category</h6>
        <div class="form-check">
          {
            categories.map((eachCat, index) => (
              <>
                <input type="checkbox" name={eachCat} />
                <label key={index}>{eachCat}</label><br />
              </>
            ))
          }
        </div>
      </div>
      <div className="products">
        {products.map((eachProduct, index) => (
          <div className='cardBlock'>
            <p>Product No: {index + 1}</p>
            <div className="card productimg" style={{ width: "18rem" }}>
              <img className='card-img-top' key={index} src={eachProduct.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{eachProduct.category}</h5>
                <p className="card-text">{eachProduct.title}</p>
                <p className="card-text"><b>Price:</b> $ {eachProduct.price}</p>
                {/* <NavLink to="/cart">
                  <button className="btn btn-primary mx-2">Add to cart</button>
                </NavLink> */}
                <NavLink className="btn btn-primary mx-2" to={`/products/${eachProduct.id}`}>View</NavLink>
                {/* <NavLink className="cart-sup" to="/cart">
                  <button>
                    <AiOutlineShoppingCart />
                  </button>
                </NavLink> */}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Products
