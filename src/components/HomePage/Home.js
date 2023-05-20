import React from 'react'
import eStore from '../../ecommerce-store.png'

const Home = () => {
  return (
    <>
      <div className='home homeflex container d-flex'>
        <img className='homeimg' src={eStore} alt="" srcset="" />
        <div className='home container-fluid p-5'>
          <h4>React Ecommerce Store</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt sed natus quae accusantium sint veniam nobis mollitia nam commodi minima 
            aspernatur, cumque iusto quidem, ex laudantium veritatis laboriosam earum sit?</p>
          <div></div>
        </div>

      </div>
      <div className="marquee">
      <p behavior="" direction="left" >Hurryy....!!! 💃💃💥Today's Special offer :💥Flat 20% off on all electronic gadgets ---------------------------------
      Hurryy....!!! 💃💃💥Today's Special offer :💥Flat 20% off on all electronic gadgets</p>
      </div>
    </>

  )
}

export default Home
