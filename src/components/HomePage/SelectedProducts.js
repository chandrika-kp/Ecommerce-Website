import React from 'react'

const SelectedProducts = (props) => {
  const selectedItemsArr = props.list
  console.log(selectedItemsArr)
  return (
    <>
      <div className='cart-items'>
        <h4>{props.title}</h4>
        {selectedItemsArr.map((selected, index) => (
          <>
            <ol start={index + 1} key={index}>
              <li>
                <img src={selected.image} style={{ width: "20px" }} alt="" />
                <p>{selected.title}</p>
                <p>{selected.price}</p>
              </li>
            </ol>
          </>
        ))}
      </div>
    </>
  )
}

export default SelectedProducts
